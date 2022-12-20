<script>
import { onMount } from "svelte"
import { goto } from "$app/navigation"
import Fuse from "fuse.js"
import { orderBy } from "lodash"
import { t } from "$lib/Translations"
import { client, fetchCart } from "$lib/store/shopifyClient"
import { selected, cartQuantity } from "$lib/store"
import AudioOption from "./AudioOption.svelte"
import Banner from "$lib/components/Banner.svelte"
import IconArrowLeft from "~icons/heroicons-outline/arrow-left"

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ bibles, handle } = data);

let cart = {}
let quantity = 1
let audio_capacity = 4
let limited_capacity = [
	{ handle: "megavoice-envoy-s-dual", capacity: 2 },
	{ handle: "megavoice-envoy-s", capacity: 4 },
	{ handle: "megavoice-envoy-ember", capacity: 4 },
	{ handle: "envoy-echo", capacity: 4 },
]
let results, query, product, selected_img, current_price, current_variation

onMount(async () => {
	selected.set([])
	cart = await fetchCart()
})

bibles = orderBy(bibles, ["pr"], ["desc"])

let engine = new Fuse(bibles, {
	shouldSort: true,
	includeMatches: true,
	threshold: 0.3, // At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
	location: 0, // Determines approximately where in the text is the pattern expected to be found
	distance: 50, // Determines how close the match must be to the fuzzy location (specified by location). An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch. A distance of 0 requires the match be at the exact location specified. A distance of 1000 would require a perfect match to be within 800 characters of the location to be found using a threshold of 0.8
	maxPatternLength: 12,
	minMatchCharLength: 1,
	keys: ["tt", "tv", "id", "ln", "pb", "cn"],
})

for (const player of limited_capacity) {
	if (player.handle == handle) {
		audio_capacity = player.capacity
	}
}

client.product.fetchByHandle(handle).then((current_product) => {
	product = current_product
	current_variation = product.variants[0].id
	selected_img = product.variants[0].image.src
	price = price(product.variants[0].price)
})

function addToCart() {
	const checkout_params = {
		variantId: btoa(current_variation),
		quantity: quantity,
		customAttributes: [
			{
				key: "bibles",
				value: JSON.stringify(
					bibles
						.filter((n) => $selected.includes(n.aid))
						.map((n) => {
							return { [n.aid]: n.tt }
						})
				),
			},
		],
	}
	cartQuantity.set($cartQuantity + quantity)
	client.checkout
		.addLineItems(btoa(cart.id), checkout_params)
		.then((checkout) => {
			goto("/store/cart")
		})
}

function price(itemPrice) {
	const amount = Number(itemPrice).toFixed(2)
	return amount + " " + "USD"
}
</script>

<svelte:head>
	<title>{$t("bible.audio_label_addBibleVersions")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner
		title={$t("bible.audio_label_addBibleVersions")}
		subtitle=""
		caption={$t("store.player_caption")}
		breadcrumbs={[
			{ link: `/bibles/`, title: $t('common.Bibles') },
			{ link: `/bibles/audio`, title: $t('common.Audio Bibles') },
			{ link: '#', title: $t('bible.audio_label_addBibleVersions') },
	]}
		subnav={[
		{title:$t("bible.audio_player_pearls"),url:'/bibles/audio/pearls'},
		{title:$t("bible.audio_player_megavoice"),url:'/bibles/audio/megavoice'},
		{title:$t("common.Audio Bibles"),url:'#',selected:true},
		{title:$t("store.cart_open"),url:'/store/cart'},
	]} />


<div class="flex flex-row rounded-lg text-xs md:text-sm">
	<aside class="mx-0.5 w-2/5 p-1 sm:w-1/3 md:mr-2 md:p-2 lg:w-1/4">
		{#if product}
			<div class="relative">
				<div
					class="mt-12 rounded-md">
					{#if selected_img}
						<img
							src="{selected_img}"
							alt="{product.title}"
							class="mx-auto w-full drop-shadow-lg" />
					{/if}
				</div>

				<p class="text-center">{product.title}</p>
				<p class="mt-2 text-center text-sm text-stone-700 dark:text-stone-200">
					{#each product.variants as variant}
						${variant.price}
						<br />
					{/each}
				</p>
				<button
					class="mx-auto mt-2 flex items-center justify-center rounded-md bg-stone-200 py-1 px-1 text-xs text-stone-600  hover:bg-stone-300 focus:outline-none"
					onclick="history.back()">
					<IconArrowLeft class="mr-2 h-3 w-3" />
					{$t("store.player_change")}
				</button>
			</div>

			<div class="mt-8 lg:col-span-5">
				{#if $selected.length}
					<ol class="list-decimal">
						{#each bibles as bible}
							{#if $selected.includes(bible.aid)}
								<li class="ml-6 text-sm text-blue-800">{bible.tt}</li>
							{/if}
						{/each}
					</ol>
				{/if}

				<form>
					<fieldset class="mt-2">
						<legend class="sr-only">
							{$t("store.select_variation")}
						</legend>
						<div class="flex">
							{#if product.variants.length > 1}
								{#each product.variants as variant}
									<input
										value="{variant.id}"
										type="radio"
										name="variant[]"
										class="sr-only"
										disabled="{variant.quantityAvailable === 0}" />
									<label
										for="{variant.id}"
										on:click="{() => {
											current_variation = variant.id
											current_price = price(variant.priceV2.amount)
										}}"
										class="{current_variation == variant.id
											? 'bg-blue-600 text-white'
											: 'text-stone-800 dark:text-stone-100'} mx-1 flex cursor-pointer flex-col items-center justify-center rounded-md p-3 text-sm uppercase focus:outline-none dark:bg-stone-800 sm:flex-1">
										{variant.title}
										<div class="text-sm">{price(variant.priceV2.amount)}</div>
									</label>
								{/each}
							{:else}
								<div class="product-page-price is-solo"></div>
							{/if}
						</div>
					</fieldset>

					<label class="mt-8 text-sm text-blue-500">
						{$t("common.Quantity")}:
						<input
							class="mx-auto mt-0.5 ml-4 w-2/3 rounded-md border bg-[url('/img/icons/shopping_cart.png')] bg-[length:15px_15px] bg-[top_10px_right_8px] bg-no-repeat
							pl-4 drop-shadow-md dark:border-stone-700 dark:bg-stone-500 dark:text-white"
							type="number"
							name="quantity"
							min="1"
							max="{product.variants[0].quantityAvailable ?? 100}"
							bind:value="{quantity}" />
					</label>
					<div class="mt-3 text-center text-xs text-stone-400">
						{$t("store.player_bulk")}
						<a class="underline" href="/about/contact">
							{$t("common.Contact Us")}
						</a>
					</div>

					<button
						type="submit"
						class:opacity-50="{$selected.length == 0}"
						disabled="{$selected.length == 0}"
						on:click|preventDefault="{addToCart}"
						class="button mt-3 w-full py-2">
						{#if $selected.length === 0}
							Select an Audio Bible
						{:else}
							{$t("store.add_cart")}
						{/if}
					</button>
				</form>

				<div class="mt-6">
					<div class="text-stone-500 dark:text-stone-200 dark:bg-stone-800 p-2 rounded">
						<p>{@html product.description}</p>
					</div>
				</div>
			</div>
		{/if}
	</aside>

	<div class="w-3/5 text-xs sm:w-2/3 md:p-1 md:text-sm lg:w-3/4">
		<input
			class="mx-auto my-2 block w-full max-w-md rounded-md border-stone-300 pl-12 text-sm
			focus:border-blue-500 focus:ring-blue-500 dark:bg-stone-600 dark:text-stone-200 dark:placeholder-stone-200
			bg-[url('/img/icons/filter.png')] bg-[length:15px_15px] bg-[top_10px_left_8px] bg-no-repeat"
			bind:value="{query}"
			on:input="{() => {
				results = engine.search(query).slice(0, 100)
			}}"
			placeholder="{$t('store.audio_filter')}"
			type="search" />

		<div
			id="audio-capacity-progress-bar"
			class="relative mx-auto mb-4 flex h-8 max-w-2xl place-items-center justify-center rounded-lg px-6">
			<div class="h-2 w-full rounded bg-stone-200 dark:bg-stone-100">
				<div
					class="h-2 rounded bg-blue-600"
					style="width: {$selected.length == 0
						? 0
						: $selected.length * (100 / audio_capacity)}%">
				</div>
			</div>
		</div>

		<fieldset
			class=" gap-2 overflow-scroll px-0.5 md:grid md:grid-cols-2 lg:grid-cols-3">
			{#if results && query != ""}
				{#each results as result}
					<AudioOption
						bible="{result.item}"
						audio_capacity="{audio_capacity}" />
				{/each}
			{:else}
				{#each bibles as bible}
					<AudioOption bible="{bible}" audio_capacity="{audio_capacity}" />
				{/each}
			{/if}
		</fieldset>
	</div>
</div>

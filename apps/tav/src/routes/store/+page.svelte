<script>
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@rgossiaux/svelte-headlessui"
import { client } from "$lib/store/shopifyClient"
import { t } from "$lib/Translations"

let collections = []

client.collection.fetchAllWithProducts().then((collectionsResponse) => {
	// Do something with the collections
	collections = collectionsResponse
})

$: commitments = [
	{
		title: $t("store.index_commitment_free_title"),
		description: $t("store.index_commitment_free_description"),
	},
	{
		title: $t("store.index_commitment_sharable_title"),
		description: $t("store.index_commitment_sharable_description"),
	},
	{
		title: $t("store.index_commitment_other_title"),
		description: $t("store.index_commitment_other_description"),
	},
]
</script>

<svelte:head>
	<title>{$t("common.Store")} | {$t("common.org_title")}</title>
</svelte:head>

<h2 class="sr-only">Our Commitments</h2>
<div
	class="mx-auto hidden max-w-7xl justify-center divide-x divide-stone-200 py-8 dark:divide-stone-500 md:flex">
	{#each commitments as commitment}
		<div class="w-1/3">
			<div
				class="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
				{commitment.icon ?? ""}
				<div
					class="ml-4 flex flex-auto flex-col text-stone-900 dark:text-stone-200">
					<h3 class="underline-offset-2 dark:underline">
						{commitment.title}
					</h3>
					<p class="text-sm">
						{commitment.description}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>

{#each collections as collection}
	<Disclosure>
		<div
			class="mx-auto mb-6 max-w-2xl rounded-xl border bg-stone-100 p-4 dark:border-stone-700
			   dark:bg-stone-500 md:px-8 lg:max-w-6xl ">
			<div class="md:flex md:items-center md:justify-between">
				<div class="text-stone-800 dark:text-stone-100">
					<h2
						class="mb-2 font-semibold tracking-tight md:text-lg lg:text-xl">
						{collection?.title}
					</h2>
					<p class="text-sm lg:text-base">{collection?.description}</p>
					<DisclosureButton class=" button-dbs mt-4 p-3">
						View the {collection?.title}
						<span aria-hidden="true">&rarr;</span>
					</DisclosureButton>
				</div>
				{#if collection.image}
					<img
						class="m-4 rounded-xl border bg-white p-2 sm:w-1/3"
						src="{collection.image.src}"
						alt="{collection.image.altText}" />
				{/if}
			</div>

			<DisclosurePanel>
				<div
					class="mt-6 grid grid-cols-2 gap-6 rounded-xl pb-6 md:grid-cols-4">
					{#each collection.products as product}
						<div class="group relative">
							<div
								class="overflow-hidden rounded-xl border bg-white dark:bg-stone-600 dark:border-stone-900 p-2 text-center group-hover:opacity-75 ">
								<img
									alt="{product.variants[0].image.alt}"
									src="{product.variants[0].image.src}"
									class=" h-full w-full object-cover object-center" />
								<h3 class="mt-2">
									<a
										href="{`/store/` +
											(collection.title === 'Audio Bible Players'
												? 'players/'
												: '') +
											`${product.handle}`}">
										<span class="absolute inset-0"></span>
										{product.title}
									</a>
								</h3>
								<h4>
									{#each product.variants as variant}
										${variant.price}
										{#if collection.title === "Treasure Libraries"}
											<span class="text-left text-xs">$, ${variant.title}</span>
										{/if}
									{/each}
								</h4>
							</div>
						</div>
					{/each}
				</div>
			</DisclosurePanel>
		</div>
	</Disclosure>
{/each}

<!--
	<img src={product.variants[0].image.src} />
	<h2>{product.id}</h2>
	<h2>{product.title}</h2>
	<h2>{product.description}</h2>
	<h2>{product.vendor}</h2>
	<h2>{product.productType}</h2>
	<h2>{product.tags}</h2>
	<h2>{product.variants[0].price}</h2>
	<h2>{product.variants[0].sku}</h2>
	<h2>{product.variants[0].inventoryQuantity}</h2>
	<h2>{product.variants[0].image.altText}</h2>
	<h2>{product.variants[0].image.id}</h2>
	<h2>{product.variants[0].image.originalSrc}</h2>
	<h2>{product.variants[0].image.transformedSrc}</h2>
	<p>{@html product.descriptionHtml }</p>
	-->

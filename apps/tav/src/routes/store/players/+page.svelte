<script>
import { client } from "$lib/store/shopifyClient"
import { t } from "$lib/Translations"

let collection
client.collection
	.fetchWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQzNDk1ODM1Mg==")
	.then((current_collection) => {
		collection = current_collection
		console.log(collection)
	})
</script>
<svelte:head>
	<title>{$t("common.Audio Bibles")} | {$t("common.org_title")}</title>
</svelte:head>

{#if collection}
	<div
		class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 rounded-xl bg-white shadow sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
		{#each collection.products as product}
			<div class="group relative">
				<div
					class="h-56 w-full overflow-hidden rounded-md shadow-md group-hover:opacity-75 lg:h-72 xl:h-80">
					{#if product?.variants[0]?.image}
						<img
							alt="{product.variants[0].image.alt}"
							src="{product.variants[0].image.src}"
							class="mx-auto h-full object-cover object-center" />
					{/if}
				</div>
				<h3 class="mt-4 text-sm text-stone-700">
					<a href="/store/players/{product.handle}">
						<span class="absolute inset-0"></span>
						{product.title}
					</a>
				</h3>
				<p class="mt-1 text-sm text-stone-500">{product.productType}</p>
				<p class="mt-1 text-xs text-stone-400">
					{#each product.variants as variant}
						${variant.price}, {variant.title}
						<br />
					{/each}
				</p>
			</div>
		{/each}
	</div>
{:else}
	Loading...
{/if}

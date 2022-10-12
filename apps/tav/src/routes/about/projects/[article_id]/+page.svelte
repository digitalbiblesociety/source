<script>
import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte"
import { onMount } from "svelte"
import { page } from "$app/stores"
import { t } from "$lib/Translations"

let article
let title
onMount(async () => {
	const wp_url = import.meta.env.VITE_WORDPRESS_URL
	let response = await fetch(`${wp_url}posts?slug=${$page.params.article_id}`)
	article = await response.json()
	console.log(article)
	title = (article[0].title ? article[0].title.rendered : "").replace(
		/<\/?[^>]+(>|$)/g,
		""
	)
})
</script>

<svelte:head>
	<title>{title} | {$t("common.org_title")}</title>
</svelte:head>

{#if article != undefined}
	<div
		id="proposals"
		class="relative flex h-48 md:h-56 xl:h-64 flex-col xl:rounded-t-lg bg-cover overflow-hidden -mt-2 -ml-1.5 -mr-1.5
			border-2 border-gray-500 border-b-0"
		style="background-image:url({article[0].acf.banner})">
		<div class="absolute inset-0 z-0 bg-gray-900 bg-opacity-60"></div>
		<div class="z-10 justify-start text-white">
			<Breadcrumbs
				breadcrumbs="{[
					{ link: `/about`, title: $t('About') },
					article[0].categories.includes(5)
						? {
								link: `/about/projects/proposals`,
								title: $t('common.Proposals'),
						  }
						: {
								link: `/about/projects/stories`,
								title: $t('common.Stories'),
						  },
					{ link: '#', title: article[0].title.rendered },
				]}" />
		</div>
		<h1
			class="z-10 mt-2 md:mt-4 xl:mt-8 block max-w-prose p-4 text-center text-2xl md:text-3xl font-bold text-gray-100">
			<span
				class="block text-center font-semibold uppercase tracking-wide">
				{new Date(article[0].date).toDateString()}
			</span>
			{@html article[0].title ? article[0].title.rendered : ""}
		</h1>
	</div>

	<div class="relative mx-auto max-w-6xl pt-8 text-lg">
		<div
			class="prose prose-lg prose-blue mx-auto mt-6 prose-img:mx-auto prose-img:max-h-96 prose-img:w-auto prose-img:rounded-xl dark:prose-invert">
			{@html article[0].content ? article[0].content.rendered : ""}
		</div>

		{#if article[0].author_full_name}
			<div
				class="my-4 flex justify-center border-t-2 border-gray-300 py-4 dark:border-gray-600">
				<div class="flex items-center">
					<div>
						<img
							class="inline-block h-9 w-9 rounded-full"
							src="{article[0].author_avatar_url}"
							alt="{article[0].author_full_name}" />
					</div>

					<div class="ml-3">
						<p
							class="text-sm text-gray-700 group-hover:text-gray-900 dark:text-gray-300">
							{article[0].author_full_name}
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
{/if}

<script>
import { onMount } from "svelte"
import MenuSubNav from "$lib/components/Partials/MenuSubnav.svelte"
import { t } from "$lib/translations/index.js"
import Banner from "$lib/components/Banner.svelte"

let article = undefined
let articles = []
onMount(async () => {
	const wp_url = import.meta.env.VITE_WORDPRESS_URL
	let response = await fetch(`${wp_url}posts?per_page=3&categories=5`)
	articles = await response.json()
	console.log(article)
})
</script>

<svelte:head>
	<title>{$t("common.Project") + ' ' + $t("common.Proposals")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("common.Project") + ' ' + $t("common.Proposals")}
	subtitle="" 
	caption={$t("about.work_proposals_description")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: `/about/projects`, title: $t('common.Projects') },
		{ link: '#', title: $t('common.Proposals') },
	]}
	subnav={[
		{title:$t("common.Overview"),url:'/about/projects/'},
		{title:$t("common.Stories"),url:'/about/projects/stories'},
		{title:$t("common.Project") + ' ' + $t("common.Proposals"),url:'/about/projects/proposals',selected:true}
	]} />


<section
	class="mx-auto px-4 mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
	{#if articles.length !== 0}
		{#each articles as article}
			<a
				class="flex flex-col overflow-hidden rounded-lg border border-gray-300 shadow-lg
							dark:border-gray-800 dark:bg-slate-600"
				href="{`/about/projects/${article.slug}`}">
				{#if article.featured_media_src_url}
					<div class="flex-shrink-0">
						<img
							class="h-48 w-full object-cover"
							src="{article.featured_media_src_url}"
							alt="{article.slug}" />
					</div>
				{/if}
				<div class="flex flex-1 flex-col justify-between p-6">
					<div class="flex-1">
						<div class="mt-2">
							<p class="text-xl font-semibold text-gray-900 dark:text-gray-200">
								{@html article.title.rendered}
							</p>
							<p class="mt-3 text-base text-gray-500 dark:text-gray-300">
								{@html article.excerpt.rendered}
							</p>
						</div>
					</div>

					<div class="mt-6 flex items-center">
						{#if article.author_avatar_url}
							<div class="flex-shrink-0">
								<img
									class="h-10 w-10 rounded-full"
									src="{article.author_avatar_url}"
									alt="{article.title.rendered}" />
							</div>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	{/if}
</section>

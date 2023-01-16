<script>
	import { onMount } from "svelte"
	import { t } from "$lib/Translations/index.js"
	import Banner from "$lib/components/Banner.svelte"
	import { page } from "$app/stores"


	const wp_url = import.meta.env.VITE_WORDPRESS_URL
	
	let articles = []
	let article_pages = []
	let article_count = 0
	
	let articles_per_page = 3
	let breadcrumbs
	let title
	
	let current_page = $page.url.searchParams.get("page") || 1
	
	onMount(async () => {
		let response = await fetch(`${wp_url}posts?per_page=${articles_per_page}&page=${current_page}&categories=5`)
		article_count = response.headers.get("X-WP-Total")
		article_pages = new Int8Array(roundUp(article_count / articles_per_page, 0))
		articles = await response.json()
		console.log(articles)
	})
	
	async function loadPosts(event) {
		current_page = event.target ? event.target.dataset.page : 1
		articles = await fetch(`${wp_url}posts?per_page=${articles_per_page}&page=${current_page}&categories=5`).then((resp) => resp.json())
	}
	
	function roundUp(num, precision) {
		precision = Math.pow(10, precision)
		return Math.ceil(num * precision) / precision
	}
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

	
	<div class="relative px-4 pt-8 pb-16 sm:px-6 lg:px-8">
		<div class="mx-auto px-4 mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#if articles.length !== 0}
				{#each articles as article}
					<a
						class="flex flex-col overflow-hidden rounded-lg border border-stone-300 shadow-lg
								dark:border-stone-800 dark:bg-slate-600"
						href="{`/about/projects/${article.slug}`}">
						{#if article.featured_media_src_url}
							<div class="flex-shrink-0">
								<img
									class="h-48 w-full object-cover"
									src="{article.featured_media_src_url}"
									alt="${article.slug}" />
							</div>
						{/if}
						<div class="flex flex-1 flex-col justify-between p-6">
							<div class="flex-1">
								<div class="mt-2">
									<p
										class="text-xl font-semibold text-stone-900 dark:text-stone-200">
										{@html article.title.rendered}
									</p>
									<p class="mt-3 text-stone-500 dark:text-stone-300">
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
								<div class="ml-3">
									{#if article.author_full_name}
										<div
											class="text-sm text-stone-900 dark:text-stone-300">
											{article.author_full_name}
										</div>
									{/if}
									<div
										class="flex space-x-1 text-sm text-stone-500 dark:text-stone-400">
										<p
											class="text-sm text-blue-400 dark:text-stone-200">
											<span class="hover:underline">
												{new Date(article.date).toDateString()}
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</a>
				{/each}
			{/if}
		</div>
	</div>
	
	<nav
		class="mb-12 flex items-center justify-between border-b border-stone-200 px-4 py-3 sm:px-6"
		aria-label="current_page">
		<div class="hidden sm:block">
			<p class="text-sm text-stone-700 dark:text-stone-200">
				{$t("common.Showing")}
				<span class="font-medium">
					{current_page !== 1
						? articles_per_page * current_page - articles_per_page
						: 1}
				</span>
				-
				<span class="font-medium">
					{current_page !== 1
						? articles_per_page * current_page
						: articles_per_page * current_page}
				</span>
				&nbsp; | &nbsp;
				<span class="font-medium">{article_count}</span>
				{$t("common.Proposals")}
			</p>
		</div>
	
		<div class="flex flex-1 justify-between text-sm sm:justify-end">
			{#if current_page > 1}
				<button
					on:click="{loadPosts}"
					data-page="{Number(current_page) - 1}"
					class="cursor-pointer rounded-md border border-stone-300 bg-white px-4 py-2 text-stone-700 hover:bg-stone-50 dark:bg-slate-700 dark:text-stone-200">
					{$t("common.Previous")}
				</button>
			{/if}
			{#if current_page < article_pages.length}
				<button
					on:click="{loadPosts}"
					data-page="{Number(current_page) + 1}"
					class="ml-3 cursor-pointer rounded-md border border-stone-300 bg-white px-4 py-2 text-stone-700 hover:bg-stone-50 dark:bg-slate-700 dark:text-stone-200">
					{$t("common.Next")}
				</button>
			{/if}
		</div>
	</nav>
	
<script>
	import Banner from "$lib/components/Banner.svelte"
	import { t } from "$lib/Translations"

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ libraries } = data);
</script>

<svelte:head>
	<title>{$t("common.Treasures Libraries")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner
		title={$t("common.Treasures Libraries")}
		subtitle=""
		caption={$t("libraries.treasures_caption")}
		breadcrumbs={[
			{ link: `/libraries`, title: $t('common.Libraries') },
			{ link: '#', title: $t('common.Treasures Libraries') },
		]}
		subnav={[
			{title:$t("common.Overview"),url:'/libraries/'},
			{title:$t("common.Treasures Libraries"),url:'/libraries/treasures',selected:true},
			//{title:$t("common.Bible") + " " + $t("common.Libraries"),url:'/libraries/bible'},
			{title:$t("common.FAQs"),url:'/libraries/faqs'},
		]} />


<section id="container" class="mx-auto max-w-5xl">


	<ul class="mx-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each libraries as library}
			<li
				class="col-span-1 divide-y divide-stone-200 rounded-lg bg-white shadow dark:divide-stone-500 dark:bg-stone-800">
				<a href="/libraries/treasures/{library.id}">
					<div
						class="flex w-full items-center justify-between space-x-6 drop-shadow-xl">
						<div
							class="flex-1 truncate rounded-t-lg p-6"
							style="background-image:url(https://images.bible.cloud/treasures/banners/{library.id}.jpg);background-size:cover;">
							<div class="flex items-center space-x-3">
								<h3
									class="text-shadow block w-full truncate text-center text-xl text-stone-100">
									{library.title_vernacular}
								</h3>
							</div>
							<p
								class="text-shadow mt-1 block w-full truncate text-center text-xl text-stone-200">
								{library.title}
							</p>
						</div>
					</div>
					<div>
						<div
							class="-mt-px flex divide-x divide-stone-200 dark:divide-stone-500">
							<div class="flex w-0 flex-1">
								<a
									target="_blank"
									href="http://downloads.dbs.org/treasures/{library.iso.toUpperCase()}/index.html"
									class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm text-stone-700 hover:text-blue-500 dark:text-stone-200 dark:hover:text-white">
									<svg
										class="h-5 w-5 text-stone-400"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
										</path>
									</svg>
									<span class="ml-1">{$t("common.Demo")}</span>
								</a>
							</div>
							<div class="-ml-px flex w-0 flex-1">
								<a
									href="https://dbs-web.s3.us-west-2.amazonaws.com/downloads/treasureslibraries/{library.iso.toUpperCase()}.zip"
									class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm text-stone-700 hover:text-blue-500 dark:text-stone-200 dark:hover:text-white">
									<svg
										class="h-5 w-5 text-stone-400"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4">
										</path>
									</svg>
									<span class="ml-1">{$t("common.Download")}</span>
								</a>
							</div>
							<div class="-ml-px flex w-0 flex-1">
								<a
									href="/libraries/treasures/{library.id}"
									class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm text-stone-700 hover:text-blue-500 dark:text-stone-200 dark:hover:text-white">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5 text-stone-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
										</path>
									</svg>
									<span class="ml-1">{$t("common.Overview")}</span>
								</a>
							</div>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

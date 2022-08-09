<script>
	import { t } from "$lib/translations/index.js"
	import Banner from "$lib/components/Banner.svelte"
</script>

<svelte:head>
	<title>{$t("common.About")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("about.overview_title")} 
	subtitle=""
	caption={$t("about.overview_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: '#', title: $t('common.Overview') },
	]}
	subnav={[
		{title:$t("common.Background"),url:'/about/overview/',selected:true},
		{title:$t("common.Mission"),url:'/about/overview/mission'},
		{title:$t("common.History"),url:'/about/overview/history'},
		{title:$t("common.Values"),url:'/about/overview/values'},
		{title:$t("common.Beliefs"),url:'/about/overview/beliefs'},
	]} />


<section class="mt-12 flex h-full justify-between pb-24">
	<div class="prose-base mb-8 px-8 dark:prose-invert md:px-24 lg:px-32">
		<h3>{$t("about.overview_sub1")}</h3>
		<p>{$t("about.overview_p1")}</p>
		<p>{$t("about.overview_p2")}</p>
		<div class="float-right m-2 w-1/2 rounded-lg border bg-white p-1 pr-3">
			<a href="/img/chart_christian_pop_2020.gif" target="_blank">
				<img
					src="/img/chart_christian_pop_2020.gif"
					class="w-auto"
					alt="Christian Population 2020" />
			</a>
		</div>
		<p>{$t("about.overview_p3")}</p>
		<p>{$t("about.overview_p4")}</p>
		<h3>{$t("about.overview_sub2")}</h3>
		<p>{$t("about.overview_p5")}</p>
		<p>{$t("about.overview_p6")}</p>
		<p>{$t("about.overview_p7")}</p>
		<p>{$t("about.overview_p8")}</p>
		<p>{$t("about.overview_p9")}</p>
		<p>{$t("about.overview_p10")}</p>

		<img
			src="/img/biblical_resources.png"
			alt="Bible Resources by Type"
			class="p-2" />
	</div>
</section>

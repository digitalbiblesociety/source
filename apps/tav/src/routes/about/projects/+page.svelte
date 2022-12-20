<script>
	import { t } from "$lib/Translations/index.js"
	import Banner from "$lib/components/Banner.svelte"
</script>

<svelte:head>
	<title>{$t("common.Projects")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner 
	title={$t("about.work_proposals_title")} 
	subtitle="" 
	caption={$t("about.work_proposals_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: `/about/projects`, title: $t('common.Projects') },
		{ link: '#', title: $t('common.Overview') },
	]}
	subnav={[
		{title:$t("common.Overview"),url:'/about/projects/',selected:true},
		{title:$t("common.Stories"),url:'/about/projects/stories'},
		{title:$t("common.Project") + ' ' + $t("common.Proposals"),url:'/about/projects/proposals'}
	]} />

<section class="mx-auto px-4 my-12">
	<div class="prose mx-auto px-4 mt-8 max-w-none leading-6 text-stone-500 dark:prose-invert dark:text-stone-300 overflow-hidden">
		<p>{$t("about.work_proposals_1")}</p>
		<p>{$t("about.work_proposals_2")}</p>
		<p>{$t("about.work_proposals_3")}</p>
		<p>{$t("about.work_proposals_4")}</p>
	</div>
</section>


<script>
	import { t } from "$lib/Translations/index.js"
	import Banner from "$lib/components/Banner.svelte"
</script>
	
	<Banner 
		title={$t("common.Project Proposals")}
		subtitle=""
		caption={$t("about.work_proposals_caption")}
		breadcrumbs={[
			{ link: `/about/`, title: $t('common.About') },
			{ link: `/about/projects`, title: $t('common.Our Work') },
			{ link: '#', title: $t('common.Proposed') },
		]}
		subnav={[
			{title:$t("common.Bibles"),url:'/about/work/biblecloud'},
			{title:$t("common.Libraries"),url:'/about/work/libraries'},
			{title:$t("common.Audio"),url:'/about/work/audio-bibles'},
			{title:$t("common.Print"),url:'/about/work/print'},
			{title:$t("common.Study Bible"),url:'/about/work/sophia'},
			{title:$t("common.Research"),url:'/about/work/research'},
			{title:$t("common.Proposals"),url:'/about/work/proposals',selected:true}
		]} />

	<div
		id="copy"
		class="prose mx-auto max-w-5xl mt-8 leading-6 text-gray-500 dark:prose-invert dark:text-gray-300">
		<img
			src="/img/about/projects_proposals.png"
			alt="Proposals"
			class="float-right w-1/2" />
		<p>{$t("about.work_proposals_1")}</p>
		<p>{$t("about.work_proposals_2")}</p>
		<p>{$t("about.work_proposals_3")}</p>
		<p>{$t("about.work_proposals_4")}</p>

		<a class="button-dbs" href="/about/projects/">
			{$t("about.work_proposals_action1")}
		</a>
	</div>

<script>
	import { t } from "$lib/Translations/index.js"
	import Banner from "$lib/components/Banner.svelte"
</script>
	
	<Banner 
		title={$t("about.work_research_title")} 
		subtitle=""
		caption={$t("about.work_research_caption")}
		breadcrumbs={[
			{ link: `/about/`, title: $t('common.About') },
			{ link: `/about/projects`, title: $t('common.Our Work') },
			{ link: '#', title: $t('common.Research') },
		]}
		subnav={[
			{title:$t("common.Bibles"),url:'/about/work/biblecloud'},
			{title:$t("common.Libraries"),url:'/about/work/libraries'},
			{title:$t("common.Audio"),url:'/about/work/audio-bibles'},
			{title:$t("common.Print"),url:'/about/work/print'},
			{title:$t("common.Study Bible"),url:'/about/work/sophia'},
			{title:$t("common.Research"),url:'/about/work/research',selected:true},
			{title:$t("common.Proposals"),url:'/about/work/proposals'}
		]} />

	<div
		id="copy"
		class="prose mx-auto max-w-5xl mt-8 leading-6 text-stone-500 dark:prose-invert dark:text-stone-300">
		<img src="/img/about/projects_fab.png" alt="FAB" class="float-right w-1/2" />
		<p>{$t("about.work_research_1")}</p>
		<h3>{$t("about.work_research_h1")}</h3>
		<p>{$t("about.work_research_2")}</p>
		<p>{$t("about.work_research_3")}</p>

		<a
			class="button-dbs"
			href="https://find.bible"
			target="_blank"
			alt="Find a Bible">
			{$t("about.work_research_action1")}
		</a>

		<h3>{$t("about.work_research_h2")}</h3>
		<p>{$t("about.work_research_4")}</p>
		<p>{$t("about.work_research_5")}</p>
		<p>{$t("about.work_research_6")}</p>

		<!--
		<span class="button-dbs">{$t("about.work_research_action2")}</span>
			-->

		<h3>{$t("about.work_research_h3")}</h3>
		<p>{$t("about.work_research_7")}</p>
		<ul>
			<li>{$t("about.work_research_71")}</li>
			<li>{$t("about.work_research_72")}</li>
			<li>{$t("about.work_research_73")}</li>
			<li>{$t("about.work_research_74")}</li>
		</ul>

		<a class="button-dbs" href="/about/contact">
			{$t("about.work_research_action3")}
		</a>
	</div>

	<div
		class="relative mt-12 bg-stone-50 dark:bg-stone-600"
		style="padding-top: 56.25%">
		<iframe
			src="https://player.vimeo.com/video/209745084?h=02e67ddffc"
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
			title="{$t('about_work_research_video')}"
			class="absolute inset-0 h-full w-full p-1">
		</iframe>
	</div>
	<div class="mt-1 text-center text-stone-500 dark:text-stone-200">
		{$t("about.work_research_video")}
		<span class="info">
			(2&nbsp;{$t("common.Minute")}&nbsp;{$t("common.Video")})
		</span>
	</div>


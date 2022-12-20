<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"
</script>

<Banner 
	title={$t("about.work_bibles_title")} 
	subtitle=""
	caption={$t("about.work_bibles_caption")}
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: `/about/work/`, title: $t('common.Our Work') },
		{ link: '#', title: $t('common.Bibles') },
	]}
	subnav={[
		{title:$t("common.Bibles"),url:'/about/work/biblecloud',selected:true},
		{title:$t("common.Libraries"),url:'/about/work/libraries'},
		{title:$t("common.Audio"),url:'/about/work/audio-bibles'},
		{title:$t("common.Print"),url:'/about/work/print'},
		{title:$t("common.Study Bible"),url:'/about/work/sophia'},
		{title:$t("common.Research"),url:'/about/work/research'},
		{title:$t("common.Proposals"),url:'/about/work/proposals'}
	]} />

	<div
		class="prose mx-auto max-w-5xl mt-8 leading-6 text-stone-500 dark:prose-invert dark:text-stone-300">
		<h3>{$t("about.work_bibles_h1")}</h3>
		<img
			src="/img/about/projects_biblecloud.png"
			alt="BibleCloud"
			class="float-right w-1/2" />
		<p>{$t("about.work_bibles_1")}</p>
		<p>{$t("about.work_bibles_2")}</p>
		<p>{$t("about.work_bibles_3")}</p>
		<div class="text-sm">
			<div class="flex items-center pl-6">
				<img
					src="https://images.bible.cloud/pdf_type_title.svg"
					alt="PDF"
					class="icon-dbs" />
				<span>{$t("about.work_bibles_4")}</span>
			</div>
			<div class="flex items-center pl-6">
				<img
					src="https://images.bible.cloud/mobile_type_title.svg"
					alt="Mobile"
					class="icon-dbs" />
				<span>{$t("about.work_bibles_5")}</span>
			</div>
			<div class="flex items-center pl-6">
				<img
					src="https://images.bible.cloud/epub_type_title.svg"
					alt="ePub"
					class="icon-dbs" />
				<span>{$t("about.work_bibles_6")}</span>
			</div>
			<div class="flex items-center pl-6">
				<img
					src="https://images.bible.cloud/inscript_type_title.svg"
					alt="inScript"
					class="icon-dbs" />
				<span>{$t("about.work_bibles_7")}</span>
			</div>
			<div class="flex items-center pl-6">
				<img
					src="https://images.bible.cloud/app_type.svg"
					alt="App"
					class="icon-dbs" />
				<span>{$t("about.work_bibles_8")}</span>
			</div>
		</div>
		<a class="button-dbs" href="/bibles">
			{$t("about.work_bibles_action")}
		</a>
	</div>

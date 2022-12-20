<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"
</script>

<Banner 
	title={$t("common.Audio Bibles")} 
	subtitle=""
	breadcrumbs={[
		{ link: `/about/`, title: $t('common.About') },
		{ link: `/about/work/`, title: $t('common.Our Work') },
		{ link: '#', title: $t('common.Audio Bibles') },
	]}
	subnav={[
		{title:$t("common.Bibles"),url:'/about/work/biblecloud'},
		{title:$t("common.Libraries"),url:'/about/work/libraries'},
		{title:$t("common.Audio"),url:'/about/work/audio-bibles'},
		{title:$t("common.Print"),url:'/about/work/print'},
		{title:$t("common.Study Bible"),url:'/about/work/sophia'},
		{title:$t("common.Research"),url:'/about/work/research'},
		{title:$t("common.Proposals"),url:'/about/work/proposals'}
	]} />

<section id="container" class="mx-auto max-w-5xl">

	<div
		id="copy"
		class="prose m-auto mt-8 max-w-none leading-6 text-stone-500 dark:prose-invert dark:text-stone-300">
		<h3>{$t("about.work_audio_h1")}</h3>
		<div class="ml-6 -mt-6 sm:float-right sm:w-1/2 md:w-1/3 dark:bg-stone-300 rounded-md">
			<p class="text-center text-sm text-blue-500">
				{$t("about.work_audio_caption_3")}
			</p>
			<img
				src="/img/about/illiteracy_nations_chart.svg"
				class="-mt-3 w-max"
				alt="{$t('about_work_audio_caption_3')}"
				title="{$t('about_work_audio_caption_3')}" />
		</div>
		<p class="verse">{$t("about.work_audio_verse_1")}</p>
		<p>{$t("about.work_audio_p1")}</p>
		<p class="verse">{$t("about.work_audio_verse_2")}</p>
		<p>{$t("about.work_audio_p2")}</p>
		<p class="verse">{$t("about.work_audio_verse_3")}</p>
		<p>
			{$t("about.work_audio_p3")}
			<a
				class="link"
				href="https://www.faithcomesbyhearing.com/"
				target="_blank"
				rel="noopener noreferrer">
				Faith Comes by Hearing,
			</a>
			<a
				class="link"
				href="https://davarpartners.org/"
				target="_blank"
				rel="noopener noreferrer">
				Davar Partners,
			</a>
			<a
				class="link"
				href="https://globalrecordings.net/en/resources"
				target="_blank"
				rel="noopener noreferrer">
				and Global Recordings Network,
			</a>
			{$t("about.work_audio_p3b")}
		</p>

		<a class="button-dbs" href="/bibles/audio/pearls">
			{$t("about.work_audio_action")}
		</a>
	</div>
</section>

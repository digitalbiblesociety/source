<script>
	import { t } from "$lib/Translations/index.js"
	import Banner from "$lib/components/Banner.svelte"
</script>
	
	<Banner 
		title={$t("about.work_print_title")} 
		subtitle=""
		caption={$t("about.work_print_caption")}
		breadcrumbs={[
			{ link: `/about/`, title: $t('common.About') },
			{ link: `/about/work/`, title: $t('common.Our Work') },
			{ link: '#', title: $t('about.work_print_title') },
		]}
		subnav={[
			{title:$t("common.Bibles"),url:'/about/work/biblecloud'},
			{title:$t("common.Libraries"),url:'/about/work/libraries'},
			{title:$t("common.Audio"),url:'/about/work/audio-bibles'},
			{title:$t("common.Print"),url:'/about/work/print',selected:true},
			{title:$t("common.Study Bible"),url:'/about/work/sophia'},
			{title:$t("common.Research"),url:'/about/work/research'},
			{title:$t("common.Proposals"),url:'/about/work/proposals'}
		]} />

	<div
		id="copy"
		class="prose mx-auto max-w-5xl mt-8 leading-6 text-stone-500 dark:prose-invert dark:text-stone-300">
		<img src="/img/about/projects_print.png" alt="Print" class="float-right w-1/2" />
		<p>{$t("about.work_print_1")}</p>
		<p>{$t("about.work_print_2")}</p>
		<p>{$t("about.work_print_3")}</p>
		<p>{$t("about.work_print_4")}</p>

		<a class="button-dbs" href="/bibles/print">
			{$t("about.work_print_action1")}
		</a>

		<div
			class="relative mt-12 bg-stone-50 dark:bg-stone-600"
			style="padding-top: 56.25%">
			<iframe
				src="https://player.vimeo.com/video/185506480?h=02e67ddffc"
				allow="autoplay; fullscreen; picture-in-picture"
				title="{$t('about_work_print_video')}"
				allowfullscreen
				class="absolute inset-0 h-full w-full p-1">
			</iframe>
		</div>
		<div class="mt-1 text-center text-stone-500 dark:text-stone-200">
			{$t("about.work_print_video")}
			<span class="info">
				(6&nbsp;{$t("common.Minute")}&nbsp;{$t("common.Video")})
			</span>
		</div>
	</div>

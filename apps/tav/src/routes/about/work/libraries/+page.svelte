<script>
	import { t } from "$lib/Translations/index.js"
	import Banner from "$lib/components/Banner.svelte"
</script>
	
	<Banner 
		title={$t("common.Libraries")} 
		subtitle=""
		caption={$t("libraries.overview_caption")}
		breadcrumbs={[
			{ link: `/about/`, title: $t('common.About') },
			{ link: `/about/work/`, title: $t('common.Our Work') },
			{ link: '#', title: $t("common.Libraries") },
		]}
		subnav={[
			{title:$t("common.Bibles"),url:'/about/work/biblecloud'},
			{title:$t("common.Libraries"),url:'/about/work/libraries',selected:true},
			{title:$t("common.Audio"),url:'/about/work/audio-bibles'},
			{title:$t("common.Print"),url:'/about/work/print'},
			{title:$t("common.Study Bible"),url:'/about/work/sophia'},
			{title:$t("common.Research"),url:'/about/work/research'},
			{title:$t("common.Proposals"),url:'/about/work/proposals'}

		]} />

	<div
		id="copy"
		class="prose mx-auto max-w-5xl mt-8 leading-6 text-gray-500 dark:prose-invert dark:text-gray-300">
		<h3>{$t("libraries.overview_h1")}</h3>
		<img
			src="/img/about/projects_libraries.png"
			alt="Libraries"
			class="float-right w-1/2" />
		<p>{$t("libraries.overview_1")}</p>
		<p>{$t("libraries.overview_2")}</p>
		<ol>
			<li>{$t("libraries.overview_3")}</li>
			<li>{$t("libraries.overview_4")}</li>
			<li>{$t("libraries.overview_5")}</li>
		</ol>
		<p>{$t("libraries.overview_6")}</p>

		<h3>
			{$t("common.Bible Libraries")}
			<span class="font-medium">{$t("libraries.overview_h2")}</span>
		</h3>
		<p>{$t("libraries.overview_b1")}</p>
		<p>{$t("libraries.overview_b2")}</p>
		<ul>
			<li>{$t("libraries.overview_b3")}</li>
			<li>{$t("libraries.overview_b4")}</li>
			<li>{$t("libraries.overview_b5")}</li>
			<li>{$t("libraries.overview_b6")}</li>
		</ul>
		<a class="button-dbs" href="/libraries/bible">
			{$t("libraries.overview_action1")}
		</a>

		<h3>
			{$t("common.Treasures Libraries")}
			<span class="font-medium">{$t("libraries.overview_h3")}</span>
		</h3>
		<p>{$t("libraries.overview_t1")}</p>
		<p>{$t("libraries.overview_t2")}</p>
		<ul>
			<li>{$t("libraries.overview_t3")}</li>
			<li>{$t("libraries.overview_t4")}</li>
			<li>{$t("libraries.overview_t5")}</li>
			<li>{$t("libraries.overview_t6")}</li>
		</ul>
		<a class="button-dbs" href="/libraries/treasures">
			{$t("libraries.overview_action2")}
		</a>
	</div>

	<div
		class="relative mt-12 bg-gray-50 dark:bg-gray-600"
		style="padding-top: 56.25%">
		<iframe
			src="https://player.vimeo.com/video/124872117?h=02e67ddffc"
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
			class="absolute inset-0 h-full w-full p-1">
		</iframe>
	</div>
	<div class="mt-1 text-center text-gray-500 dark:text-gray-200">
		<span class="info">
			(6&nbsp;{$t("common.Minute")}&nbsp;{$t("common.Video")})
		</span>
	</div>

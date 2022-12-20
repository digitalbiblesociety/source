<script>
import { t } from "$lib/Translations/index.js"
import Banner from "$lib/components/Banner.svelte"
</script>

<svelte:head>
	<title>
		{$t("common.Libraries")}
		{$t("common.Overview")} | {$t("common.org_title")}
	</title>
</svelte:head>

<Banner
		title={$t("common.Library") + " " + $t("Overview")}
		subtitle=""
		caption={$t("libraries.about_caption")}
		breadcrumbs={[
			{ link: `/libraries/treasures`, title: $t('common.Treasures') },
			{ link: '#', title: $t('common.Overview') },
		]}
		subnav={[
			{title:$t("common.Overview"),url:'/libraries/',selected:true},
			{title:$t("common.Treasures Libraries"),url:'/libraries/treasures'},
			//{title:$t("common.Bible Libraries"),url:'/libraries/bible'},
			{title:$t("common.FAQs"),url:'/libraries/faqs'},
		]} />

<section id="container" class="mx-auto max-w-5xl">
	<div
		id="copy"
		class="prose m-auto mt-8 max-w-none leading-6 text-stone-500 dark:prose-invert dark:text-stone-300">
		<img
			src="/img/about/projects_libraries.png"
			alt="{$t('Treasures')}"
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
		class="relative mt-12 bg-stone-50 dark:bg-stone-600"
		style="padding-top: 56.25%">
		<iframe
			src="https://player.vimeo.com/video/124872117?h=02e67ddffc"
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
			title="Libraries Overview"
			class="absolute inset-0 h-full w-full p-1">
		</iframe>
	</div>
	<div class="mt-1 text-center text-stone-500 dark:text-stone-200">
		{$t("libraries.overview_video")}
		<span class="info">
			(6&nbsp;{$t("common.Minute")}&nbsp;{$t("common.Video")})
		</span>
	</div>
</section>

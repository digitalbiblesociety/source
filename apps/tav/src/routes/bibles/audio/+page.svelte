<script>
import { t } from "$lib/Translations"
import Banner from "$lib/components/Banner.svelte"
</script>

<svelte:head>
	<title>{$t("common.Audio Bibles")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner
		title={$t("common.Audio Bibles")}
		subtitle=""
		caption={$t("bible.audio_player_caption")}
		breadcrumbs={[
			{ link: `/bibles/`, title: $t('common.Bibles') },
			{ link: `/bibles/audio/`, title: $t('common.Audio Bibles') },
			{ link: '#', title: $t('common.Overview') },
	]}
		subnav={[
		{title:$t("common.Background"),url:'/bibles/audio/',selected:true},
		{title:$t("bible.audio_player_pearls"),url:'/bibles/audio/pearls'},
		{title:$t("bible.audio_player_megavoice"),url:'/bibles/audio/megavoice'},
		{title:$t("common.Video"),url:'/bibles/audio/videos'},
	]} />




<div id="copy"
	class="prose px-4 md:px-6 lg:px-8 m-auto mt-8 max-w-none leading-6 text-gray-500 dark:prose-invert dark:text-gray-300">
	<img
		src="/img/about/projects_players.png"
		alt="Audio Players"
		class="float-right w-1/2" />
	<h3>{$t("bible.audio_player_h1")}</h3>
	<p>{$t("bible.audio_player_1")}</p>
	<p>{$t("bible.audio_player_2")}</p>
	<p>{$t("bible.audio_player_3")}</p>
	<ol>
		<li>{$t("bible.audio_player_4")}</li>
		<li>{$t("bible.audio_player_5")}</li>
		<li>{$t("bible.audio_player_6")}</li>
		<li>{$t("bible.audio_player_7")}</li>
	</ol>
	<p>{$t("bible.audio_player_8")}</p>

	<div
		class="relative mx-auto mt-12 w-10/12 bg-gray-50 dark:bg-gray-600"
		style="padding-top: 56.25%">
		<iframe
			src="https://www.youtube.com/embed/Bbq9Ke3Xszs"
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
			title="Pearl Players"
			class="absolute inset-0 h-full w-full p-1">
		</iframe>
	</div>

	<div class="mt-1 text-center text-gray-500 dark:text-gray-200">
		{$t("bible.audio_player_h1")}
		<span class="info">
			(4&nbsp;{$t("common.Minute")}&nbsp;{$t("common.Video")})
		</span>
	</div>
</div>

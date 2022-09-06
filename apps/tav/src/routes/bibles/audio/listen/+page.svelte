<script>
import { t } from "$lib/translations"
import Banner from "$lib/components/Banner.svelte"
import { AudioPlayer } from "@dbs/svelte-bible-brain"
import Breadcrumbs from "$lib/Breadcrumbs.svelte"
</script>

<svelte:head>
	<title>{$t("common.Audio Bibles")} | {$t("common.org_title")}</title>
</svelte:head>

<Banner
		title={$t("about.mission_title")}
		subtitle=""
		caption={$t("about.mission_caption")}
		breadcrumbs={[
			{ link: `/bibles/`, title: $t('common.Bibles') },
			{ link: `/bibles/audio/`, title: $t('common.Audio Bibles') },
			{ link: '#', title: $t('common.Listen') },
	]}
		subnav={[
		{title:$t("common.Background"),url:'/bibles/audio/'},
		{title:$t("bible.audio_player_pearls"),url:'/bibles/audio/pearls'},
		{title:$t("bible.audio_player_megavoice"),url:'/bibles/audio/megavoice'},
		{title:$t("common.Video"),url:'/bibles/audio/videos'},
	]} />


<div class="dbs-heading">
	<div class="w-full text-center sm:text-left md:w-1/3">
		<h2>{$t("common.Audio Bibles")}:</h2>
		<h1 class="text-3xl font-semibold">
			{$t("common.Listen")}
			{$t("common.Online")}
		</h1>
	</div>
	<div class="hidden pt-1 sm:block md:w-2/3">
		<p class="italic md:px-2">{$t("bible.audio_listen_caption")}</p>
	</div>
</div>

<nav class="mt-4 flex justify-center md:mt-6">
	<ul class="dbs-tab">
		<li class=""><a href="/bibles/audio/">{$t("common.Overview")}</a></li>
		<li class="">
			<a class="selected" href="/bibles/audio/listen">
				{$t("common.Listen")}
			</a>
		</li>
		<li class="">
			<a href="/bibles/audio/pearls">{$t("bible.audio_player_pearl")}</a>
		</li>
		<li class="">
			<a class="selected" href="/bibles/audio/megavoice">
				{$t("bible.audio_player_megavoice")}
			</a>
		</li>
	</ul>
</nav>

<AudioPlayer key="{import.meta.env.VITE_DBP_KEY}" />

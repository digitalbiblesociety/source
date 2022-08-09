<script>
import { t } from "$lib/translations"
import Banner from "$lib/components/Banner.svelte"
import IconCheck from "~icons/heroicons-outline/check"
</script>

<svelte:head>
	<title>{$t("bible.audio_player_pearls")} | {$t("common.org_title")}</title>

	<style>
	tbody td,
	tbody th {
		@apply border border-gray-300 p-1 dark:border-gray-400;
	}
	tbody tr {
		@apply border border-gray-300;
	}
	tbody tr:nth-child(even) {
		background-color: #efefef;
	}
	tbody th {
		@apply text-sm text-primary-600;
	}
	th.title {
		@apply text-xl text-primary-600 dark:text-gray-800;
	}
	td.cost {
		@apply text-xl text-gray-800 dark:text-primary-800;
	}
	td.txt {
		@apply text-gray-800 dark:text-primary-600;
	}
	.button-buy {
		@apply m-0 p-2;
	}
	</style>
</svelte:head>

<Banner
		title={$t("about.mission_title")}
		subtitle=""
		caption={$t("about.mission_caption")}
		breadcrumbs={[
			{ link: `//bibles/`, title: $t('common.Bibles') },
			{ link: `//bibles/audio`, title: $t('common.Audio Bibles') },
			{ link: '#', title: $t('common.Audio Players') },
	]}
		subnav={[
		{title:$t("common.Background"),url:'/bibles/audio/'},
		{title:$t("bible.audio_player_pearls"),url:'/bibles/audio/pearls'},
		{title:$t("bible.audio_player_megavoice"),url:'/bibles/audio/megavoice'},
		{title:$t("common.Video"),url:'/bibles/audio/videos'},
	]} />


<div class="dbs-heading">
	<div class="title">
		<h2>{$t("common.org_title")}:</h2>
		<h1 class="text-3xl font-semibold">{$t("common.Audio Players")}</h1>
	</div>
	<div class="hidden pt-1 sm:block md:w-2/3">
		<p class="italic md:px-2">{$t("about.work_audio_1")}</p>
	</div>
</div>

<nav class="mt-8 flex justify-center md:mt-12">
	<ul class="dbs-tab">
		<li class=""><a href="/bibles/audio/">{$t("common.Overview")}</a></li>
		<li class="">
			<a href="/bibles/audio/listen">{$t("common.Listen")}</a>
		</li>
		<li class="">
			<a class="selected" href="/bibles/audio/players">
				{$t("common.Audio Players")}
			</a>
		</li>
	</ul>
</nav>

<div class="mx-auto w-full overflow-y-scroll px-4 pt-16 ">
	<table class="text-center dark:bg-gray-300 ">
		<tbody>
			<tr class="">
				<th scope="col">{$t("common.Device")}</th>
				<th scope="col" class="title">{$t("bible.audio_player_mini")}</th>
				<th scope="col" class="title">{$t("bible.audio_player_pearl")}</th>
				<th scope="col" class="title">{$t("bible.audio_player_village")}</th>
				<th scope="col" class="title">
					MegaVoice
					<br />
					2S Dual
				</th>
				<th scope="col" class="title">
					MegaVoice
					<br />
					Ember
				</th>
			</tr>

			<tr>
				<th scope="row" class="">{$t("common.Image")}</th>
				<td class="p-0.5">
					<img
						src="/img/product/mini-pearl-small.png"
						class="mx-auto w-28"
						alt="Mini Pearl Player" />
				</td>
				<td class="p-0.5">
					<img
						src="/img/product/pearl-player-small.png"
						class="mx-auto w-24"
						alt="Pearl Player" />
				</td>
				<td class="p-0.5">
					<img
						src="/img/product/village-player-small.png"
						class="mx-auto w-32"
						alt="Village Player" />
				</td>
				<td class="p-0.5">
					<img
						src="/img/product/megavoice-2s-dual-small.png"
						class="mx-auto w-16"
						alt="MegaVoice Envoy 2s Dual" />
				</td>
				<td class="p-0.5">
					<img
						src="/img/product/megavoice-ember-small.png"
						class="mx-auto w-16"
						alt="MegaVoice Ember" />
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Cost")}</th>
				<td class="cost">$ 16.00</td>
				<td class="cost">$ 23.00</td>
				<td class="cost">$ 40.00</td>
				<td class="cost">$ 37.00</td>
				<td class="cost">$ 45.00</td>
			</tr>
			<tr>
				<th scope="row" class="">
					{$t("bible.audio_label_addBibleVersions")}
				</th>
				<td>
					<span class="button-buy">
						{$t("bible.audio_label_addBibleVersions")}
					</span>
				</td>
				<td>
					<span class="button-buy">
						{$t("bible.audio_label_addBibleVersions")}
					</span>
				</td>
				<td>
					<span class="button-buy">
						{$t("bible.audio_label_addBibleVersions")}
					</span>
				</td>
				<td>
					<span class="button-buy">
						{$t("bible.audio_label_addBibleVersions")}
					</span>
				</td>
				<td>
					<span class="button-buy">
						{$t("bible.audio_label_addBibleVersions")}
					</span>
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_capacityOnboard")}</th>
				<td class="txt" colspan="3">
					{$t("common.Up to")} 4 {$t("bible.audio_label_bibleVersions")} &nbsp;&nbsp;(8+
					{$t("New Testamants")})
				</td>
				<td class="txt" colspan="2">
					{$t("common.Up to")} 2 {$t("bible.audio_label_bibleVersions")}
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_testedAudience")}</th>
				<td class="txt">1 - 15 {"People"}</td>
				<td class="txt">1-20 {"People"}</td>
				<td class="txt">{$t("common.Up to")} 150 {"People"}</td>
				<td class="txt">1 - 15 {"People"}</td>
				<td class="txt">1 - 15 {"People"}</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_charging")}</th>
				<td class="txt" colspan="5">{$t("bible.audio_label_solarUSB")}</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Memory")}</th>
				<td class="txt">8 GB</td>
				<td class="txt">8 GB</td>
				<td class="txt">8 GB</td>
				<td class="txt">4 GB</td>
				<td class="txt">8 GB</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Video")}</th>
				<td>
					<div class="flex justify-center">
						<Icon
							name="information-circle"
							class="mr-2 h-5 w-5 text-primary-500" />{$t("common.More Info")}
					</div>
				</td>
				<td>
					<div class="flex justify-center">
						<Icon
							name="information-circle"
							class="mr-2 h-5 w-5 text-primary-500" />{$t("common.More Info")}
					</div>
				</td>
				<td>
					<div class="flex justify-center">
						<Icon
							name="information-circle"
							class="mr-2 h-5 w-5 text-primary-500" />{$t("common.More Info")}
					</div>
				</td>
				<td>
					<div class="flex justify-center">
						<Icon
							name="information-circle"
							class="mr-2 h-5 w-5 text-primary-500" />{$t("common.More Info")}
					</div>
				</td>
				<td>
					<div class="flex justify-center">
						<Icon
							name="information-circle"
							class="mr-2 h-5 w-5 text-primary-500" />{$t("common.More Info")}
					</div>
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_lcdScreen")}</th>
				<td>&nbsp;</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_microSD")}</th>
				<td>&nbsp;</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Light")}</th>
				<td>&nbsp;</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
				<td></td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_fmRadio")}</th>
				<td>&nbsp;</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_speedControl")}</th>
				<td>&nbsp;</td>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
			</tr>

			<tr>
				<th scope="row" class="">{$t("bible.audio_label_audioSource")}</th>
				<td class="txt" colspan="5">{$t("bible.audio_label_sound")}</td>
			</tr>

			<tr>
				<th scope="row" class="">
					{$t("common.Weight")}
					&nbsp;
				</th>
				<td class="txt">2.4&nbsp;oz.</td>
				<td class="txt">2.8&nbsp;oz.</td>
				<td class="txt">12.&nbsp;oz.</td>
				<td class="txt">2.3&nbsp;oz.</td>
				<td class="txt">2.2&nbsp;oz.</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Size")}</th>
				<td class="txt">
					H-4" W-2"
					<br />
					D-.75"
				</td>
				<td class="txt">
					H-4.25" W-2.7"
					<br />
					D-.7" &nbsp;
				</td>
				<td class="txt">
					H-3.5" W-6"
					<br />
					D-1.75" &nbsp;
				</td>
				<td class="txt">
					H-4.2″ W-2.3″
					<br />
					D-0.4″
				</td>
				<td class="txt">
					H-4.2″ W-2.3″
					<br />
					D-0.4″
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_batteryPlayTime")}</th>
				<td class="txt">24 {"Hours"}</td>
				<td class="txt">30 {"Hours"}</td>
				<td class="txt">60 {"Hours"}</td>
				<td class="txt">14 {"Hours"}</td>
				<td class="txt">14 {"Hours"}</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_timetoCharge")}</th>
				<td class="txt">
					USB - 2-3 hr
					<br />
					8-10 hr {"Solar"}
				</td>
				<td class="txt">
					USB - 2-3 hr
					<br />
					8-10 {"Solar"}
				</td>
				<td class="txt">
					USB - 4-6 hr
					<br />
					24 hr {"Solar"}
				</td>
				<td class="txt">
					USB - 2 hr
					<br />
					8-10 hr {"Solar"}
				</td>
				<td class="txt">
					USB - 2 hr
					<br />
					8-10 hr {"Solar"}
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_audioFormat")}</th>
				<td class="txt" colspan="5">{$t("bible.audio_label_format")}</td>
			</tr>
		</tbody>
	</table>
</div>

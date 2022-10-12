<script>
import { t } from "$lib/Translations"
import Banner from "$lib/components/Banner.svelte"
import { client } from "$lib/store/shopifyClient"
import {
	Dialog,
	DialogOverlay,
	DialogDescription,
} from "@rgossiaux/svelte-headlessui"

import IconVideoCamera from "~icons/heroicons-outline/video-camera"
import IconCheck from "~icons/heroicons-outline/check"

let videoDialogs = [
	{
		title: "Video for Mini",
		src: null,
		isOpen: false,
	},
	{
		title: "Video for Mini",
		src: "https://www.youtube.com/embed/Rd5_0Z5OIlo",
		isOpen: false,
	},
	{
		title: "Video for Mini",
		src: "https://www.youtube.com/embed/Rd5_0Z5OIlo",
		isOpen: false,
	},
]

let products = {}
client.collection
	.fetchWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzQzNDk1ODM1Mg==")
	.then((collection) => {
		collection.products.forEach((product) => {
			products[product.handle] = product
		})
	})
</script>

<svelte:head>
	<title>{$t("bible.audio_player_pearls")} | {$t("common.org_title")}</title>

	<style>
	tbody td,
	tbody th {
		@apply border border-gray-300 p-1 text-xs dark:border-gray-400 lg:text-sm;
	}
	tbody tr {
		@apply border border-gray-300  text-sm md:text-base;
	}
	tbody tr:nth-child(even) {
		background-color: #efefef;
	}
	tbody th {
		@apply text-xs text-blue-600 lg:text-sm;
	}
	th.title {
		@apply text-xs text-blue-600 dark:text-gray-800 md:text-lg;
	}
	td.cost {
		@apply text-sm text-gray-800 dark:text-blue-800 md:text-base;
	}
	td.txt {
		@apply text-xs text-gray-800 dark:text-blue-600 lg:text-sm;
	}
	.button-buy {
		@apply mx-4 my-1 p-0.5 text-xs sm:text-sm md:mx-8 md:p-1 lg:text-base;
	}
	</style>
</svelte:head>

<Banner
		title={$t("common.Pearl Players")}
		subtitle=""
		caption={$t("bible.audio_pearl_caption")}
		breadcrumbs={[
			{ link: `/bibles/`, title: $t('common.Bibles') },
			{ link: `/bibles/audio`, title: $t('common.Audio Bibles') },
			{ link: '#', title: $t('common.Pearl Players') },
	]}
		subnav={[
		{title:$t("common.Background"),url:'/bibles/audio/'},
		{title:$t("bible.audio_player_pearls"),url:'/bibles/audio/pearls',selected:true},
		{title:$t("bible.audio_player_megavoice"),url:'/bibles/audio/megavoice'},
		{title:$t("common.Video"),url:'/bibles/audio/videos'},
	]} />



<div class="mx-auto w-full max-w-4xl overflow-y-scroll px-4 pt-16 ">
	<table class="text-center dark:bg-gray-300 ">
		<tbody>
			<tr class="">
				<th scope="row">{$t("common.Device")}</th>
				<th scope="col" class="title">{$t("bible.audio_player_mini")}</th>
				<th scope="col" class="title">{$t("bible.audio_player_pearl")}</th>
				<th scope="col" class="title">{$t("bible.audio_player_village")}</th>
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
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Cost")}</th>
				<td class="cost">
					$ 10.00
				</td>
				<td class="cost">
					$15.00
				</td>
				<td class="cost">
					$24.00
				</td>
			</tr>
			<tr>
				<th scope="row" class="">
					{$t("bible.audio_label_addBibleVersions")}
				</th>

				<td><a href="/store/players/mini-pearl-audio-bible-player-">
						<span class="button-buy">
							{$t("bible.audio_label_addBibleVersions")}
						</span>
				</a></td>
				<!--
			<td><a href="/store/players/mini-pearl-audio-bible-player"<span class="button-buy">{$t("bible.audio_label_addBibleVersions")}</span></a></td>
			-->
				<td>
					<a href="/store/players/pearl-audio-bible-player-1">
						<span class="button-buy">
							{$t("bible.audio_label_addBibleVersions")}
						</span>
					</a>
				</td>
				<td>
					<a href="/store/players/village-audio-bible-player">
						<span class="button-buy">
							{$t("bible.audio_label_addBibleVersions")}
						</span>
					</a>
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_capacityOnboard")}</th>
				<td class="txt" colspan="3">
					{$t("common.Up to")} 4 {$t("bible.audio_label_bibleVersions")}
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_testedAudience")}</th>
				<td class="txt">1 - 15 {"People"}</td>
				<td class="txt">1-20 {"People"}</td>
				<td class="txt">{$t("common.Up to")} 150 {"People"}</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_charging")}</th>
				<td class="txt" colspan="3">{$t("bible.audio_label_solarUSB")}</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Memory")}</th>
				<td class="txt">8 GB</td>
				<td class="txt">8 GB</td>
				<td class="txt">8 GB</td>
			</tr>

			<tr>
				<th scope="row" class="">{$t("common.Video")}</th>
				{#each videoDialogs as videoDialog}
					<td>
						{#if videoDialog.src}
							<div class="relative z-50">
								<Dialog
									class="fixed inset-0 flex items-center justify-center p-4"
									open="{videoDialog.isOpen}"
									on:close="{() => (videoDialog.isOpen = false)}">
									<DialogOverlay
										on:click="{(videoDialog.isOpen = false)}"
										class="fixed inset-0 z-40 bg-black/30" />
									<div class="z-50">
										<DialogDescription>
											<iframe
												width="560"
												height="315"
												src="{'https://www.youtube.com/embed/Rd5_0Z5OIlo'}"
												title="YouTube video player"
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowfullscreen>
											</iframe>
										</DialogDescription>
									</div>
								</Dialog>
							</div>

							<div
								class="inline-flex items-center text-blue-500 hover:underline"
								on:click="{() => (videoDialog.isOpen = true)}">
								<IconVideoCamera class=" mr-2 h-5 w-5 text-blue-500" />
								{$t("common.Demo")}
							</div>
						{/if}
					</td>
				{/each}
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_lcdScreen")}</th>
				<td>&nbsp</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-blue-500" />
				</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-blue-500" />
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_microSD")}</th>
				<td>&nbsp</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-blue-500" />
				</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-blue-500" />
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Light")}</th>
				<td>&nbsp</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-blue-500" />
				</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-blue-500" />
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_fmRadio")}</th>
				<td>&nbsp</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-blue-500" />
				</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-blue-500" />
				</td>
			</tr>
			<tr>
				<th scope="row" class="">
					{$t("common.Weight")}
					&nbsp;
				</th>
				<td class="txt">2.4&nbsp;oz.</td>
				<td class="txt">2.8&nbsp;oz.</td>
				<td class="txt">12.&nbsp;oz.</td>
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
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_batteryPlayTime")}</th>
				<td class="txt">24 {"Hours"}</td>
				<td class="txt">30 {"Hours"}</td>
				<td class="txt">60 {"Hours"}</td>
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
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_audioFormat")}</th>
				<td class="txt" colspan="3">{$t("bible.audio_label_format")}</td>
			</tr>
		</tbody>
	</table>
</div>

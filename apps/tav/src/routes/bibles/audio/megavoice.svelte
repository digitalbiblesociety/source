<script>
import { t } from "$lib/translations"
import Banner from "$lib/components/Banner.svelte"
import { client } from "../../store/shopifyClient"
import {
	Dialog,
	DialogOverlay,
	DialogDescription,
} from "@rgossiaux/svelte-headlessui"

import IconVideoCamera from "~icons/heroicons-outline/video-camera"
import IconCheck from "~icons/heroicons-outline/check"

let videoDialogs = [
	{
		title: "Video for Companion",
		src: "https://www.youtube.com/embed/aveexYcLr4M",
		isOpen: false,
	},
	{
		title: "Video for Envoy 2S",
		src: "https://www.youtube.com/embed/NCOVW0dgzUo",
		isOpen: false,
	},
	{
		title: "Video for Envoy 2S Dual",
		src: "https://www.youtube.com/embed/NCOVW0dgzUo",
		isOpen: false,
	},
	{
		title: "Video for Envoy Ember",
		src: "https://www.youtube.com/embed/W1ujgBzuzFM",
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
	<title>
		{$t("bible.audio_player_megavoice")} | {$t("common.org_title")}
	</title>

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
		@apply text-xs text-primary-600 lg:text-sm;
	}
	th.title {
		@apply text-xs text-primary-600 dark:text-gray-800 md:text-lg;
	}
	td.cost {
		@apply text-sm text-gray-800 dark:text-primary-800 md:text-base;
	}
	td.txt {
		@apply text-xs text-gray-800 dark:text-primary-600 lg:text-sm;
	}
	.button-buy {
		@apply mx-4 my-1 p-0.5 text-xs sm:text-sm md:mx-8 md:p-1 lg:text-base;
	}
	</style>
</svelte:head>

<Banner
		title={$t("bible.audio_player_megavoice")}
		subtitle=""
		caption={$t("bible.audio_megavoice_caption")}
		breadcrumbs={[
			{ link: `/bibles/`, title: $t('common.Bibles') },
			{ link: `/bibles/audio`, title: $t('common.Audio Bibles') },
			{ link: '#', title: $t('bible.audio_player_megavoice') },
	]}
		subnav={[
		{title:$t("common.Background"),url:'/bibles/audio/'},
		{title:$t("bible.audio_player_pearls"),url:'/bibles/audio/pearls'},
		{title:$t("bible.audio_player_megavoice"),url:'/bibles/audio/megavoice',selected:true},
		{title:$t("common.Video"),url:'/bibles/audio/videos'},
	]} />



<div class="mx-auto w-full max-w-5xl overflow-y-scroll px-4 pt-16 ">
	<table class="text-center dark:bg-gray-300 ">
		<tbody>
			<tr class="">
				<th scope="col">{$t("common.Device")}</th>
				<th scope="col" class="title">Companion</th>
				<th scope="col" class="title">Envoy 2S</th>
				<th scope="col" class="title">Envoy 2S Dual</th>
				<th scope="col" class="title">Envoy Ember</th>
			</tr>

			<tr>
				<th scope="row" class="">{$t("common.Image")}</th>
				<td class="p-0.5">
					<img
						src="/img/product/megavoice-companion-small.png"
						class="mx-auto w-16"
						alt="MegaVoice Companion" />
				</td>
				<td class="p-0.5">
					<img
						src="/img/product/megavoice-2s-small.png"
						class="mx-auto w-16"
						alt="MegaVoice 2S" />
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
				<td class="cost">
					$ {products["companion-audio-bible"]?.variants[0]?.price ?? ""}
				</td>
				<td class="cost">
					$ {products["megavoice-envoy-s"]?.variants[0]?.price ?? ""}
				</td>
				<td class="cost">
					$ {products["megavoice-envoy-s-dual"]?.variants[0]?.price ?? ""}
				</td>
				<td class="cost">
					$ {products["megavoice-envoy-ember"]?.variants[0]?.price ?? ""}
				</td>
			</tr>
			<tr>
				<th scope="row" class="">
					{$t("bible.audio_label_addBibleVersions")}
				</th>
				<td>
					<a href="/store/players/companion-audio-bible">
						<span class="button-buy">
							{$t("bible.audio_label_addBibleVersions")}
						</span>
					</a>
				</td>
				<td>
					<a href="/store/players/megavoice-envoy-s">
						<span class="button-buy">
							{$t("bible.audio_label_addBibleVersions")}
						</span>
					</a>
				</td>
				<td>
					<a href="/store/players/megavoice-envoy-s-dual">
						<span class="button-buy">
							{$t("bible.audio_label_addBibleVersions")}
						</span>
					</a>
				</td>
				<td>
					<a href="/store/players/megavoice-envoy-ember">
						<span class="button-buy">
							{$t("bible.audio_label_addBibleVersions")}
						</span>
					</a>
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_capacityOnboard")}</th>
				<td class="txt" colspan="3">
					{$t("common.Up to")} 2 {$t("bible.audio_label_bibleVersions")}
				</td>
				<td class="txt" colspan="1">
					{$t("common.Up to")} 4 {$t("bible.audio_label_bibleVersions")}
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_testedAudience")}</th>
				<td class="txt" colspan="4">1 - 15 {"People"}</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_charging")}</th>
				<td class="txt">Lithium or AAA Battery</td>
				<td class="txt" colspan="3">{$t("bible.audio_label_solarUSB")}</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Memory")}</th>
				<td class="txt">4 GB</td>
				<td class="txt">4 GB</td>
				<td class="txt">4 GB</td>
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
												src="{videoDialog.src}"
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
								class="inline-flex items-center text-primary-500 hover:underline"
								on:click="{() => (videoDialog.isOpen = true)}">
								<IconVideoCamera class=" mr-2 h-5 w-5 text-primary-500" />
								{$t("common.Demo")}
							</div>
						{/if}
					</td>
				{/each}
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_microSD")}</th>
				<td>&nbsp</td>
				<td>&nbsp</td>
				<td>&nbsp</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Light")}</th>
				<td>&nbsp</td>
				<td>&nbsp</td>
				<td>&nbsp</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_speedControl")}</th>
				<td>&nbsp</td>
				<td>&nbsp</td>
				<td>&nbsp</td>
				<td>
					<IconCheck class="mx-auto block h-6 w-6 text-primary-500" />
				</td>
			</tr>

			<tr>
				<th scope="row" class="">{$t("bible.audio_label_audioSource")}</th>
				<td class="txt" colspan="1">{$t("bible.audio_label_earbuds")}</td>
				<td class="txt" colspan="3">{$t("bible.audio_label_sound")}</td>
			</tr>

			<tr>
				<th scope="row" class="">
					{$t("common.Weight")}
					&nbsp;
				</th>
				<td class="txt">1&nbsp;oz.</td>
				<td class="txt">2.2&nbsp;oz.</td>
				<td class="txt">2.2&nbsp;oz.</td>
				<td class="txt">2.2&nbsp;oz.</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("common.Size")}</th>
				<td class="txt">
					H-3.75" W-1.25"
					<br />
					D-0.81" &nbsp;
				</td>
				<td class="txt">
					H-4.2" W-2.3"
					<br />
					D-0.4" &nbsp;
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
				<td class="txt">40+ {"Hours"}</td>
				<td class="txt">20+ {"Hours"}</td>
				<td class="txt">20+ {"Hours"}</td>
				<td class="txt">20+ {"Hours"}</td>
			</tr>
			<tr>
				<th scope="row" class="">{$t("bible.audio_label_timetoCharge")}</th>
				<td class="txt">USB - 2 hr</td>
				<td class="txt">
					USB - 2 hr
					<br />
					8-10 {"Solar"}
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
				<td class="txt" colspan="4">{$t("bible.audio_label_format")}</td>
			</tr>
		</tbody>
	</table>
</div>

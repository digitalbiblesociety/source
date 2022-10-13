<script>
import { t } from "$lib/Translations/index.js"
import AudioPreview from "./AudioPreview.svelte"
import { selected } from "$lib/store"

/** @type {import('./$types').PageData} */
export let data;
$: ({ bible, audio_capacity } = data);

const addToSelected = () => {
	if (!$selected.includes(bible.aid)) {
		$selected = [...$selected, bible.aid]
	} else {
		$selected = $selected.filter((item) => item !== bible.aid)
	}
}
</script>

<div
	class="relative my-2 rounded-md border border-gray-300 bg-gradient-to-r from-gray-50
			to-gray-100 hover:bg-gray-300 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
	<label
		class="flex p-1 md:p-2.5"
		class:opacity-50="{$selected.length == audio_capacity &&
			!$selected.includes(bible.aid)}">
		<input
			on:click="{addToSelected}"
			disabled="{$selected.length == audio_capacity &&
				!$selected.includes(bible.aid)}"
			type="checkbox"
			value="{bible.aid}"
			class="mt-5 mr-2.5 flex h-4 w-4 items-center rounded border-gray-400 text-blue-600 focus:ring-blue-500 md:h-5 md:w-5" />

		<div
			class="w-full flex-col text-xs tracking-tight text-gray-800 dark:text-gray-200">
			<div
				class="mb-1 sm:max-w-[140px] overflow-hidden text-sm text-ellipsis whitespace-nowrap font-semibold">
				{bible.ln}
				<span class="ml-1">[{bible.iso}]</span>
			</div>
			<div class="sm:max-w-[190px] overflow-hidden text-ellipsis whitespace-nowrap text-xs">
				{bible.tt}
			</div>
			<div
				class="mt-0.5 flex justify-between  text-xs text-gray-500">
				<span class="max-w-[190px] overflow-hidden text-ellipsis whitespace-nowrap">
					{bible.tv ?? ""}
				</span>
				<span class="mr-2 text-sm">{bible.sc ?? ""}</span>
			</div>

			<div
				class="mt-0.5 flex justify-between p-0 text-[9px] text-blue-500 md:text-xs">
				<span>
					{bible.cn ?? ""}
				</span>
				<span>
					{#if bible.dr}
						{$t("bible.audio_type_drama")} -
					{/if}
					{bible.pb}
				</span>
			</div>
		</div>
	</label>
	<div class="absolute top-2 right-2 z-50">
		<AudioPreview
			src="https://downloads.dbs.org/bible/audio/previews/{bible.aid}.mp3" />
	</div>
</div>

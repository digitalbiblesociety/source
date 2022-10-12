<script>

import { t } from "$lib/Translations"
import IconPlay from "~icons/heroicons-solid/play"
import IconPause from "~icons/heroicons-outline/pause"

/** @type {import('./$types').PageData} */
export let data;

let player
let playing = false
</script>

<audio class="hidden" preload="none" bind:this="{player}" src="{data.src}"></audio>

{#if player}
	<button
		class="h-10 w-10 focus:outline-none"
		on:click="{() => {
			playing ? player.pause() : player.play()
			playing = !playing
		}}">
		{#if !playing}
			<div class="float-right -mt-1 -mr-0.5">
				<IconPlay
					class="h-7 w-7 rounded-2xl text-center
					 text-blue-400 hover:border-4 hover:border-yellow-300" />
				<p class="-mt-0.5 text-center text-gray-500 " style="font-size: 8px">
					{$t("common.Listen")}
				</p>
			</div>
		{:else}
			<div class="float-right -mt-2 -mr-1">
				<IconPause
					class="h-8 w-8 rounded-2xl border border-4 border-yellow-300 text-blue-600 drop-shadow-md" />
			</div>
		{/if}
	</button>
{/if}

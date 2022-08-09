<script>
import {onMount} from 'svelte'
import {preferences, columns, currentReference} from '$lib/store'
import {slide} from 'svelte/transition'
import CopyToClipboard from 'svelte-copy-to-clipboard'
import RangeSlider from 'svelte-range-slider-pips'
import DarkToggle from './DarkToggle.svelte'

$: shareUrl = ''
onMount(() => {
	shareUrl = window.location.href + '?'
	$columns.forEach(column => {
		if (column?.metadata?.id) {
			shareUrl += column.metadata.id + '_' + $currentReference + '&'
		}
	})
	shareUrl = shareUrl.slice(0, -1)
})

let open = false

</script>

<div class="h-10" on:click={() => open = !open}>
	<span class="inline-flex justify-center items-center h-6 my-2 ml-4 cursor-pointer">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
		<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
	</svg>
	Settings</span>
</div>

{#if open}
<div class="absolute inset-0 top-10 bg-gray-200 dark:bg-gray-900 h-full z-50" transition:slide>

	<div>
		<div class="px-4 py-5 space-y-6 sm:p-6">
			

			<div>
				<label for="share-url" class="block text-sm font-medium text-gray-700"> Share </label>
				<p class="text-xs dark:text-gray-300">Copy the current position as a sharable url</p>
				<div class="mt-1 flex rounded-md shadow-sm max-w-md mx-auto">
					<input id="share-url" type="text" bind:value={shareUrl} class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 text-gray-800" placeholder={shareUrl}>
					<CopyToClipboard text={shareUrl} let:copy>
						<button type="button" on:click={copy} class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
						<span>Copy Sharable URL</span>
						</button>
					</CopyToClipboard>
				</div>
			</div>


		  <div>
			<label for="about" class="block text-sm text-gray-700 dark:text-gray-300"> Font Size </label>
			<RangeSlider pips min={10} max={20} bind:values={$preferences.font.size} />
		  </div>

		  <div>
			<label for="about" class="block text-sm text-gray-700 dark:text-gray-300"> Dark Mode </label>
			<DarkToggle />
		  </div>

		  <div>
			<label for="about" class="block text-sm text-gray-700 dark:text-gray-300"> Filter Distractions </label>
			<div class="flex flex-row justify-around max-w-md">
				<div 
					class="w-6 h-6"
					class:opacity-50={!$preferences.distraction.chapters}
					on:click={() => $preferences.distraction.chapters = !$preferences.distraction.chapters}>
					<img src="/img/chapters.svg" alt="chapters" />
				</div>
				<div 
					class="w-6 h-6 dark:text-gray-100"
					class:opacity-50={!$preferences.distraction.verses}
					on:click={() => $preferences.distraction.verses = !$preferences.distraction.verses}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
						<rect x="7" y="2" width="16" height="4" rx=".6" ry=".6"/>
						<rect x="7" y="10" width="16" height="4" rx=".6" ry=".6"/>
						<rect x="7" y="18" width="16" height="4" rx=".6" ry=".6"/>
						<path d="M1.2 6h1.3V3.3H1.4v-.8c.7-.1 1.1-.2 1.5-.5h1v4H5v1.1H1.2V6ZM1 14c1.4-1.1 2.4-2 2.4-2.6s-.3-.7-.7-.7-.7.2-.9.5l-.7-.7c.6-.6 1.1-.8 1.9-.8s1.9.7 1.9 1.7-.9 1.7-1.7 2.4h1.9V15H1v-.8Zm-.1 7.8.6-.9c.3.3.8.5 1.2.5s.9-.2.9-.5-.3-.6-1.4-.6v-1c.9 0 1.3-.2 1.3-.6s-.2-.5-.6-.5-.7.1-1 .4l-.7-.8c.5-.4 1.1-.7 1.8-.7 1.2 0 2 .5 2 1.4s-.3.9-.9 1.1c.6.2 1.1.6 1.1 1.2 0 1-1 1.5-2.1 1.5s-1.5-.3-1.9-.7Z"/>
					</svg>
				</div>
				<div 
					class="w-6 h-6"
					class:opacity-50={!$preferences.distraction.titles}
					on:click={() => $preferences.distraction.titles = !$preferences.distraction.titles}>
					<img src="/img/titles.svg" alt="titles" />
				</div>
				<div 
					class="w-6 h-6"
					class:opacity-50={$preferences.distraction.foonotes}
					on:click={() => $preferences.distraction.foonotes = !$preferences.distraction.foonotes}>
					<img src="/img/notes.svg" alt="notes" />
				</div>
				<div 
					class="w-6 h-6"
					class:opacity-50={$preferences.distraction.red_words}
					on:click={() => $preferences.distraction.red_words = !$preferences.distraction.red_words}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
						<rect x="2" y="2" width="20" height="4" rx=".6" ry=".6"/>
						<rect fill="#f22" x="2" y="10" width="20" height="4" rx=".6" ry=".6"/>
						<rect x="2" y="18" width="20" height="4" rx=".6" ry=".6"/>
					</svg>
				</div>
				<div 
					class="w-6 h-6"
					class:opacity-50={$preferences.distraction.media}
					on:click={() => $preferences.distraction.media = !$preferences.distraction.media}>
					<img src="/img/media.svg" alt="media" />
				</div>
				<div 
					class="w-6 h-6"
					class:opacity-50={!$preferences.format.justified}
					on:click={() => $preferences.format.justified = !$preferences.format.justified}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
						<rect x="2" y="2" width="20" height="4" rx=".6" ry=".6"/>
						<rect x="2" y="10" width="20" height="4" rx=".6" ry=".6"/>
						<rect x="2" y="18" width="20" height="4" rx=".6" ry=".6"/>
					</svg>
				</div>
			</div>
		  </div>


		</div>
	  </div>
</div>
{/if}





<script>
import {onMount} from 'svelte'
import {columns, currentReference} from '$lib/store'
import {slide} from 'svelte/transition'
import CopyToClipboard from 'svelte-copy-to-clipboard'
import DarkToggle from './DarkToggle.svelte'

import FontSettings from './FontSettings.svelte'
import DistractionSettings from './DistractionSettings.svelte'

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
	<span data-test-id="settings-title">Settings</span>
	</span>
</div>

{#if open}
<div class="absolute inset-0 top-10 bg-stone-200 dark:bg-stone-900 h-full z-50" transition:slide>
	<div>
		<div class="px-4 py-5 space-y-6 sm:p-6">
			<div>
				<label for="share-url" class="block text-sm font-medium text-stone-700"> Share </label>
				<p class="text-xs dark:text-stone-300">Copy the current position as a sharable url</p>
				<div class="mt-1 flex rounded-md shadow-sm max-w-md mx-auto">
					<input id="share-url" type="text" bind:value={shareUrl} class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-stone-300 text-stone-800" placeholder={shareUrl}>
					<CopyToClipboard text={shareUrl} let:copy>
						<button type="button" on:click={copy} class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-stone-300 text-sm font-medium rounded-r-md text-stone-700 bg-stone-50 hover:bg-stone-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
						<span>Copy Sharable URL</span>
						</button>
					</CopyToClipboard>
				</div>
			</div>

			<FontSettings />
			<DarkToggle />
		  	<DistractionSettings />

		</div>
	  </div>
</div>
{/if}





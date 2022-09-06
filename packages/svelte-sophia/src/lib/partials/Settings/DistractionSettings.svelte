<script>
	import {distractions} from '$lib/stores/preferences.js'
</script>

<div class="relative z-0 inline-flex shadow-sm rounded-md">
	{#each Object.keys($distractions) as distraction}
		<button
			class:opacity-50={!$distractions[distraction]}
			on:click={() => $distractions[distraction] = !$distractions[distraction]}
			class="relative inline-flex items-center px-4 py-2 
			bg-white dark:bg-gray-700  border border-gray-300 dark:border-gray-900
			text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none">
			<img class="w-6 h-6 dark:invert" src="/img/{distraction}.svg" alt="{distraction}" />
		</button>
	{/each}
</div>
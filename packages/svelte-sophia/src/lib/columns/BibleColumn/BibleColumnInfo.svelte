<script>
	import {onMount} from 'svelte'
	import {columns, columnWrap} from '$lib/store'

	export let key

	let open = false
	let about = ''
	onMount(async () => {
		about = await fetch(import.meta.env.VITE_API_BASEURL + `/${$columns[key].id}/about.html`)
			.then(result => result.text())
	
		const parser = new DOMParser()
		const doc = parser.parseFromString(about, 'text/html')
		about = doc.querySelector('.about')
	})

</script>

{#if $columnWrap[key]}
{#if $columnWrap[key].offsetWidth > 400}
<button on:click={() => open = !open} class="flex items-center justify-center">
	<span class="h-6 w-6 text-gray-100 bg-gray-700 rounded-full leading-6 text-center">
		©
	</span>
</button>
{/if}
{/if}

{#if open}
<div class="absolute inset-0 top-12 bg-white dark:bg-gray-900 z-50">



	<div class="absolute top-2 right-2 text-gray-800 dark:text-gray-200" on:click={() => open = false}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</div>

	<div class="prose dark:prose-invert mx-auto p-4 overflow-y-scroll h-full w-full">
		{@html about?.outerHTML}
	</div>
</div>
{/if}
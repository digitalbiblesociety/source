<script>
	import { t } from "$lib/translations/index.js"

	import Fuse from 'fuse.js';

	export let data;
	$: ({ films } = data);

	films = data.films['_embedded']['mediaLanguages'];
	let query = '';
	let results = [...films];

	let engine = new Fuse(films, {
		shouldSort: true,
		includeMatches: true,
		threshold: 0.3, // At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
		location: 0, // Determines approximately where in the text is the pattern expected to be found
		distance: 50, // Determines how close the match must be to the fuzzy location (specified by location). An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch. A distance of 0 requires the match be at the exact location specified. A distance of 1000 would require a perfect match to be within 800 characters of the location to be found using a threshold of 0.8
		maxPatternLength: 12,
		minMatchCharLength: 1,
		keys: ['name', 'nameNative', 'iso3']
	});

	let filter = function () {
		results = query == '' ? films : engine.search(query).slice(0, 100);
	};
</script>

<section class="flex h-48 flex-col place-items-center justify-center bg-stone-800">
	<h1 class="text-center text-4xl text-stone-100">{$t('Films')}</h1>
</section>

{#if films}
	<input
		type="search"
		placeholder={$t('Search')}
		bind:value={query}
		on:input={filter}
		autocomplete
		class="mx-auto -mt-5 block w-full max-w-md rounded text-sm"
	/>

	<div class="mx-auto max-w-lg">
		{#each results as language (language.languageId ?? language.item.languageId)}
			<a
				class="my-4 block rounded border-2 border-stone-200 bg-stone-50 p-2"
				href="/films/{language.iso3 ?? language.item.iso3}-{language.languageId ??
					language.item.languageId}"
			>
				<p class="truncate text-sm text-stone-900">
					{language.name ?? language.item.name}
				</p>
				<p class="truncate text-sm text-stone-500">
					{language.nameNative ?? language.item.nameNative}
				</p>
			</a>
		{/each}
	</div>
{/if}

<script>
	import { onMount } from 'svelte';
	import { t } from "$lib/translations/index.js"
	import Fuse from 'fuse.js';
	const title = import.meta.env.VITE_SITE_TITLE;
	const subtitle = import.meta.env.VITE_SITE_SUBTITLE;
	const current_country = import.meta.env.VITE_COUNTRY_SITE;
	const api_base_url = import.meta.env.VITE_API_URL;
	const iso_excluded = import.meta.env.VITE_ISO_EXCLUDED.split(',');
	const iso_included = import.meta.env.VITE_ISO_INCLUDED;

	let query = '';
	let country, bibles;
	let engine;
	let results = [];
	let languages = [];

	onMount(async () => {
		const response = await fetch(`${api_base_url}/countries/${current_country}.json`);
		country = await response.json();

		const bible_request = await fetch(`${api_base_url}/bibles_dbs.json`);
		bibles = await bible_request.json();
		bibles = bibles.map((bible) => bible.iso);
		country.languages.forEach((language) => {
			if (bibles.includes(language.iso)) {
				if (iso_included) {
					if (iso_included.split(',').includes(language.iso)) {
						languages.push(language);
					}
				} else {
					if (!iso_excluded.includes(language.iso)) {
						languages.push(language);
					}
				}
			}
		});
		results = [...languages];
		engine = new Fuse(languages, {
			shouldSort: true,
			includeMatches: true,
			threshold: 0.3, // At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
			location: 0, // Determines approximately where in the text is the pattern expected to be found
			distance: 50, // Determines how close the match must be to the fuzzy location (specified by location). An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch. A distance of 0 requires the match be at the exact location specified. A distance of 1000 would require a perfect match to be within 800 characters of the location to be found using a threshold of 0.8
			maxPatternLength: 12,
			minMatchCharLength: 1,
			keys: ['name', 'autonym']
		});
	});

	let filter = function () {
		results = query == '' ? languages : engine.search(query).slice(0, 100);
	};
</script>

<div class="bg-gray-200">
	{#if title}
		<section class="flex h-48 flex-col place-items-center justify-center bg-gray-800">
			<div class="text-center">
				<h1 class="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
					<span class="block xl:inline">{title ?? ''}</span>
					<span class="block xl:inline">{subtitle ?? ''}</span>
				</h1>
			</div>
		</section>
	{/if}

	<input
		type="search"
		placeholder={$t('Search')}
		bind:value={query}
		on:input={filter}
		autocomplete
		class="mx-auto -mt-5 block w-full max-w-md rounded text-sm"
	/>

	<div class="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 px-8 sm:grid-cols-2">
		{#each results as language}
			<div
				class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
			>
				<div
					class="flex h-10 w-10 flex-shrink-0 place-items-center justify-center rounded-full bg-gray-200 text-center font-mono"
				>
					{language?.item?.iso ?? language.iso}
				</div>
				<div class="min-w-0 flex-1">
					<a href="/languages/{language.iso}" class="focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true" />
						<p class="text-sm font-medium text-gray-900">
							{language?.item?.name ?? language.name}
						</p>
						<p class="truncate text-sm text-gray-500">
							{#if language.autonym}
								{language.autonym != language.name && language.autonym != null
									? language.autonym
									: ''}
							{/if}
							{#if language?.item?.autonym}
								{language.item.autonym != language.item.name && language.item.autonym != null
									? language.item.autonym
									: ''}
							{/if}
						</p>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

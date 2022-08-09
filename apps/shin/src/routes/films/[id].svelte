<script context="module">
	// see https://kit.svelte.dev/docs#loading
	export async function load({ params, fetch }) {
		const api_base_url = import.meta.env.VITE_BASE_API;
		const iso = params.id.split('-')[0];
		const numeral_id = params.id.split('-')[1];

		const url = `https://api.arclight.org/v2/media-components?apiKey=52b06248a3c6e8.12980089&subTypes=featureFilm,shortFilm&languageIds=${numeral_id}&metadataLanguageTags=en`;
		const res = await fetch(url);
		const languageResponse = await fetch(`${api_base_url}/languages/${iso}.json`);
		if (res.ok) {
			return {
				props: {
					films: await res.json(),
					language: await languageResponse.json(),
					language_numeral_id: numeral_id
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load JSON for language: ${params.iso}`)
		};
	}
</script>
<script>
	export let films;
	export let language;
	export let language_numeral_id;

	function humanReadable(timeInMilliseconds) {
		var date = new Date(timeInMilliseconds);
		var str = '';
		str += date.getUTCHours() + ', ';
		str += date.getUTCMinutes();
		return str;
	}
</script>

<section
	class="relative flex h-48 flex-col place-items-center justify-center overflow-hidden bg-gray-800"
>
	<h1 class="text-center text-4xl text-gray-100">{language.name}</h1>
	{#if language.name != language.autonym}
		<h2 class="text-gray-200">{language.autonym ?? ''}</h2>
	{/if}
	{#if language.translations}
		{#if language.translations.length > 6}
			<small
				class="sm-blur absolute inset-0 flex rotate-6 flex-wrap text-2xl text-gray-400 opacity-10"
			>
				{#each language.translations as translation}
					<span class="px-4">{translation.name}</span>
				{/each}
			</small>
		{:else}
			<small class="text-gray-400">
				{#each language.translations as translation}
					<span class="px-4">{translation.name}</span>
				{/each}
			</small>
		{/if}
	{/if}
</section>

{#if films}
	<div class="mx-auto mt-12 grid max-w-4xl grid-cols-4 gap-4">
		{#each films['_embedded']['mediaComponents'] as film}
			{#if film.subType == 'featureFilm'}
				<a
					class="relative overflow-hidden rounded"
					href="/films/watch/{film.mediaComponentId}___{language_numeral_id}"
				>
					<figure>
						{#if film.imageUrls.mobileCinematicHigh}
							<img class="block w-full" alt={film.title} src={film.imageUrls.mobileCinematicHigh} />
						{/if}
						<figcaption
							class="absolute bottom-0 top-0 flex w-full flex-col place-items-center justify-center bg-black/40 text-center text-white hover:bg-black/80"
						>
							<div class="text-lg lg:text-xl">{film.title}</div>
							<div class="mt-1 text-sm opacity-70 lg:mt-1.5 lg:text-base">
								{humanReadable(film.lengthInMilliseconds)}
							</div>
						</figcaption>
					</figure>
				</a>
			{/if}
		{/each}
	</div>
{:else}
	Loading...
{/if}

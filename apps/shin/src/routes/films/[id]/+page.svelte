<script>
	export let data;
	$: ({ films, language, language_numeral_id } = data);

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

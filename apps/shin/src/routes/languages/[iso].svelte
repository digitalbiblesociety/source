<script context="module">
	// see https://kit.svelte.dev/docs#loading
	export async function load({ params, fetch }) {
		const api_base_url = import.meta.env.VITE_API_URL;
		const res = await fetch(`${api_base_url}/languages/${params.iso}.json`);
		const bibles_dbs = await fetch(`${api_base_url}/bibles_dbs.json`);
		if (res.ok) {
			return {
				props: {
					language: await res.json(),
					bibles: await bibles_dbs.json()
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

	export let bibles;
	export let language;

	bibles = bibles.map(bible => (bible.id))
</script>

<section class="flex h-48 flex-col place-items-center justify-center bg-gray-800  overflow-hidden">
	<h1 class="text-center text-4xl text-gray-100">{language.name}</h1>
	{#if language.name != language.autonym}
		<h2>{language.autonym ?? ''}</h2>
	{/if}
	{#if language.translations}
		<small class="text-gray-200 {language.translations.length > 6 ? 'rotate-6 text-4xl opacity-20 absolute' : ''} pt-6">
			{#each language.translations as translation}
				<span class="px-4">{translation.name}</span>
			{/each}
		</small>
	{/if}
</section>

<section class="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 border-t-2 border-gray-200 pt-6 sm:grid-cols-2">
	{#if language.bibles}
		{#each language.bibles as bible}
			{#if bibles.includes(bible.id)}
			<div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400">
				<div
					class="flex h-10 w-10 flex-shrink-0 place-items-center justify-center rounded-full bg-gray-200 text-center font-mono"
				/>
				<div class="min-w-0 flex-1">

						<p class="text-sm font-medium text-gray-900">{bible.title ?? ''}</p>
						<p class="truncate text-sm text-gray-500">{bible.title_vernacular ?? ''}</p>

						<div class="flex justify-around pt-2 text-sm">
							<a
							class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-red-100 text-red-800"
							href="https://dbs-web.s3.us-west-2.amazonaws.com/downloads/pdf/{bible.id}/{bible.id}_us_letter.pdf">
								PDF
							</a>
							 
							<a 
							class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-green-100 text-green-800"
							href="https://inscript.org/?w1=bible&t1=local%3A{bible.id}&v1=JN1_1">
								Study Bible
							</a>

							<a 
							class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-blue-100 text-blue-800"
							href="https://inscript.bible.cloud/content/texts/{bible.id}/index.html">
								Mobile Bible 
							</a>
						</div>

				</div>
			</div>
			{/if}
		{/each}
	{/if}
</section>

<section
	class="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 border-t-2 border-gray-200 pt-6 sm:grid-cols-2"
>
	{#if language.resources}
		{#each language.resources as resource}
			<div
				class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
			>
				<div
					class="flex h-10 w-10 flex-shrink-0 place-items-center justify-center rounded-full bg-gray-200 text-center font-mono"
				/>
				<div class="min-w-0 flex-1">
					<a href={resource.url} class="focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true" />
						<p class="text-sm font-medium text-gray-900">{resource.title}</p>
						<p class="truncate text-sm text-gray-500">{resource.author ?? ''}</p>
					</a>
				</div>
			</div>
		{/each}
	{/if}
</section>

<section>
	{@html language.introduction ?? ''}
</section>

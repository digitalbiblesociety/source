<script context="module">
	export async function load({ params, fetch }) {
		const baseUrl = import.meta.env.VITE_BASE_API;
		const res = await fetch(`${baseUrl}/languages/${params.iso}.json`);
		const bibles_dbs = await fetch(`${baseUrl}/bibles_dbs.json`);
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
	import {Card} from "@dbs/svelte-dbs-ui";

	export let bibles;
	export let language;

	bibles = bibles.map(bible => (bible.id))
</script>

<section class="flex h-48 flex-col place-items-center justify-center  overflow-hidden">
	<h1 class="text-center text-4xl dark:text-stone-100">{language.name}</h1>
	{#if language.name != language.autonym}
		<h2 class="dark:text-stone-200">{language.autonym ?? ''}</h2>
	{/if}
	{#if language.translations}
		<small class="text-stone-200 {language.translations.length > 6 ? 'rotate-6 text-4xl opacity-20 absolute' : ''} pt-6">
			{#each language.translations as translation}
				<span class="px-4">{translation.name}</span>
			{/each}
		</small>
	{/if}
</section>

<section class="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 border-t-2 border-stone-200 dark:border-stone-600 pt-6 sm:grid-cols-2">
	{#if language.bibles}
		{#each language.bibles as bible}
			{#if bibles.includes(bible.id)}
			<Card details={{
				title:bible.title,
				subtitle: bible.title_vernacular,
				nav: [
					{title:'PDF', url: 'https://dbs-web.s3.us-west-2.amazonaws.com/downloads/pdf/{bible.id}/{bible.id}_us_letter.pdf'},
					{title:'Study Bible', url: 'https://inscript.org/?w1=bible&t1=local%3A{bible.id}&v1=JN1_1'},
					{title:'Mobile Bible', url: 'https://inscript.bible.cloud/content/texts/{bible.id}/index.html'},
				]
			}} />
			{/if}
		{/each}
	{/if}
</section>

<section
class="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 border-t-2 border-stone-200 dark:border-stone-600 pt-6 sm:grid-cols-2"
>
	{#if language.resources}
		{#each language.resources as resource}
			<Card details={{
				title:resource.title,
				subtitle: resource.author,
				url: resource.url
			}} />
		{/each}
	{/if}
</section>

<section>
	{@html language.introduction ?? ''}
</section>

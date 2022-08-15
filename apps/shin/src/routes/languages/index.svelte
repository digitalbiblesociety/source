<script context="module">
	// See https://kit.svelte.dev/docs#loading
	export async function load({fetch}) {

		const iso_excluded = import.meta.env.VITE_ISO_EXCLUDED.split(',');
		const iso_included = import.meta.env.VITE_ISO_INCLUDED;
		const current_country = import.meta.env.VITE_COUNTRY_SITE;

		const baseUrl = import.meta.env.VITE_BASE_API
		const response = await fetch(`${baseUrl}/countries/${current_country}.json`);
		let country = await response.json();

		const bible_request = await fetch(`${baseUrl}/bibles_dbs.json`);
		let bibles = await bible_request.json();
		bibles = bibles.map((bible) => bible.iso);
		let languages = [];

		country.languages.forEach((language) => {
			if (bibles.includes(language.iso)) {
				let lang = {
					'tt': language.name,
					'tv': language.autonym,
					'id': language.iso,
					'po': language.population,
					'ci': language.country_id,
					'cn': country.name,
					'bc': bibles.filter((iso) => iso == language.iso).length,
					'rc': '',
					'fc': '',
				}
				if (iso_included) {
					if (iso_included.split(',').includes(language.iso)) {
						languages.push(lang);
					}
				} else {
					if (!iso_excluded.includes(language.iso)) {
						languages.push(lang);
					}
				}
			}
		});

		console.log(languages)

		return {
			props: {
				languages: languages,
			},
		}
	}
</script>
<script>
	import { onMount } from "svelte"
	import { browser } from '$app/env'
	import { Datatable } from "@dbs/svelte-datatables"
	import filters from '../bibles/filters.js'

	export let locale = 'en'
	export let languages
	export let translations

	const settings = {
		labels: {
			search: "Search",
			noRows: '',
			info: "{start} - {end} / {rows} ",
			previous: "<",
			next: ">",
		},
		customFilters: filters[import.meta.env.VITE_COUNTRY_SITE]
	}
	
	let js = false
	onMount(async () => {
		js = true
	})

	const table_row = (row, locale) =>  `
	<tr class="${row.bc + row.fc + row.rc > 0 ? '' : 'opacity-40'}">
		<td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
			<a href="/languages/${row.id}">
				<div class="text-sm text-gray-900 dark:text-gray-300">
					${row.tt}
				</div>
				<div class="text-xs text-gray-500">${row.tv}</div>
			</a>
		</td>
		<td class="hidden whitespace-nowrap text-sm sm:table-cell">
			${row.id}
		</td>
		<td>${row.po ? row.po.toLocaleString(locale) : ""}</td>
	</tr>`

	let rows
</script>

{#if languages}
<div class="mx-auto w-4/5 pt-8">

	{#if browser}
		<Datatable classList="relative" data="{languages}" bind:dataRows="{rows}" settings={settings}>
			<thead class="bg-gray-50 text-gray-600">
				<th data-key="(row) => row.tt + ' ' + row.iso" class="sortable">{translations?.thead?.title ?? 'title'}</th>
				<th data-name="language" data-key="id" class="sortable hidden sm:table-cell">iso</th>
				<th data-key="po" class="sortable">{translations?.thead?.population ?? 'population'}</th>
			</thead>
			<tbody>
				{#if rows}
					{#each $rows as row}
						{@html table_row(row)}
					{/each}
				{/if}
			</tbody>
		</Datatable>
	{/if}

	<noscript>
		<table class="mx-auto w-4/5 pt-8">
			<thead class="bg-gray-50 text-gray-600">
				<th class="sortable">{translations?.thead?.title ?? 'title'}</th>
				<th class="sortable"></th>
				<th class="sortable hidden sm:table-cell">iso</th>
			</thead>
			<tbody>
				{#each languages as row}
					{#if row.bc + row.fc + row.rc > 0}
						{@html table_row(row)}
					{/if}
				{/each}
			</tbody>
			</table>
	</noscript>
</div>
{/if}
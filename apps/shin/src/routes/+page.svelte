
<script>
	import { onMount } from "svelte"
	import { browser } from '$app/env'
	import { Datatable } from "@dbs/svelte-datatables"
	import filters from './bibles/filters.js'
	import {t} from "$lib/translations/index.js"

	export let data;
	$: ({ locale, languages, translations } = data);

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
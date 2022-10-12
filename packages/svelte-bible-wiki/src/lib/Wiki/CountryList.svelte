<script>
	import { onMount } from "svelte"
	import { browser } from '$app/env';
	import { Datatable } from "@dbs/svelte-datatables"
	import Banner from "../Banner.svelte";

	export let locale
	export let subset
	export let countries
	export let include_banner = false
	export let translations = {
		title: "Countries",
		subtitle: "",
		breadcrumbs: [],
	};

	const table_row = (row, locale) =>  `
		<tr>
			<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
				<svg class="mr-4 inline-flex h-5 w-5">
					<use href="/img/flags.svg#${row.id}" xlink:href="#${row.ci}"></use>
				</svg>
				<a class="inline-flex flex-col" href="/${locale}/countries/${row.id}">
					${row.tt}
					<div class="text-gray-400 text-sm">${row.co ?? ''}</div>
				</a>
			</td>
			<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900 text-center">
				${row.po ? row.po.toLocaleString("en") : ""}
			</td>
		</tr>`

	let rows
</script>

<svelte:head>
	<title>{translations?.title}</title>
</svelte:head>

{#if countries}
<div>
	
	{#if include_banner}
	<Banner 
		locale={locale}
		translations={translations} 
		tabs={[
			{title:translations?.tabs?.countries,url: 'countries'},
			{title:translations?.tabs?.maps,url: 'maps/countries'},
		]}
		background="banner_countries" />
	{/if}

	{#if browser}
	<Datatable classList="relative mx-auto w-4/5" data="{countries}" bind:dataRows="{rows}">
		<thead class="bg-gray-50 text-gray-600 text-center">
			<th data-key="tt" class="sortable">{translations?.thead?.title ?? 'Title'}</th>
			<th data-key="po" class="sortable">{translations?.thead?.population ?? 'Population'}</th>
		</thead>
		<tbody>
			{#if rows}
				{#each $rows as row}
					{@html table_row(row, locale)}
				{/each}
			{/if}
		</tbody>
	</Datatable>
	{:else}
	<table class="relative mx-auto w-4/5 font-mono mt-10">
		<thead class="bg-gray-50 text-gray-600 text-center">
			<th class="">{translations?.title}</th>
			<th class="">{translations?.population}</th>
		</thead>
		<tbody>
			{#each countries as row}
				{@html table_row(row, locale)}
			{/each}
		</tbody>
	</table>
	{/if}

</div>
{/if}
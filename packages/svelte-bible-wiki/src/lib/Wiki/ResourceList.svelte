<script>
	import { onMount } from "svelte"
	import { browser } from '$app/env'
	import { Datatable } from "@dbs/svelte-datatables"
	import Banner from "../Banner.svelte";

	export let locale
	export let resources
	export let include_banner = true
	export let translations = {
		title: "Resources",
		subtitle: "",
		breadcrumbs: [],
	};

	const table_row = (row, locale) =>  `
	<tr>
		<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900">${row.id}</td>
		<td class="px-6 py-4">
			<div class="max-w-sm overflow-hidden text-ellipsis text-sm text-gray-900 dark:text-gray-300">${row.ln}</div>
			<div class="max-w-sm overflow-hidden text-ellipsis text-sm text-gray-500">${row.iso ?? ""}</div>
		</td>
		<td class="px-6 py-4">
			<a href="/${locale}/resources/${row.id}">
				<div class="max-w-sm overflow-hidden text-ellipsis text-sm text-gray-900 dark:text-gray-300">${row.tt}</div>
				<div class="max-w-sm overflow-hidden text-ellipsis text-sm text-gray-500">${row.tv ?? ""}</div>
			</a>
		</td>
		<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900 md:table-cell">
			<svg class="inline-block h-5 w-5">
				<use href="/img/flags.svg#${row.ci}" xlink:href="#${row.ci}"></use>
			</svg>
			<span class="text-sm text-gray-900 dark:text-gray-300">${row.cn}</span>
		</td>
		<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900">${row.ci}</td>
	</tr>`

	let rows
</script>

{#if include_banner}
<Banner 
	locale={locale}
	translations={translations} 
	tabs={[
		{title:translations.tabs.bibles,url: 'bibles'},
		{title:translations.tabs.resources,url: 'organizations/resources', count: resources.length},
	]}
	background="https://images.bible.cloud/fab/banners/agencies.jpg" />
{/if}

{#if resources}
	<div class="mx-auto">
		{#if browser}
		<Datatable classList="relative" data="{resources}" bind:dataRows="{rows}">
			<thead>
				<th data-name="id" data-key="id" class="hidden">id</th>
				<th
				data-name="language"
				data-key="(row) => row.ln + ' ' + row.iso"
				class="sortable">Language</th>
				<th
					data-name="title"
					data-key="(row) => row.tt + ' ' + row.tv"
					class="sortable">
					title
				</th>
				<th
				data-name="country"
				data-key="(row) => row.cn + ' ' + row.ci"
				class="sortable">
				Country
				</th>
			</thead>
			<tbody>
				{#if rows}
					{#each $rows as row}
						{@html table_row(row, locale)}
					{/each}
				{/if}
			</tbody>
		</Datatable>
		{/if}
		<noscript>
			<table>
				<thead>
					<th>title</th>
					<th class="hidden md:table-cell">Country</th>
				</thead>
				<tbody>
					{#each resources as row}
						{@html table_row(row, locale)}
					{/each}
				</tbody>
			</table>
		</noscript>
	</div>
{/if}
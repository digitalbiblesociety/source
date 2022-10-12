<script>
	import { onMount } from "svelte"
	import { browser } from '$app/enviroment'
	import { Datatable } from "@dbs/svelte-datatables"

	export let locale
	export let alphabets

	onMount(async () => 
		if(!alphabets) {
			alphabets = await fetch(`/data/alphabets.json`).then(response => response.json())
		}
	})

	const table_row = (row, locale) =>  `
	<tr>
		<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
			<a href="/${locale}/alphabets/${row.script}">
				<div class="text-sm text-gray-900 dark:text-gray-200">${row.name}</div>
				<div class="text-xs text-gray-500">${row.script}</div>
			</a>
		</td>
		<td class="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-900 sm:table-cell">${row.type}</td>
		<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">${row.family}</td>
		<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">${row.status}</td>
	</tr>`

	let rows
</script>

{#if alphabets}
	<div class="mx-auto py-8">
		{#if browser}
		<Datatable classList="relative" data="{alphabets}" bind:dataRows="{rows}">
			<thead>
				<th data-key="name" classList="sortable">Title</th>
				<th data-key="type" classList="sortable hidden sm:table-cell">type</th>
				<th data-key="family" classList="sortable">Population</th>
				<th data-key="status" classList="sortable">Status</th>
			</thead>
			<tbody>
				{#if rows}
					{#each $rows as row, i}
						{@html table_row(row, locale)}
					{/each}
				{/if}
			</tbody>
		</Datatable>
		{/if}
		<noscript>
			<table class="relative w-full">
				<thead>
					<th>Title</th>
					<th class="hidden sm:table-cell">type</th>
					<th>Population</th>
					<th>Status</th>
				</thead>
				<tbody>
					{#each alphabets as row, i}
						{@html table_row(row, locale)}
					{/each}
				</tbody>
			</table>
		</noscript>
	</div>
{/if}
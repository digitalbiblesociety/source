<script>
	import { readable } from 'svelte/store';
	import { Render, Subscribe, createTable } from 'svelte-headless-table';
	import { addColumnFilters, addColumnOrder, addSortBy, addTableFilter, addPagination, addSelectedRows } from 'svelte-headless-table/plugins';
	import {bibleColumns} from './DatatableColumns.js'
	import DtPagination from './partials/DataTablePagination.svelte'
	import DtHeader from './partials/DataTableHeader.svelte'
	import DtSearch from './partials/DataTableSearch.svelte'
  
	export let inputData

	const data = readable(inputData);
	const table = createTable(data, {
		filter: addColumnFilters(),
		tableFilter: addTableFilter(),
		sort: addSortBy(),
		select: addSelectedRows({ initialSelectedDataIds: { 1: true } }),
		orderColumns: addColumnOrder(),
		page: addPagination({ initialPageSize: 20 }),
	});
  
	const columns = table.createColumns(
		bibleColumns(table)
	);
  
	const { flatColumns, headerRows, pageRows, 
			tableAttrs, tableBodyAttrs, pluginStates} = table.createViewModel(columns);
	const ids = flatColumns.map((c) => c.id);

	const { filterValue } = pluginStates.tableFilter;
	const { columnIdOrder } = pluginStates.orderColumns;
	$columnIdOrder = ids;
</script>

<pre>$filterValue = {$filterValue}</pre>

<div class="mx-auto max-w-xl my-8">
	<div class="mt-1 relative flex items-center">
	  <input type="text" name="search" id="search" 
	  bind:value={$filterValue} 
	  placeholder="Filter the table rows..."
	  class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900">
	  <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
		<kbd class="inline-flex items-center border border-gray-200 dark:border-gray-700 rounded px-2 text-sm font-sans text-gray-400"> ⌘K </kbd>
	  </div>
	</div>
</div>

<table class="min-w-full divide-y divide-gray-300 dark:divide-gray-900 rounded-t-lg" {...$tableAttrs}>
	<DtHeader headerRows={$headerRows} />
	  <tbody class="divide-y divide-gray-200 dark:divide-gray-900 bg-white dark:bg-stone-700" {...$tableBodyAttrs}>
		{#each $pageRows as row (row.id)}
		  <Subscribe attrs={row.attrs()} let:attrs rowProps={row.props()} let:rowProps>
			<tr {...attrs} class:selected={rowProps.select.selected}>
			  {#each row.cells as cell (cell.id)}
				<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
				  <td
					class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"
					{...attrs}
					class:sorted={props.sort.order !== undefined}
					class:matches={props.tableFilter.matches}
				  >
					  <Render of={cell.render()} />
				  </td>
				</Subscribe>
			  {/each}
			</tr>
		  </Subscribe>
		{/each}
	  </tbody>
</table>

<DtPagination {pluginStates} />
<script>
	import { readable } from 'svelte/store';
	import { Render, Subscribe, createTable } from 'svelte-headless-table';
	import { addColumnFilters, addColumnOrder, addSortBy, addTableFilter, addPagination, addSelectedRows } from 'svelte-headless-table/plugins';

	import {bibleColumns} from './DatatableColumns.js'
	import DtPagination from './partials/DataTablePagination.svelte'
	import DtHeader from './partials/DataTableHeader.svelte'
	import DtSearch from './partials/DataTableSearch.svelte'
  

	export let languages

	const data = readable(languages);
	const table = createTable(data, {
		filter: addColumnFilters(),
		tableFilter: addTableFilter(),
		sort: addSortBy(),
		select: addSelectedRows({ initialSelectedDataIds: { 1: true } }),
		orderColumns: addColumnOrder(),
		page: addPagination({ initialPageSize: 20 }),
	});
  
	const columns = table.createColumns(
		[
		table.column({
			header: 'Title',
			id: 'title-block',
			accessor: (item) => item,
			cell: ({ value }) => createRender(Cell, {
				title: value.tt,
				subtitle: value.iso,
				href: '/languages/'+value.iso,
			})
		}),
		table.column({
			header: 'Population',
			accessor: 'po',
		}),
		table.column({
			header: 'Country',
			id: 'country-block',
			accessor: (item) => item,
			cell: ({ value }) => createRender(Cell, {
				title: value.cn,
				subtitle: value.ci,
				href: '/countries/'+value.ci,
			})
		})
	]
	);
  
	const { flatColumns, headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates} = table.createViewModel(columns);
	const ids = flatColumns.map((c) => c.id);
  
	const { columnIdOrder } = pluginStates.orderColumns;
	$columnIdOrder = ids;
</script>

<DtSearch pluginStates={pluginStates} />

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
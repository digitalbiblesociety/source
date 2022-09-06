import { createRender } from 'svelte-headless-table';
import Cell from './partials/Cell.svelte'

export function bibleColumns(table) {
	return [
		table.column({
			header: 'Title',
			id: 'title-block',
			accessor: (item) => item,
			cell: ({ value }) => createRender(Cell, {
				title: value.tt,
				subtitle: value.tv,
				href: '/bibles/'+value.id,
			}),
			plugins: {
				sort: {
					getSortValue: (i) => i.tt + i.tv,
				},
				tableFilter: {
					getFilterValue: (i) => i.tt + i.tv,
				},
			},
		}),
		table.column({
			header: 'Date',
			accessor: 'dt'
		}),
		table.column({
			header: 'Language',
			accessor: 'ln',
		}),
		table.column({
			header: 'Country',
			id: 'cn',
			accessor: (item) => item.cn
		})
	]
}

export function languagesTable(table)
{
	return [
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
}

export function countryLanguagesTable(table)
{
	return [
		table.column({
			header: 'Title',
			id: 'title-block',
			accessor: (item) => item,
			cell: ({ value }) => createRender(Cell, {
				title: value.tt,
				subtitle: value.tv,
				href: '/languages/'+value.iso,
			})
		}),
		table.column({
			header: 'Population',
			accessor: 'po',
		})
	]
}


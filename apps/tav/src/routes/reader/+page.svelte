<script>
import { t } from "$lib/translations"
import { Datatable } from "@dbs/svelte-datatables"

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ bibles } = data);
let rows

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate()
const subMonths = (input, months) => {
	const date = new Date(input)
	date.setDate(1)
	date.setMonth(date.getMonth() - months)
	date.setDate(
		Math.min(
			input.getDate(),
			getDaysInMonth(date.getFullYear(), date.getMonth() - 1)
		)
	)
	return date.getFullYear() + "-" + date.getMonth()
}
</script>

<Datatable classList="relative" data="{bibles.data}" bind:dataRows="{rows}">
	<thead>
		<th data-key="name" class="sortable">{$t("common.Title")}</th>
		<th data-key="abbreviation" class="sortable hidden sm:table-cell">
			abbreviation
		</th>
		<th data-key="language" class="sortable">{$t("common.Language")}</th>
		<th data-key="status" class="sortable">Script</th>
		<th data-key="updatedAt" class="sortable">updatedAt</th>
	</thead>
	<tbody>
		{#if rows}
			{#each $rows as row}
				<tr class="{row.bibles_count > 0 ? 'text-green-600' : 'text-gray-400'}">
					<td
						class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
						<a href="{`/reader/${row.id}`}">
							<div class="text-sm text-gray-900 dark:text-gray-200">
								{row.name}
							</div>
							<div class="text-xs text-gray-500">{row.nameLocal}</div>
						</a>
					</td>
					<td
						class="hidden whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 sm:table-cell">
						{row.abbreviation}
					</td>
					<td
						class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
						<div class="text-sm text-gray-900 dark:text-gray-200">
							{row.language.name}
						</div>
						<div class="text-xs text-gray-500">{row.language.id}</div>
					</td>
					<td
						class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
						<div class="text-xs text-gray-500">{row.language.script}</div>
					</td>
					<td>
						{#if subMonths(new Date(), 1) > row.updatedAt}
							New
						{/if}
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</Datatable>

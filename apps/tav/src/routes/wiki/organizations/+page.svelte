<script>
import { Datatable } from "@dbs/svelte-datatables"
import { t } from "$lib/Translations"

/** @type {import('./$types').PageData} */
export let data;
$: ({ organizations } = data);

let rows
</script>

<svelte:head>
	<title>{$t("common.Organizations")} | {$t("common.org_title")}</title>
</svelte:head>

<div class="mx-auto py-8 lg:w-4/5">
	<Datatable classList="relative" data="{organizations}" bind:dataRows="{rows}">
		<thead>
			<th data-name="id" data-key="id" class="hidden">id</th>
			<th
				data-name="title"
				data-key="(row) => row.tt + ' ' + row.tv"
				class="sortable">
				title
			</th>
			<th
				data-name="country"
				data-key="(row) => row.cn"
				class="sortable hidden md:table-cell">
				Country
			</th>
			<th data-name="country_id" data-key="ci" class="hidden">country id</th>
		</thead>
		<tbody>
			{#if rows}
				{#each $rows as row}
					<tr>
						<td class="hidden whitespace-nowrap px-6 py-4 text-stone-900">
							{row.id}
						</td>
						<td class="px-6 py-4">
							<a href="/organizations/{row.id}">
								<div
									class="max-w-sm overflow-hidden text-ellipsis text-sm text-stone-900 dark:text-stone-300">
									{row.tt}
								</div>
								<div
									class="max-w-sm overflow-hidden text-ellipsis text-sm text-stone-500">
									{row.tv ?? ""}
								</div>
							</a>
						</td>
						<td
							class="hidden whitespace-nowrap px-6 py-4 text-stone-900 md:table-cell">
							<svg class="inline-block h-5 w-5">
								<use href="/img/flags.svg#{row.ci}" xlink:href="#{row.ci}">
								</use>
							</svg>
							<span class="text-sm text-stone-900 dark:text-stone-300">
								{row.cn}
							</span>
						</td>
						<td class="hidden whitespace-nowrap px-6 py-4 text-stone-900">
							{row.ci}
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</Datatable>
</div>

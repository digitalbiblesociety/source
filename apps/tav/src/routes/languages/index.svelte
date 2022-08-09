<script context="module">
// see https://kit.svelte.dev/docs#loading
export async function load({ fetch }) {
	const api_base_url = import.meta.env.VITE_BASE_API
	const res = await fetch(`${api_base_url}languages.json`)

	if (res.ok) {
		return {
			props: {
				languages: await res.json(),
			},
		}
	}

	return {
		status: res.status,
		error: new Error(`Could not load languages JSON`),
	}
}
</script>

<script>
import { t } from "$lib/translations"
import { Datatable } from "@dbs/svelte-datatables"

export let languages
let rows
</script>

<svelte:head>
	<title>Languages | {$t("common.org_title")}</title>
</svelte:head>

<Datatable classList="relative" data="{languages}" bind:dataRows="{rows}">
	<thead class="bg-gray-50 text-gray-600">
		<th data-key="(row) => row.tt + ' ' + row.iso" class="sortable">
			{$t("common.Title")}
		</th>
		<th data-key="id" class="sortable hidden sm:table-cell">iso</th>
		<th data-key="po" class="sortable">{$t("common.Population")}</th>
		<th data-key="ci" class="sortable">{$t("common.Country")}</th>
		<th data-key="bc" class="sortable hidden md:table-cell">
			{$t("common.Bibles")}
		</th>
		<th data-key="rc" class="sortable hidden lg:table-cell">
			{$t("common.Resources")}
		</th>
		<th data-key="rc" class="sortable hidden lg:table-cell">
			{$t("common.Films")}
		</th>
	</thead>
	<tbody>
		{#if rows}
			{#each $rows as row}
				<tr class="{row.bc + row.fc + row.rc > 0 ? '' : 'opacity-40'}">
					<td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
						<a href="/languages/{row.id}">
							<div class="text-sm text-gray-900 dark:text-gray-300">
								{row.tt}
							</div>
							<div class="text-xs text-gray-500">{row.tv}</div>
						</a>
					</td>
					<td class="hidden whitespace-nowrap text-sm sm:table-cell">
						{row.id}
					</td>
					<td>{row.po ? row.po.toLocaleString("en") : ""}</td>
					<td class="whitespace-nowrap text-center sm:text-left">
						<a href="/countries/{row.ci}">
							<svg class="mx-auto block h-5 w-5 sm:inline-block">
								<use href="/img/flags.svg#{row.ci}" xlink:href="#{row.ci}">
								</use>
							</svg>
							<span class="text-sm text-gray-900 dark:text-gray-300">
								{row.cn}
							</span>
						</a>
					</td>
					<td class="hidden whitespace-nowrap px-6 py-4 md:table-cell">
						<span
							class="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
							{row.bc}
						</span>
					</td>
					<td class="hidden whitespace-nowrap px-6 py-4 lg:table-cell">
						<span
							class="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
							{row.rc}
						</span>
					</td>
					<td class="hidden whitespace-nowrap px-6 py-4 lg:table-cell">
						<span
							class="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
							{row.fc}
						</span>
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</Datatable>

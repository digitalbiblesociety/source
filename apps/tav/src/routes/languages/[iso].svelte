<script context="module">
// see https://kit.svelte.dev/docs#loading
export async function load({ params, fetch }) {
	const api_base_url = import.meta.env.VITE_BASE_API
	const res = await fetch(`${api_base_url}languages/${params.iso}.json`)
	if (res.ok) {
		return {
			props: {
				language: await res.json(),
			},
		}
	}
	return {
		status: res.status,
		error: new Error(`Could not load language JSON for ${params.iso}`),
	}
}
</script>

<script>
import { t } from "$lib/translations"
import { Tabs, Tab, TabList, TabPanel } from "$lib/Tabs"
import { Datatable } from "@dbs/svelte-datatables"
export let language
let rows
</script>

<svelte:head>
	<title>{language.name} | {$t("common.org_title")}</title>
</svelte:head>

<div>glotto_id: {language.glotto_id ?? ""}</div>
<div>iso: {language.iso ?? ""}</div>
<div>iso1: {language.iso1 ?? ""}</div>
<div>latitude: {language.latitude ?? ""}</div>
<div>level: {language.level ?? ""}</div>
<div>location: {language.location ?? ""}</div>
<div>longitude: {language.longitude ?? ""}</div>
<div>macroarea: {language.macroarea ?? ""}</div>
<div>name: {language.name ?? ""}</div>
<div>population: {language.population ?? ""}</div>
<div>status_id: {language.status_id ?? ""}</div>

<Tabs>
	{#if language.bibles.length != 0 || language.resources.length != 0}
		<TabList>
			<Tab>{$t("common.Bibles")}</Tab>
			<Tab>{$t("common.Resources")}</Tab>
		</TabList>
	{/if}
	<TabList>
		{#if language.bibles.length != 0}
			<Tab>
				Bibles
				<span
					class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
					{language.bibles.length}
				</span>
			</Tab>
		{/if}
		{#if language.films.length != 0}
			<Tab>
				Films
				<span
					class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
					{language.films.length}
				</span>
			</Tab>
		{/if}
		{#if language.resources.length != 0}
			<Tab>
				Resources
				<span
					class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
					{language.resources.length}
				</span>
			</Tab>
		{/if}
		<Tab>Meta Data</Tab>
	</TabList>

	{#if language.bibles.length != 0}
		<TabPanel>
			<Datatable
				classList="relative"
				data="{language.bibles}"
				bind:dataRows="{rows}">
				<thead>
					<th data-key="date" class="sortable hidden sm:table-cell">date</th>
					<th
						data-key="(row) => row.title + ' ' + row.title_vernacular"
						class="sortable">
						title
					</th>
					<th data-key="id" class="sortable hidden sm:table-cell">id</th>
					<th data-key="country_id" class="sortable">Country</th>
				</thead>
				<tbody>
					{#if rows}
						{#each $rows as row}
							<tr>
								<td
									class="hidden whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 sm:table-cell">
									{row.date}
								</td>
								<td
									class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
									<a href="/bibles/{row.id}">
										<div class="text-sm text-gray-900">{row.title}</div>
										<div class="text-xs text-gray-500">
											{row.title_vernacular}
										</div>
									</a>
								</td>
								<td
									class="hidden whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 sm:table-cell">
									{row.id}
								</td>
								<td
									class="whitespace-nowrap px-6 py-4 text-center text-sm font-medium text-gray-900 sm:text-left">
									<a href="/countries/{row.ci}">
										<svg class="mx-auto block h-5 w-5 sm:inline-block">
											<use
												href="/img/flags.svg#{row.country_id}"
												xlink:href="#{row.country_id}">
											</use>
										</svg>
										<span class="text-sm text-gray-900">{row.country_id}</span>
									</a>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</Datatable>
		</TabPanel>
	{/if}

	{#if language.resources.length != 0}
		<TabPanel>
			<Datatable
				classList="relative"
				data="{language.resources}"
				bind:dataRows="{rows}">
				<thead>
					<th data-key="(row) => row.tt + ' ' + row.iso" class="sortable">
						title
					</th>
					<th data-key="organization_id" class="sortable">Organization</th>
				</thead>
				<tbody>
					{#if rows}
						{#each $rows as row}
							<tr>
								<td
									class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
									<a href="{row.url}">
										<div class="text-sm text-gray-900">{row.title}</div>
										<div class="text-xs text-gray-500">
											{row.title_vernacular}
										</div>
									</a>
								</td>
								<td
									class="whitespace-nowrap px-6 py-4 text-center text-sm font-medium text-gray-900 sm:text-left">
									<a href="/organizations/{row.organization_id}">
										<span class="text-sm text-gray-900">
											{row.organization_id}
										</span>
									</a>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</Datatable>
		</TabPanel>
	{/if}
</Tabs>

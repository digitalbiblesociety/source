<script context="module">
export async function load({ params, fetch }) {
	const api_base_url = import.meta.env.VITE_BASE_API
	const res = await fetch(`${api_base_url}libraries/${params.id}.json`)
	if (res.ok) {
		return {
			props: {
				library: await res.json(),
			},
		}
	}

	return {
		status: res.status,
		error: new Error(`Could not load individual library: ${params.id}`),
	}
}
</script>

<script>
import { Datatable } from "@dbs/svelte-datatables"
import { t } from "$lib/translations"
import { Tabs, Tab, TabList, TabPanel } from "$lib/Tabs"
import Breadcrumbs from "$lib/Breadcrumbs.svelte"

import IconArrowRight from "~icons/heroicons-outline/arrow-right"

export let library
let rows
</script>

<svelte:head>
	<title>{library.title} | {$t("common.org_title")}</title>
</svelte:head>

<Tabs>
	<div
		class="border-t-1 relative -mx-9 -mt-1 flex flex-col justify-between rounded-t-xl border-2 border-b-0
				border-gray-400 bg-cover bg-center bg-no-repeat text-center"
		style="background-image: url('https://images.bible.cloud/treasures/banners/{library.id}.jpg');">
		<h4 class="text-shadow-xl pt-8 text-2xl text-gray-200">
			{library.title_vernacular}
		</h4>
		<h2
			class="text-shadow-xl pb-8 text-3xl font-extrabold text-gray-300 sm:text-4xl">
			{library.title}
		</h2>
		<TabList>
			<Tab class="dbs-tab">{$t("common.Overview")}</Tab>
			{#if library.resources.length != 0}
				<Tab>{$t("common.Resources")}</Tab>
			{/if}
		</TabList>
	</div>

	<div class="">
		<Breadcrumbs
			breadcrumbs="{[
				{ link: `/libraries/`, title: $t('common.Libraries') },
				{ link: `/libraries/treasures`, title: $t('common.Treasures') },
				{ link: '#', title: library.title },
			]}" />
	</div>

	<TabPanel>
		<div class="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="relative mx-auto max-w-4xl">
				<div class="py-12 sm:flex">
					<div
						class="mt-3 pr-8 text-xl text-gray-800 dark:text-gray-300 sm:mt-4">
						<a
							class="button mb-8 p-4"
							href="http://downloads.dbs.org/treasures/{library.iso.toUpperCase()}/index.html">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="inline-block h-6 w-6"
								viewBox="0 0 62 61"
								fill="currentColor">
								<path d="M32.1 0h17l-4.8 17.3z"></path>
								<path d="M15.5 17.1 11.5 0h16.1z"></path>
								<path d="m9.5.9 4.2 17.8H.1z"></path>
								<path d="m46.3 18.7 4.6-16.5 8.8 16.5z"></path>
								<path d="m43.9 20.7-14 39-13.9-39z"></path>
								<path d="M13.9 20.7 26.1 55 0 20.7z"></path>
								<path d="M45.9 20.7h13.8l-26 34.2z"></path>
								<path d="M17.3 18.7 29.9.9l12.6 17.8z"></path>
							</svg>
							{$t("common.Demo")}
							{library.title}
						</a>

						<a
							class="button-dark mb-8 p-4"
							href="https://dbs-web.s3.us-west-2.amazonaws.com/downloads/treasureslibraries/{library.iso.toUpperCase()}.zip">
							<IconArrowRight class="inline-flex h-5 w-5" />
							{$t("common.Download")}
							{library.title}
						</a>
						{@html library.description}
					</div>
					<div class="mb-4 shrink-0 sm:mb-0 sm:mr-4">
						<img
							alt="{library.title}"
							src="https://images.bible.cloud/treasures/box/{library.id}.jpg" />
					</div>
				</div>
			</div>
		</div>

		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<dl
					class="rounded-lg bg-white shadow-lg dark:bg-gray-800 sm:grid sm:grid-cols-3">
					<div
						class="flex flex-col border-b border-gray-100 p-6 text-center dark:border-gray-900 sm:border-0 sm:border-r">
						<dt
							class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
							{$t("common.Resources")}
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-blue-600">
							{library.resources.length}
						</dd>
					</div>
					<div
						class="flex flex-col border-t border-b border-gray-100 p-6 text-center dark:border-gray-900 sm:border-0 sm:border-l sm:border-r">
						<dt
							class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
							{$t("common.Audio Lessons")}
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-blue-600">
							{library.resources.filter(function (element) {
								return element.type === "audio"
							}).length}
						</dd>
					</div>
					<div
						class="flex flex-col border-t border-gray-100 p-6 text-center dark:border-gray-900 sm:border-0 sm:border-l">
						<dt
							class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
							{$t("common.Scripture Films")}
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-blue-600">
							{library.resources.filter(function (element) {
								return element.type === "video"
							}).length}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</TabPanel>
	<TabPanel>
		<Datatable
			classList="relative"
			data="{library.resources}"
			bind:dataRows="{rows}">
			<thead>
				<th data-key="id" class="hidden">id</th>
				<th data-key="(row) => row.type + ' ' + row.iso" class="sortable">
					{$t("common.Type")}
				</th>
				<th
					data-key="(row) => row.title + ' ' + row.title_vernacular"
					class="sortable">
					{$t("common.Title")}
				</th>
				<th data-key="author" class="sortable hidden md:table-cell">
					{$t("common.Author")}
				</th>
			</thead>
			<tbody>
				{#if rows}
					{#each $rows as row}
						<tr>
							<td class="hidden whitespace-nowrap px-6 py-4 text-gray-900">
								{row.id}
							</td>
							<td class="whitespace-nowrap px-6 py-4 text-gray-900">
								<a href="/languages/{row.iso}">
									<div class="text-sm text-gray-900 dark:text-gray-300">
										{row.type}
									</div>
									<div class="text-xs italic text-gray-500">{row.iso}</div>
								</a>
							</td>
							<td class="px-6 py-4">
								<span>
									<div class="text-sm text-gray-900 dark:text-gray-300">
										{row.title}
									</div>
									<div class="text-sm text-gray-500">
										{row.title_vernacular ?? ""}
									</div>
								</span>
							</td>
							<td
								class="hidden whitespace-nowrap px-6 py-4 text-gray-900 md:table-cell">
								{row.author}
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</Datatable>
	</TabPanel>
</Tabs>

<script>
	import { onMount } from "svelte"
	import { browser } from '$app/environment'
	import { Datatable } from "@dbs/svelte-datatables"
	import Banner from "../Banner.svelte";

	export let locale = 'en'
	export let subset = ''
	export let languages
	export let translations
	export let include_banner = true
	
	let js = false
	onMount(async () => {
		js = true
	})

	const table_row = (row, locale) =>  `
	<tr class="${row.bc + row.fc + row.rc > 0 ? '' : 'opacity-40'}">
						<td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
							<a href="/languages/${row.id}">
								<div class="text-sm text-gray-900 dark:text-gray-300">
									${row.tt}
								</div>
								<div class="text-xs text-gray-500">${row.tv}</div>
							</a>
						</td>
						<td class="hidden whitespace-nowrap text-sm sm:table-cell">
							${row.id}
						</td>
						<td>${row.po ? row.po.toLocaleString(locale) : ""}</td>
						<td class="whitespace-nowrap text-center sm:text-left">
							<a href="/countries/${row.ci}">
								<svg class="mx-auto block h-5 w-5 sm:inline-block">
									<use href="/img/flags.svg#${row.ci}" xlink:href="#${row.ci}"></use>
								</svg>
								<span class="text-sm text-gray-900 dark:text-gray-300">
									${row.cn}
								</span>
							</a>
						</td>
						<td class="hidden whitespace-nowrap px-6 py-4 md:table-cell">
							<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm bg-gray-100 text-gray-700">
								${row.bc}
							</span>
						</td>
						<td class="hidden whitespace-nowrap px-6 py-4 lg:table-cell">
							<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm bg-gray-100 text-gray-700">
								${row.rc}
							</span>
						</td>
						<td class="hidden whitespace-nowrap px-6 py-4 lg:table-cell">
							<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm bg-gray-100 text-gray-700">
								${row.fc}
							</span>
						</td>
					</tr>`

	let rows
</script>

{#if include_banner}
<Banner 
	locale={locale}
	translations={translations}
	tabs={[
		{title:translations?.tabs?.languages ?? 'Languages', url: 'languages', count: languages.length},
		{title:translations?.tabs?.maps ?? 'Maps', url: 'maps'},
	]}
	background="banner_languages" />
{/if}

{#if languages}
<div class="mx-auto w-4/5 pt-8">

	{#if browser}
	<Datatable classList="relative" data="{languages}" bind:dataRows="{rows}">
		<thead class="bg-gray-50 text-gray-600">
			<th data-key="(row) => row.tt + ' ' + row.iso" class="sortable">{translations?.thead?.title ?? 'title'}</th>
			<th data-key="id" class="sortable hidden sm:table-cell">iso</th>
			<th data-key="po" class="sortable">{translations?.thead?.population ?? 'population'}</th>
			<th data-key="ci" class="sortable">{translations?.thead?.country ?? 'country'}</th>
			<th data-key="bc" class="sortable hidden md:table-cell">{translations?.thead?.bibles ?? 'bibles'}</th>
			<th data-key="rc" class="sortable hidden lg:table-cell">{translations?.thead?.resources ?? 'resources'}</th>
			<th data-key="fc" class="sortable hidden lg:table-cell">{translations?.thead?.films ?? 'films'}</th>
		</thead>
		<tbody>
			{#if rows}
				{#each $rows as row}
					{@html table_row(row)}
				{/each}
			{/if}
		</tbody>
	</Datatable>
	{/if}
	<noscript>
		<table class="mx-auto w-4/5 pt-8">
			<thead class="bg-gray-50 text-gray-600">
				<th class="sortable">{translations?.thead?.title ?? 'title'}</th>
				<th class="sortable"></th>
				<th class="sortable hidden sm:table-cell">iso</th>
			</thead>
			<tbody>
				{#each languages as row}
					{#if row.bc + row.fc + row.rc > 0}
						{@html table_row(row)}
					{/if}
				{/each}
			</tbody>
			</table>
	</noscript>
</div>
{/if}
<script>
	import {Datatable} from '@dbs/svelte-datatables'
	import { page } from '$app/stores'
	import {t} from '$lib/translations'
	import filters from './filters.js'
	import MX from "$lib/map/MX.svelte"
	import IN from "$lib/map/IN.svelte"

    const options = {
		MX:	MX,
		IN:	IN
	}
	export let bibles

	bibles = bibles.filter(function (bible) {
    	return bible.ci === import.meta.env.VITE_COUNTRY_SITE;
	});

	// Filter
	let currentLanguage = $page.url.searchParams.get('language')
	if(currentLanguage) {
		bibles = bibles.filter(function (bible) {
			let languages = filters[import.meta.env.VITE_COUNTRY_SITE][0].options;
			for (let index = 0; index < languages.length; index++) {
				const language = languages[index];
				if(currentLanguage == language.label) {
					return language.value.split('|').includes(bible.iso)
				}	
			}
			return false
		});
	}

	const settings = {
		labels: {
			search: "Search",
			noRows: '',
			info: "{start} - {end} / {rows} ",
			previous: "<",
			next: ">",
		},
		customFilters: !currentLanguage ? filters[import.meta.env.VITE_COUNTRY_SITE] : []
	}

	let rows
</script>



<div class="relative mx-auto py-2 px-3 w-full">
	<a href="/map" class="text-green-500 absolute top-2 right-2 hover:text-green-800 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
		 </svg>
	</a>

	<Datatable
		classList="relative"
		data="{bibles}"
		bind:dataRows="{rows}"
		settings={settings}>
		<thead>
			<th data-name="id" data-key="id" class="hidden">id</th>
			<th data-name="file_set" data-key="fs" class="hidden">file_set</th>
			<th data-name="language" data-key="(row) => row.ln + ' ' + row.iso" class="sortable">{$t('common.language')}</th>
			<th data-name="title" data-key="(row) => row.tt + ' ' + row.tv" class="sortable"> {$t('common.title')}
			</th>
			<th data-name="country_id" data-key="ci" class="hidden">country id</th>
			<th data-name="date" data-key="dt" class="sortable hidden md:table-cell">{$t('common.date')}</th>
		</thead>
		<tbody>
			{#if rows}
				{#each $rows as row}
					<tr class="h-12">
						<td class="dark:white hidden whitespace-nowrap px-6 py-4 text-stone-900">{row.id}</td>
						<td class="whitespace-nowrap px-6 py-4 text-stone-900">
							<div class="text-sm text-stone-900 dark:text-white">{row.ln}</div>
							<div class="text-xs italic text-stone-500 dark:text-stone-400">{row.iso}</div>
						</td>
						<td class="px-6 py-4">
							<a
								href="/bibles/{row.id}"
								class="text-blue-700 hover:underline dark:text-white">
								<div class="max-w-sm overflow-hidden text-ellipsis text-sm">{row.tt}</div>
								<div
									class="max-w-sm overflow-hidden text-ellipsis text-sm text-stone-600 dark:text-stone-400">
									{row.tv ?? ''}
								</div>
							</a>
						</td>
						<td class="hidden whitespace-nowrap px-6 py-4 text-stone-900">
							{row.ci}
						</td>
						<td
							class="hidden whitespace-nowrap px-6 py-4 text-stone-900 md:table-cell">
							{row.dt}
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</Datatable>
</div>
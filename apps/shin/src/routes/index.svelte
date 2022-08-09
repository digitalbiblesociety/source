<script context="module">
	// See https://kit.svelte.dev/docs#loading
	export async function load({fetch}) {
		const baseUrl = import.meta.env.VITE_BASE_API
		const res = await fetch(`${baseUrl}/bibles_dbs.json`)
		if (res.ok) {
			return {
				props: {
					bibles: await res.json(),
				},
			}
		}
	
		return {
			status: res.status,
			error: new Error('Could not load bibles JSON'),
		}
	}
</script>
<script>
	import {Datatable} from 'svelte-datatables'
	import {t} from '$lib/translations'
	export let bibles

	bibles = bibles.filter(function (bible) {
    	return bible.ci === import.meta.env.VITE_COUNTRY_SITE;
	});

	const settings = {
	labels: {
		search: "Search",
		noRows: '',
		info: "{start} - {end} / {rows} ",
		previous: "<",
		next: ">",
	},
	customFilters: [
		{
			label: "Types",
			key: "file_set",
			class: "",
			type: "select",
			operation: "regex",
			options: [
				{ label: "web", value: "web" },
				{ label: "pdf", value: "PDF" },
				{ label: "epub", value: "ePub" },
				{ label: "app", value: "App" },
				//	{ label: $t("bible.bible_file_audio_web"), value: "audio_web" },
				//	{ label: $t("bible.bible_file_archiveaudio"), value: "archive" },
			],
		},
	],
}

	let rows
</script>

<div class="mx-auto py-2 px-3 md:w-full">
	<Datatable
		classList="relative"
		data="{bibles}"
		bind:dataRows="{rows}"
		{settings}>
		<thead>
			<th data-name="id" data-key="id" class="hidden">id</th>
			<th data-name="file_set" data-key="fs" class="hidden">file_set</th>
			<th
				data-name="language"
				data-key="(row) => row.ln + ' ' + row.iso"
				class="sortable">
				{$t('common.language')}
			</th>
			<th
				data-name="title"
				data-key="(row) => row.tt + ' ' + row.tv"
				class="sortable">
				{$t('common.title')}
			</th>
			<th
				data-name="country"
				data-key="(row) => row.cn"
				class="sortable hidden md:table-cell">
				{$t('common.country')}
			</th>
			<th data-name="country_id" data-key="ci" class="hidden">country id</th>
			<th data-name="date" data-key="dt" class="sortable hidden md:table-cell">
				{$t('common.date')}
			</th>
		</thead>
		<tbody>
			{#if rows}
				{#each $rows as row}
					<tr>
						<td
							class="dark:white hidden whitespace-nowrap px-6 py-4 text-stone-900">
							{row.id}
						</td>
						<td class="whitespace-nowrap px-6 py-4 text-stone-900">
							<div class="text-sm text-stone-900 dark:text-white">
								{row.ln}
							</div>
							<div class="text-xs italic text-stone-500 dark:text-stone-400">
								{row.iso}
							</div>
						</td>
						<td class="px-6 py-4">
							<a
								href="/bibles/{row.id}"
								class="text-primary-700 hover:underline dark:text-white">
								<div class="max-w-sm overflow-hidden text-ellipsis text-sm">
									{row.tt}
								</div>
								<div
									class="max-w-sm overflow-hidden text-ellipsis text-sm text-stone-600 dark:text-stone-400">
									{row.tv ?? ''}
								</div>
							</a>
						</td>
						<td
							class="hidden whitespace-nowrap px-6 py-4 text-stone-900 md:table-cell">
							<svg class="mr-1 inline-block h-5 w-5 drop-shadow-md">
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
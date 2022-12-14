<script>
	import { onMount } from 'svelte';
	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
	import { Datatable } from '@dbs/svelte-datatables';
	import countryShapes from '../Map/country-shapes.json';
	import FetchWikiSidebar from '../API/FetchWikiSidebar.js';

	let tabs = [{ name: 'Data' }, { name: 'Maps' }];

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}

	const createData = () => {
		return countryShapes.map((d) => [
			d.properties.geounit,
			Math.random() < 0.13 ? Math.random() : 0,
			Math.random()
		]);
	};
	let data = createData();

	let country_maps_base_url = 'https://images.bible.cloud/maps/country/thumbs/';
	let country_maps;
	let infobox;

	export let id;
	export let locale;
	export let country;

	onMount(async () => {
		if (!country) {
			let response = await fetch(`/data/countries_${id}.json`);
			country = await response.json();
		}

		infobox = await FetchWikiSidebar(country.name, locale ?? 'en');

		country_maps = [
			{ title: 'Goverment', img: `${country.id}-gov.jpg` },
			{ title: 'Land', img: `${country.id}-land.jpg` },
			{ title: 'Language Map', img: `${country.id}-lang.jpg` },
			{ title: 'Region', img: `${country.id}-lang2.jpg` },
			{ title: 'Location', img: `${country.id}-location.jpg` },
			{ title: 'Transportation', img: `${country.id}-trans.jpg` }
		];
	});

	let rows;
</script>

{#if country}
	<TabGroup as="div">
		<div
			class="flex flex-col bg-gradient-to-br from-blue-500 to-secondary-500 dark:from-blue-700 dark:to-secondary-700 xl:rounded-tl-xl xl:rounded-tr-xl text-stone-100 text-2xl text-center">
			<h1
				class="text-center text-3xl font-extrabold leading-8 tracking-wider text-white-900 sm:text-4xl pt-6">
				{country.name_long ?? ''}
				<div class="text-sm text-stone-500 dark:text-stone-200">{country.region_name}</div>
			</h1>

			<TabList class="relative z-0 rounded-lg flex w-1/2 mx-auto">
				{#each tabs as tab, tabIdx (tab.name)}
					<Tab
						key={tab.name}
						disabled={tab.disabled}
						class={({ selected }) =>
							classNames(
								selected
									? 'text-stone-900 dark:text-white'
									: 'text-stone-500 dark:text-stone-300 hover:text-stone-700',
								tabIdx === 0 ? 'rounded-l-lg' : '',
								tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
								tab.disabled && 'opacity-50',
								'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-sm text-center focus:z-10'
							)}
						let:selected
					>
						<span>{tab.name}</span>
						{#if tab.disabled}
							<small class="inline-block px-4 text-xs">(disabled)</small>
						{/if}
						<span
							aria-hidden="true"
							class={classNames(
								selected ? 'bg-blue-900' : 'bg-transparent',
								'absolute inset-x-0 bottom-0 h-0.5'
							)}
						/>
					</Tab>
				{/each}
			</TabList>
		</div>

		<div class="flex flex-col w-full h-full p-12 space-y-12">
			<TabPanels class="mt-4">
				<TabPanel class="rounded-lg p-4 shadow" key="Data">
					<div class="flex">
						<div class="w-1/4">
							{#if infobox}
								<table class="infobox">
									{@html infobox}
								</table>
							{/if}
							<dl>
								<div class="flex justify-between py-1 text-sm">
									<dt class="text-stone-500">Population</dt>
									<dd class="text-stone-900 dark:text-stone-300">
										{new Intl.NumberFormat(country.population, {
											maximumSignificantDigits: 8
										}).format(country.population)}
									</dd>
								</div>
								<div class="flex justify-between py-1 text-sm">
									<dt class="text-stone-500">Language</dt>
									<dd class="text-stone-900 dark:text-stone-300">
										<a
											href="/{locale}/languages/{country.official_language_iso}"
											class="text-blue-600"
										>
											{country.official_language}
										</a>
									</dd>
								</div>
								<div class="flex justify-between py-1 text-sm">
									<dt class="text-stone-500">Languages</dt>
									<dd class="text-stone-900 dark:text-stone-300">
										{country.languages.length}
									</dd>
								</div>
								<div class="flex justify-between py-1 text-sm">
									<dt class="text-stone-500">Primary Religion</dt>
									<dd class="text-stone-900 dark:text-stone-300">
										{country.religion_primary}
									</dd>
								</div>
								{#if country.persecution}
									<div class="mt-2 border-t border-b border-stone-200">
										<div class="flex justify-between py-1 text-sm">
											<dt class="text-stone-500">World Watch List</dt>
											<dd class="text-stone-900 dark:text-stone-300">
												{country.persecution.rank}
												<small class="align-top text-xs">
													({country.persecution.score})
												</small>
											</dd>
										</div>
										<div class="flex flex-col py-1 text-sm">
											<dt class="text-stone-500">Persecution Type</dt>
											<dd class="text-stone-900 dark:text-stone-300">
												{country.persecution.persecution_type}
											</dd>
										</div>
									</div>
								{/if}

								<div class="py-1 text-sm">
									<dt class="text-stone-500">overview</dt>
									<dd class="text-stone-900 dark:text-stone-300">
										{country.overview}
									</dd>
								</div>

								<div class="py-1 text-sm">
									<a class="text-stone-900 dark:text-stone-300" href={country.url_wiki}>
										Wikipedia
									</a>
								</div>
							</dl>
						</div>

						<div class="w-3/4">
							<Datatable classList="relative" data={country.languages} bind:dataRows={rows}>
								<thead>
									<th data-key="name" class="sortable">Name</th>
									<th data-key="iso" class="sortable hidden sm:table-cell">Iso</th>
								</thead>
								<tbody>
									{#if rows}
										{#each $rows as row}
											<tr>
												<td class="whitespace-nowrap px-6 py-4 text-sm text-stone-900">
													<a href={'/' + locale + '/languages/' + row.iso}>
														<div class="text-sm text-stone-900 dark:text-stone-200">
															{row.name}
														</div>
														<div class="text-xs italic text-stone-500">
															{row.autonym}
														</div>
													</a>
												</td>
												<td
													class="hidden whitespace-nowrap px-6 py-4 text-sm text-stone-900 sm:table-cell"
												>
													{row.iso}
												</td>
											</tr>
										{/each}
									{/if}
								</tbody>
							</Datatable>
						</div>
					</div>
				</TabPanel>
				<TabPanel key="Maps">
					<div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
						{#if country_maps}
							{#each country_maps as country_map}
								<div
									class="relative flex items-center space-x-3 rounded-lg border border-stone-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-stone-400 dark:border-stone-500 dark:bg-stone-900"
								>
									<div class="shrink-0">
										<img
											class="h-10 w-10 rounded-full"
											src="{country_maps_base_url}{country_map.img}"
											alt=""
										/>
									</div>
									<div class="min-w-0 flex-1">
										<a
											href="{country_maps_base_url}{country_map.img}"
											target="_blank"
											class="focus:outline-none"
										>
											<span class="absolute inset-0" aria-hidden="true" />
											<p class="text-sm text-stone-900 dark:text-stone-200">
												{country_map.title}
											</p>
											<p class="truncate text-sm text-stone-500" />
										</a>
									</div>
								</div>
							{/each}
						{/if}
					</div>
				</TabPanel>
			</TabPanels>
		</div>
	</TabGroup>
{/if}
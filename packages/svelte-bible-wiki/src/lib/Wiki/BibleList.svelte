<script>
import { onMount } from "svelte"
import { browser } from '$app/environment';
import { Datatable } from "@dbs/svelte-datatables"
import Banner from "../Banner.svelte";

export let translations;
export let locale = 'en'
export let subset = ''
export let bibles
export let include_banner = true

onMount(async () => {
	if(!bibles) {
		bibles = await fetch(`/data/bibles${subset}.json`).then(response => response.json())
	}
})


const table_row = (row, locale) =>  `
<tr class="${ (row.lc == 0) ? 'opacity-50' : ''}">
	<td class="whitespace-nowrap px-6 py-4 text-stone-900">
		<a href="/${locale}/languages/${row.id}">
			<div class="text-sm text-stone-900 dark:text-stone-300">${row.ln}</div>
			<div class="text-xs italic text-stone-500 lowercase">${row.iso} | ${row.id.substring(3)}</div>
		</a>
	</td>
	<td class="x-6 py-4">
		<a href="/${locale}/bibles/${row.id}">
			<div class="max-w-sm overflow-hidden text-ellipsis text-sm text-stone-900 dark:text-stone-300">
				${row.tt}
			</div>
			<div class="max-w-sm overflow-hidden text-ellipsis text-sm text-stone-500">
				${row.tv ?? ""}
			</div>
		</a>
	</td>
	<td
		class="inline-flex md:table-cell whitespace-nowrap px-6 py-4 text-stone-900 md:table-cell">
		<svg class="inline-block h-5 w-5">
			<use href="/img/flags.svg#${row.ci}" xlink:href="#${row.ci}"></use>
		</svg>
		<span class="text-sm text-stone-900 dark:text-stone-300">${row.cn}</span>
	</td>
	<td class="hidden md:table-cell whitespace-nowrap px-6 py-4 text-stone-900 md:table-cell">${row.dt}</td>
</tr>`


let rows

const filters = {customFilters:[
	{
		label: "Regions",
		key: "country_id",
		class: "",
		type: "radio",
		operation: "regex",
		options: [
			{ label: "All", value: "" },
			{
				label: "Africa",
				value:
					"AO|BF|BI|BJ|BW|CD|CF|CG|CI|CM|CV|DJ|DZ|EG|EH|ER|ET|GA|GH|GM|GN|GQ|GW|KE|KM|LR|LS|LY|MA|MG|ML|MR|MU|MW|MZ|NA|NE|NG|RE|RW|SC|SD|SH|SL|SN|SO|SS|ST|SZ|TD|TG|TN|TZ|UG|YT|ZA|ZM|ZW",
			},
			{
				label: "Asia",
				value:
					"AF|AM|AZ|BD|BH|BN|BT|CC|CN|CX|GE|HK|ID|IL|IN|IO|IQ|IR|JO|JP|KG|KH|KP|KR|KW|KZ|LA|LB|LK|MM|MN|MO|MV|MY|NP|OM|PH|PK|PS|QA|SA|SG|SY|TH|TJ|TM|TR|TW|UZ|VN|YE",
			},
			{
				label: "Europe",
				value:
					"AD|AL|AT|AX|BA|BE|BG|BY|CH|CY|CZ|DE|DK|EE|ES|FI|FO|FR|GB|GG|GI|GR|HR|HU|IE|IM|IS|IT|JE|LI|LT|LU|LV|MC|MD|ME|MK|MT|NL|NO|PL|PT|RO|RS|RU|SE|SI|SJ|SK|SM|UA|VA|XK",
			},
			{
				label: "South America",
				value: "AR|BO|BR|CL|CO|EC|FK|GF|GY|PE|PY|SR|UY|VE",
			},
			{
				label: "North America",
				value:
					"AG|AI|AW|BB|BL|BM|BQ|BS|BZ|CA|CR|CU|CW|DM|DO|GD|GL|GP|GT|HN|HT|JM|KN|KY|LC|MF|MQ|MS|MX|NI|PA|PM|PR|SV|SX|TC|TT|US|VC|VG|VI",
			},
			{
				label: "Oceania",
				value:
					"AS|AU|CK|FJ|FM|GU|KI|MH|MP|NC|NF|NR|NU|NZ|PF|PG|PN|PW|SB|TK|TL|TO|TV|UM|VU|WF|WS",
			},
		],
	},
	{
		label: "Types",
		key: "file_set",
		class: "",
		type: "radio",
		operation: "regex",
		options: [
			{ label: "All", value: "" },
			{ label: "web", value: "web" },
			{ label: "pdf", value: "pdf" },
			{ label: "app", value: "app" },
			{ label: "audio_web", value: "audio_web" },
			{ label: "archive", value: "archive" },
			{ label: "audio", value: "audio" },
			{ label: "archive_audio", value: "archive_audio" },
		],
	},
	{
		key: "print",
		type: "switch",
		options: [
			{ label: "Printable", value: 1 },
			{ label: "All", value: 0 },
		],
	},
]}
</script>

{#if include_banner}
<Banner 
	locale={locale}
	translations={translations}
	tabs={[
		{title: translations?.tabs?.bibles ?? 'Bibles', url: 'bibles', count: bibles.length},
		{title: translations?.tabs?.resources ?? 'Resources', url: 'organizations/resources'},
	]}
	background="banner_bibles" />
{/if}

{#if bibles}
<div class="mx-auto py-8">
	{#if browser}
	<Datatable
		classList="relative"
		data={bibles}
		bind:dataRows={rows}
		settings={filters}>
		<thead>
			<th data-name="file_set" data-key="fs" class="hidden">file_set</th>
			<th
				data-name="language"
				data-key="(row) => row.ln + ' ' + row.iso + ' ' + row.id"
				class="sortable">
				{translations?.thead?.language ?? 'Language'}
			</th>
			<th
				data-name="title"
				data-key="(row) => row.tt + ' ' + row.tv"
				class="sortable">
				{translations?.thead?.title ?? 'Title'}
			</th>
			<th
				data-name="country"
				data-key="(row) => row.cn + ' ' + row.ci"
				class="sortable hidden md:table-cell">
				{translations?.thead?.country ?? 'Country'}
			</th>
			<th data-name="country_id" data-key="ci" class="hidden">country_id</th>
			<th data-name="date" data-key="dt" class="sortable hidden md:table-cell">
				{translations?.thead?.date ?? 'Date'}
			</th>
		</thead>
		<tbody>
			{#if rows && $rows}
				{#each $rows as row}
					{@html table_row(row, locale)}
				{/each}
			{/if}
		</tbody>
	</Datatable>
	{/if}
	<noscript>
		<table>
			<thead>
				<th class="hidden">id</th>
				<th class="hidden">file_set</th>
				<th>{translations?.thead?.language ?? 'Language'}</th>
				<th>{translations?.thead?.title ?? 'Title'}</th>
				<th class="hidden md:table-cell">{translations?.thead?.country ?? 'Country'}</th>
				<th class="hidden">country id</th>
				<th class="sortable hidden md:table-cell">{translations?.thead?.date ?? 'Date'}</th>
			</thead>
			<tbody>
				{#each bibles as row}
					{@html table_row(row, locale)}
				{/each}
			</tbody>
		</table>
	</noscript>
</div>
{/if}
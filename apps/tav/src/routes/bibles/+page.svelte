<script>
import { Datatable } from "@dbs/datatables"
import { t } from "$lib/Translations"

/** @type {import('./$types').PageData} */
export let data;
$: ({ bibles } = data);

let rows

const filters = {
	labels: {
		search: $t("bible.bible_cloud_filter"),
		filter: $t("common.Filter"),
		noRows: $t("bible.bible_cloud_filter_no"),
		info: "Showing {start} to {end} of {rows} entries",
		previous: $t("common.Previous"),
		next: $t("common.Next"),
	},
	customFilters: [
		{
			label: "Regions",
			key: "country_id",
			class: "",
			type: "select",
			operation: "regex",
			options: [
				{
					label: $t("common.Africa"),
					value:
						"AO|BF|BI|BJ|BW|CD|CF|CG|CI|CM|CV|DJ|DZ|EG|EH|ER|ET|GA|GH|GM|GN|GQ|GW|KE|KM|LR|LS|LY|MA|MG|ML|MR|MU|MW|MZ|NA|NE|NG|RE|RW|SC|SD|SH|SL|SN|SO|SS|ST|SZ|TD|TG|TN|TZ|UG|YT|ZA|ZM|ZW",
				},
				{
					label: $t("common.Asia"),
					value:
						"AF|AM|AZ|BD|BH|BN|BT|CC|CN|CX|GE|HK|ID|IL|IN|IO|IQ|IR|JO|JP|KG|KH|KP|KR|KW|KZ|LA|LB|LK|MM|MN|MO|MV|MY|NP|OM|PH|PK|PS|QA|SA|SG|SY|TH|TJ|TM|TR|TW|UZ|VN|YE",
				},
				{
					label: $t("common.Europe"),
					value:
						"AD|AL|AT|AX|BA|BE|BG|BY|CH|CY|CZ|DE|DK|EE|ES|FI|FO|FR|GB|GG|GI|GR|HR|HU|IE|IM|IS|IT|JE|LI|LT|LU|LV|MC|MD|ME|MK|MT|NL|NO|PL|PT|RO|RS|RU|SE|SI|SJ|SK|SM|UA|VA|XK",
				},
				{
					label: $t("common.North America"),
					value:
						"AG|AI|AW|BB|BL|BM|BQ|BS|BZ|CA|CR|CU|CW|DM|DO|GD|GL|GP|GT|HN|HT|JM|KN|KY|LC|MF|MQ|MS|MX|NI|PA|PM|PR|SV|SX|TC|TT|US|VC|VG|VI",
				},
				{
					label: $t("common.South America"),
					value: "AR|BO|BR|CL|CO|EC|FK|GF|GY|PE|PY|SR|UY|VE",
				},
				{
					label: $t("common.North America"),
					value:
						"AG|AI|AW|BB|BL|BM|BQ|BS|BZ|CA|CR|CU|CW|DM|DO|GD|GL|GP|GT|HN|HT|JM|KN|KY|LC|MF|MQ|MS|MX|NI|PA|PM|PR|SV|SX|TC|TT|US|VC|VG|VI",
				},
				{
					label: $t("common.Oceania"),
					value:
						"AS|AU|CK|FJ|FM|GU|KI|MH|MP|NC|NF|NR|NU|NZ|PF|PG|PN|PW|SB|TK|TL|TO|TV|UM|VU|WF|WS",
				},
			],
		},
		{
			label: "Types",
			key: "file_set",
			class: "",
			type: "select",
			operation: "regex",
			options: [
				{ label: $t("bible.bible_file_web"), value: "web" },
				{ label: $t("bible.bible_file_pdf"), value: "pdf" },
				{ label: $t("bible.bible_file_epub"), value: "epub" },
				{ label: $t("bible.bible_file_app"), value: "app" },
				//	{ label: $t("bible.bible_file_audio_web"), value: "audio_web" },
				//	{ label: $t("bible.bible_file_archiveaudio"), value: "archive" },
			],
		},
		{
			key: "print",
			type: "switch",
			options: [
				{ label: $t("common.Printable"), value: 1 },
				{ label: $t("common.All"), value: 0 },
			],
		},
	],
}
</script>

<svelte:head>
	<title>{$t("common.Bibles")} | {$t("common.org_title")}</title>
</svelte:head>

<div class="dbs-heading pt-6">
	<div class="title">
		<h2>{$t("common.org_title")}:</h2>
		<h1>{$t("bible.bible_cloud_title")}</h1>
	</div>
	<div class="caption">{$t("bible.bible_cloud_caption")}</div>
</div>

<div class="mx-auto py-2 px-3 md:w-full">
	<Datatable
		classList="relative"
		data="{bibles}"
		bind:dataRows="{rows}"
		settings="{filters}">
		<thead>
			<th data-name="id" data-key="id" class="hidden">id</th>
			<th data-name="file_set" data-key="fs" class="hidden">file_set</th>
			<th
				data-name="language"
				data-key="(row) => row.ln + ' ' + row.iso"
				class="sortable">
				{$t("common.Language")}
			</th>
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
			<th data-name="date" data-key="dt" class="sortable hidden md:table-cell">
				date
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
								class="text-blue-700 hover:underline dark:text-white">
								<div class="max-w-sm overflow-hidden text-ellipsis text-sm">
									{row.tt}
								</div>
								<div
									class="max-w-sm overflow-hidden text-ellipsis text-sm text-stone-600 dark:text-stone-400">
									{row.tv ?? ""}
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

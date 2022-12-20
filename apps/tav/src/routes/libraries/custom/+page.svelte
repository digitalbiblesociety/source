<script>
import { t } from "$lib/Translations"
import { Datatable } from "@dbs/svelte-datatables"

/** @type {import('./$types').PageData} */
export let data;
$: ({ languages } = data);

let library_isos = [
	"ben",
	"mya",
	"khm",
	"tha",
	"prs",
	"pbu",
	"pbt",
	"crn",
	"hch",
	"ncl",
	"npl",
	"ote",
	"azd",
	"ctl",
	"mxv",
	"nlv",
	"sei",
	"arb",
	"eng",
	"swc",
	"spa",
	"urd",
	"nhw",
	"yua",
	"fra",
	"srr",
	"stp",
	"kek",
	"caa",
	"wol",
	"por",
	"fuf",
	"mwk",
	"snk",
	"bam",
	"kao",
	"hin",
	"guj",
	"nep",
	"kan",
	"mal",
	"tam",
	"mar",
	"ori",
	"tel",
	"pes",
	"hop",
	"jpn",
	"vie",
	"ceb",
	"tgl",
	"pid",
	"acm",
	"bod",
	"cmn",
	"dzo",
	"kmr",
	"som",
	"ctd",
	"cnh",
	"cfm",
	"mwq",
	"apd",
	"kng",
	"kin",
	"lao",
	"kyu",
	"amh",
	"tir",
	"hus",
	"dgo",
	"kfx",
	"xnr",
	"pan",
	"asm",
	"acu",
	"amu",
	"arh",
	"arz",
	"auc",
	"awa",
	"ayp",
	"azb",
	"aze",
	"azg",
	"azj",
	"azz",
	"bcc",
	"bft",
	"bfz",
	"bgc",
	"bgn",
	"bgp",
	"bgs",
	"bhd",
	"bik",
	"bqi",
	"brh",
	"cac",
	"cbi",
	"cco",
	"cdh",
	"chd",
	"chf",
	"chq",
	"chz",
	"ckb",
	"cld",
	"cle",
	"cnl",
	"cnt",
	"cof",
	"con",
	"cpa",
	"cso",
	"cta",
	"ctp",
	"ctu",
	"cuc",
	"cut",
	"cux",
	"cya",
	"daw",
	"deu",
	"div",
	"dsh",
	"ell",
	"eng",
	"ewe",
	"gax",
	"gaz",
	"gbk",
	"glk",
	"hac",
	"haz",
	"huv",
	"hye",
	"ind",
	"jac",
	"jiv",
	"kac",
	"kat",
	"kfs",
	"khk",
	"kjb",
	"knj",
	"kno",
	"kog",
	"kor",
	"kri",
	"ksw",
	"lac",
	"lia",
	"lrc",
	"maa",
	"maj",
	"mam",
	"maq",
	"mau",
	"maz",
	"mbp",
	"mco",
	"men",
	"mib",
	"mie",
	"mig",
	"mih",
	"mil",
	"mio",
	"mir",
	"mit",
	"miz",
	"mjc",
	"mjl",
	"mks",
	"mpm",
	"mto",
	"mvf",
	"mxb",
	"mxp",
	"mxq",
	"mxt",
	"nch",
	"ncj",
	"nep",
	"ngu",
	"nhe",
	"nhg",
	"nhi",
	"nhy",
	"ntp",
	"nya",
	"nyj",
	"ood",
	"otm",
	"otn",
	"otq",
	"ots",
	"pia",
	"pia",
	"pls",
	"pnb",
	"poe",
	"poi",
	"qug",
	"qvz",
	"qxr",
	"rel",
	"ron",
	"sey",
	"sgd",
	"shn",
	"sin",
	"sqi",
	"sus",
	"swh",
	"tac",
	"tar",
	"tee",
	"tem",
	"tku",
	"toc",
	"toj",
	"too",
	"top",
	"tos",
	"tpt",
	"trc",
	"tsz",
	"ttc",
	"tuv",
	"tzh",
	"tzo",
	"uzs",
	"vmy",
	"xtd",
	"xtm",
	"yao",
	"yaq",
	"yor",
	"zaa",
	"zab",
	"zac",
	"zad",
	"zai",
	"zam",
	"zao",
	"zar",
	"zas",
	"zat",
	"zav",
	"zaw",
	"zca",
	"zos",
	"zpc",
	"zpi",
	"zpl",
	"zpm",
	"zpo",
	"zpq",
	"zpu",
	"zpv",
	"zpz",
	"zsm",
	"zsr",
	"ztq",
	"zty",
	"bos",
]

let scoped_languages = languages.filter((lang) =>
	library_isos.includes(lang.id)
)

let rows
</script>

<div class="relative">
	<h1
		class="flex items-center justify-center pt-12 text-4xl font-extrabold leading-8 tracking-wider opacity-100 sm:text-4xl">
		Custom Libraries
	</h1>
	<p class="text-center">
		These Bible Libraries are provided by The Digital Bible Society.
	</p>
</div>

<Datatable
	classList="relative max-w-6xl mx-auto"
	data="{scoped_languages}"
	bind:dataRows="{rows}">
	<thead class="bg-stone-50 text-stone-600">
		<th data-key="(row) => row.tt + ' ' + row.iso" class="sortable">
			{$t("common.Title")}
		</th>
		<th data-key="id" class="sortable hidden sm:table-cell">iso</th>
		<th data-key="po" class="sortable">{$t("common.Population")}</th>
		<th data-key="ci" class="sortable">{$t("common.Country")}</th>
	</thead>
	<tbody>
		{#if $rows}
			{#each $rows as row, i}
				<tr>
					<td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
						<a href="/languages/{row.id}">
							<div class="text-sm text-stone-900 dark:text-stone-300">
								{row.tt}
							</div>
							<div class="text-xs text-stone-500">{row.tv}</div>
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
							<span class="text-sm text-stone-900 dark:text-stone-300">
								{row.cn}
							</span>
						</a>
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</Datatable>

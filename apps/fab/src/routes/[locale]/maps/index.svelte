<script>
import { t } from "$lib/i18n"
import Banner from "$lib/Banner.svelte"
import MapBlock from "$lib/MapBlock.svelte"

let maps = [
	{
		type: "language-families",
		size: ".5 MB",
		continent: "world",
		filename: "world-language-families-huffman",
	},
	{
		type: "language-families",
		size: ".25 MB",
		continent: "world",
		filename: "world-language-families",
	},
	{
		type: "language-families",
		size: "1.7 MB",
		continent: "world",
		filename: "world-of-languages",
	},
	{
		type: "language-families",
		size: ".5 MB",
		continent: "africa",
		filename: "africa-horn-languages-families-huffman",
	},
	{
		type: "language-families",
		size: "1.6 MB",
		continent: "africa",
		filename: "africa-language-families",
	},
	{
		type: "language-families",
		size: ".5 MB",
		continent: "africa",
		filename: "african-languages-huffman",
	},
	{
		type: "language-families",
		size: ".42 MB",
		continent: "africa",
		filename: "north-africa-afroasiatic-languages",
	},
	{
		type: "language-families",
		size: ".5 MB",
		continent: "europe",
		filename: "europe-asia-language-families-huffman",
	},
	{
		type: "language-families",
		size: "1.3 MB",
		continent: "europe",
		filename: "europe-languages",
	},
	{
		type: "language-families",
		size: ".5 MB",
		continent: "europe",
		filename: "indoeuropean-language-families-huffman",
	},
	{
		type: "language-families",
		size: "4 MB",
		continent: "oceania",
		filename: "australian-indigenous-languages",
	},
	{
		type: "language-families",
		size: "1.8 MB",
		continent: "america",
		filename: "central-america-language-families",
	},
	{
		type: "language-families",
		size: ".84 MB",
		continent: "asia",
		filename: "central-asia-language-map",
	},
	{
		type: "language-families",
		size: "3.2 MB",
		continent: "asia",
		filename: "middle-east-language-map",
	},
	{
		type: "language-families",
		size: "1.2 MB",
		continent: "america",
		filename: "north-american-language-families",
	},
	{
		type: "language-families",
		size: ".5 MB",
		continent: "asia",
		filename: "southeast-asia-language-families",
	},
]
</script>

<Banner
	background="https://images.bible.cloud/fab/banners/languages_list.jpg"
	translations="{{
		title: 'Language Maps',
		subtitle: 'Language Families by Continent',
		breadcrumbs: [
			{ title: $t('Languages'), url: '/languages' },
			{ title: $t('Maps'), url: '#' },
		],
	}}" />

<div class="container mx-auto -mt-8 max-w-4xl px-4">
	<MapBlock maps="{maps}" />
</div>

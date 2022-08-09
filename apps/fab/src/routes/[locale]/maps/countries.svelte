<script>
import { t, locale } from "$lib/i18n"
import Banner from "$lib/Banner.svelte"
import MapBlock from "$lib/MapBlock.svelte"

let maps = [
	{ type: "world", filename: "world-gov" },
	{ type: "world", filename: "world-land" },
	{ type: "world", filename: "world-oceans" },
	{ type: "world", filename: "africa-gov" },
	{ type: "world", filename: "africa-land" },
	{ type: "world", filename: "middle-east-gov" },
	{ type: "world", filename: "middle-east-land" },
	{ type: "world", filename: "europe-gov" },
	{ type: "world", filename: "europe-land" },
	{ type: "world", filename: "asia-gov" },
	{ type: "world", filename: "asia-land" },
	{ type: "world", filename: "southeast-asia-gov" },
	{ type: "world", filename: "southeast-asia-land" },
	{ type: "world", filename: "north-america-gov" },
	{ type: "world", filename: "north-america-land" },
	{ type: "world", filename: "central-america-gov" },
	{ type: "world", filename: "central-america-land" },
	{ type: "world", filename: "south-america-gov" },
	{ type: "world", filename: "south-america-land" },
	{ type: "world", filename: "oceania-gov" },
	{ type: "world", filename: "oceania-land" },
	{ type: "world", filename: "world-gov" },
	{ type: "world", filename: "world-land" },
	{ type: "world", filename: "world-oceans" },
	{ type: "world", filename: "world-time-zones" },
	{ type: "world", filename: "africa-gov" },
	{ type: "world", filename: "africa-land" },
	{ type: "world", filename: "middle-east-gov" },
	{ type: "world", filename: "middle-east-land" },
	{ type: "world", filename: "europe-gov" },
	{ type: "world", filename: "europe-land" },
	{ type: "world", filename: "asia-gov" },
	{ type: "world", filename: "asia-land" },
	{ type: "world", filename: "southeast-asia-gov" },
	{ type: "world", filename: "southeast-asia-land" },
	{ type: "world", filename: "north-america-gov" },
	{ type: "world", filename: "north-america-land" },
	{ type: "world", filename: "central-america-gov" },
	{ type: "world", filename: "central-america-land" },
	{ type: "world", filename: "south-america-gov" },
	{ type: "world", filename: "south-america-land" },
	{ type: "world", filename: "oceania-gov" },
	{ type: "world", filename: "oceania-land" },
]
</script>

<Banner
	background="https://images.bible.cloud/fab/banners/languages_list.jpg"
	translations="{{
		title: 'Language Maps',
		subtitle: 'Language Families by Continent',
		breadcrumbs: [
			{ title: $t('Countries'), url: '/languages' },
			{ title: $t('Global Maps'), url: '#' },
		],
	}}" />

<div class="container mx-auto -mt-8 max-w-4xl px-4">
	<MapBlock maps="{maps}" base_path="https://images.bible.cloud/maps/" />
</div>

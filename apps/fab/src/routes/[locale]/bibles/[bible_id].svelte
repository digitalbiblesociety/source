<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ params, fetch }) {
	return FallbackFetch(fetch, "bible", `bibles/${params.bible_id}`)
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { BibleShow } from "svelte-bible-wiki"

export let bible
</script>

<BibleShow
	locale="{$locale}"
	bible="{bible}"
	translations="{{
		link_sections: {
			print: {
				title: $t('link_section_print_title'),
				description: $t('link_section_print_description'),
			},
			audio: {
				title: $t('link_section_audio_title'),
				description: $t('link_section_audio_description'),
			},
			audio_web: {
				title: $t('link_section_audio_title'),
				description: $t('link_section_audio_description'),
			},
			pdf: {
				title: 'PDF',
				description: $t('link_section_pdf_description'),
			},
			historic: {
				title: $t('link_section_historic_title'),
				description: $t('link_section_historic_description'),
			},
			archive: {
				title: $t('link_section_archive_title'),
				description: $t('link_section_archive_description'),
			},
			web: {
				title: $t('link_section_web_title'),
				description: $t('link_section_web_description'),
			},
			audio: {
				title: $t('link_section_audio_title'),
				description: $t('link_section_audio_description'),
			},
			app: {
				title: 'Apps',
				description: $t('link_section_app_description'),
			},
			cat: {
				title: $t('link_section_cat_title'),
				description: $t('link_section_cat_description'),
			},
			video_web: {
				title: $t('link_section_video_web_title'),
				description: $t('link_section_video_web_description'),
			},
		},
	}}" />

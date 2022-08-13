<script context="module">
	// See https://kit.svelte.dev/docs#loading
	export async function load({fetch}) {

		const iso_excluded = import.meta.env.VITE_ISO_EXCLUDED.split(',');
		const iso_included = import.meta.env.VITE_ISO_INCLUDED;
		const current_country = import.meta.env.VITE_COUNTRY_SITE;

		const baseUrl = import.meta.env.VITE_BASE_API
		const response = await fetch(`${baseUrl}/countries/${current_country}.json`);
		let country = await response.json();

		const bible_request = await fetch(`${baseUrl}/bibles_dbs.json`);
		let bibles = await bible_request.json();
		bibles = bibles.map((bible) => bible.iso);
		let languages = [];

		country.languages.forEach((language) => {
			if (bibles.includes(language.iso)) {
				let lang = {
					'tt': language.name,
					'tv': language.autonym,
					'id': language.iso,
					'po': language.population,
					'ci': language.country_id,
					'cn': country.name,
					'bc': bibles.filter((iso) => iso == language.iso).length,
					'rc': '',
					'fc': '',
				}
				if (iso_included) {
					if (iso_included.split(',').includes(language.iso)) {
						languages.push(lang);
					}
				} else {
					if (!iso_excluded.includes(language.iso)) {
						languages.push(lang);
					}
				}
			}
		});

		console.log(languages)

		return {
			props: {
				languages: languages,
			},
		}
	}
</script>
<script>
	import { LanguageList } from '@dbs/svelte-bible-wiki'

	export let languages;
</script>

<LanguageList 
	languages={languages} 
	include_banner={false} />

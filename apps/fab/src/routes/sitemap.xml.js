import { locale } from "$lib/i18n"
import pages from "../../static/data/site_index.json"

export async function get() {
	const countries = pages.countries
	const languages = pages.languages
	const bibles = pages.bibles

	return {
		headers: { "Content-Type": "application/xml" },
		body: `
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns:xhtml="https://www.w3.org/1999/xhtml">

		<xhtml:link rel="alternate" hreflang="en" href="http://www.find.bible/en/" />
		<xhtml:link rel="alternate" hreflang="en" href="http://www.find.bible/zh/" />

		<xhtml:link rel="alternate" hreflang="en" href="http://www.find.bible/en/countries" />
		${countries
			.map(
				(country) =>
					`<url rel="alternate" hreflang="en" href="https://find.bible/en/country/${country.id}"></url>`
			)
			.join("")}
		<xhtml:link rel="alternate" hreflang="en" href="http://www.find.bible/en/languages" />
		${languages
			.map(
				(language) =>
					`<url rel="alternate" hreflang="en" href="https://find.bible/en/country/${language.id}"></url>`
			)
			.join("")}
		<xhtml:link rel="alternate" hreflang="en" href="http://www.find.bible/en/bibles" />
		${bibles
			.map(
				(bible) =>
					`<url rel="alternate" hreflang="en" href="https://find.bible/en/bibles/${bible.id}"></url>`
			)
			.join("")}
		
		<xhtml:link rel="alternate" hreflang="zh" href="http://www.find.bible/zh/countries" />
		${countries
			.map(
				(country) =>
					`<url rel="alternate" hreflang="zh" href="https://find.bible/zh/country/${country.id}"></url>`
			)
			.join("")}
		<xhtml:link rel="alternate" hreflang="zh" href="http://www.find.bible/zh/languages" />
		${languages
			.map(
				(language) =>
					`<url rel="alternate" hreflang="zh" href="https://find.bible/zh/country/${language.id}"></url>`
			)
			.join("")}
		<xhtml:link rel="alternate" hreflang="zh" href="http://www.find.bible/zh/bibles" />
		${bibles
			.map(
				(bible) =>
					`<url rel="alternate" hreflang="zh" href="https://find.bible/zh/bibles/${bible.id}"></url>`
			)
			.join("")}

		</urlset>`.trim(),
	}
}

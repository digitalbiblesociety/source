import i18n from "sveltekit-i18n"

const iso_codes = ["en", "es"]
const translations = ["common"]
const scoped = {}

let config = {loaders:[]}
iso_codes.forEach((locale) => {
	translations.forEach((key) => {
		let loader = {
			locale: locale,
			key: key,
			loader: async () => (await import(`./${locale}/${key}.json`)).default,
		}
		if (Object.keys(scoped).includes(key)) {
			loader.routes = scoped[key]
		}
		config.loaders.push(loader)
	})
})


export const { t, locale, locales, loading, loadTranslations } = new i18n(config)

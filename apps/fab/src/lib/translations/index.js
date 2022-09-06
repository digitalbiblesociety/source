import i18n from "sveltekit-i18n"

const languageCodes = ["en", "es"]
const translationKeys = ["common"]
const scoped = {}

//languageCodes.forEach((locale) => {
//	translationKeys.forEach((key) => {
//		const translations = await import(`./${locale}/${key}.json`)
//		let loader = {
//			locale: locale,
//			key: key,
//			loader: async () => (translations).default,
//		}
//		if (Object.keys(scoped).includes(key)) {
//			loader.routes = scoped[key]
//		}
//		
//		config.loaders.push(loader)
//	})
//})

const config = ({
	loaders: [
	  {
		locale: 'en',
		key: 'common',
		loader: async () => (await import('./en/common.json')).default,
	  },
	{
		locale: 'es',
		key: 'common',
		loader: async () => (await import('./es/common.json')).default,
	  },
	],
  });

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)

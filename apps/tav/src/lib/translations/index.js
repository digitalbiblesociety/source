import i18n from "sveltekit-i18n"

const iso_codes = ["en", "es"]
const translations = ["common","about","libraries","store","bible"]
const scoped = {
	bible: [
		'/bibles',
		'/bibles/audio',
		'/bibles/equivalents'
	],
	store: [
		'/store',
		'/bibles/audio'
	],
	about: [
		"/about",
		"/about/overview",
		"/about/work",
		"/about/projects",
		"/about/donate",
		"/about/community",
		"/about/contact",
	],
	libraries: [
		"/libraries",
		"/libraries/treasures",
		"/libraries/bible",
		"/libraries/faqs",
		"about/work/libraries",
	],
}

//let config = {loaders:[]}
//iso_codes.forEach((locale) => {
//	translations.forEach((key) => {
//		let loader = {
//			locale: locale,
//			key: key,
//			loader: async () => (await import(`./${locale}/${key}.json`)).default,
//		}
//		if (Object.keys(scoped).includes(key)) {
//			loader.routes = scoped[key]
//		}
//		config.loaders.push(loader)
//	})
//})

const config = ({
	loaders: [
	  {
		locale: 'en',
		key: 'common',
		loader: async () => (
		  await import('./en/common.json')
		).default,
	  },
	  {
		locale: 'en',
		key: 'store',
		loader: async () => (
		  await import('./en/store.json')
		).default,
	  },
	  	  {
		locale: 'es',
		key: 'common',
		loader: async () => (
		  await import('./es/common.json')
		).default,
	  },
	  {
		locale: 'es',
		key: 'store',
		loader: async () => (
		  await import('./es/store.json')
		).default,
	  },
	  	  {
		locale: 'es',
		key: 'about',
		loader: async () => (
		  await import('./es/about.json')
		).default,
	  },
	  	  {
		locale: 'es',
		key: 'libraries',
		loader: async () => (
		  await import('./es/libraries.json')
		).default,
	  },

	  {
		locale: 'en',
		key: 'common',
		loader: async () => (
		  await import('./en/common.json')
		).default,
	  },
	  	  {
		locale: 'en',
		key: 'about',
		loader: async () => (
		  await import('./en/about.json')
		).default,
	  },
	  	  {
		locale: 'en',
		key: 'libraries',
		loader: async () => (
		  await import('./en/libraries.json')
		).default,
	  },
		{
			locale: 'en',
			key: 'bible',
			loader: async () => (
				await import('./en/bible.json')
			).default,
		},
		{
			locale: 'es',
			key: 'bible',
			loader: async () => (
				await import('./es/bible.json')
			).default,
		},

	  

	],
  });


export const { t, locale, locales, loading, loadTranslations } = new i18n(config)

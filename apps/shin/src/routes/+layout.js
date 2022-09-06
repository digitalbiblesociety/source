import { t, locale, locales, loadTranslations } from "$lib/translations/index.js"

export const csr = false;
export const prerender = true;

export const load = async ({ url }) => {
	const { pathname } = url
	const defaultLocale = "en" // get from cookie / user session etc...
	const initLocale = locale.get() || defaultLocale
	await loadTranslations(initLocale, pathname) // keep this just before the `return`
	return {}
}

import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import { writable } from "svelte/store";

export const locale = writable("en");
export const locales = ["en", "es"]

locales.forEach((locale) => {
	register(locale, () => import(`./translations/${locale}.json`));
})

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator(),
});

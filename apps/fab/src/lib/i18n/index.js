import { writable, derived } from "svelte/store"

import translations from "../../generated/translations"

/** The locale in which your source is written in. */
export const sourceLocale = "en"

/** The app's current locale. */
export const locale = writable("en")

/**
 * Translation store.
 *
 * @example
 * ```svelte
 * <p>{$t("Hello World")}</p>
 * <p>{$t("stringWithInterpolation", {n: 10})}
 * <p>{$t("stringWithMultipleInterpolations", {count: 0, gender: "female"})}
 * ```
 */
export const t = derived(locale, ($locale) => {
	let targetTranslations

	if ($locale === sourceLocale) {
		if (!Object.prototype.hasOwnProperty.call(translations, $locale))
			return function (p) {
				return p
			} // identity function
		targetTranslations = translations[$locale]
	}

	if (!Object.prototype.hasOwnProperty.call(translations, $locale)) {
		console.error(
			`Trying to get info from locale "${$locale}", which doesn't exist.\n Falling back to source locale("${sourceLocale}")`
		)
		targetTranslations = translations[sourceLocale]
	} else {
		targetTranslations = translations[$locale]
	}

	return function translate(translation, obj) {
		if (
			!Object.prototype.hasOwnProperty.call(targetTranslations, translation)
		) {
			if ($locale === sourceLocale) return translation
			if (Object.hasOwnProperty.call(translations, sourceLocale)) {
				if (targetTranslations === translations[sourceLocale])
					return translation
				console.error(
					`Key "${translation}" not present in locale "${$locale}", falling back to source locale ("${sourceLocale}")`
				)
				targetTranslations = translations[sourceLocale]
				return translate(translation, obj)
			}
			return translation
		}
		return targetTranslations[translation](obj)
	}
})

import i18n from 'sveltekit-i18n';

const iso_codes = ["en", "es"]
const translations = ["common","about","libraries","store","bible"]

const files = import.meta.glob('./*/*.json')
iso_codes.forEach((locale) => {
	translations.forEach((key) => {
		register('en', () => files[`./Translations/${locale}/${key}.json`]);
	})
})

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator(),
});


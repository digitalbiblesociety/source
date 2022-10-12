import i18n from 'sveltekit-i18n';

const config = ({
	fallbackLocale: 'en',
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (await import('./en/common.json')).default,
    },
    {
      locale: 'en',
      key: 'about',
      loader: async () => (await import('./en/about.json')).default,
    },
    {
      locale: 'en',
      key: 'bible',
      loader: async () => (await import('./en/bible.json')).default,
    },
    {
      locale: 'en',
      key: 'libraries',
      loader: async () => (await import('./en/libraries.json')).default,
    },
    {
      locale: 'en',
      key: 'store',
      loader: async () => (await import('./en/store.json')).default,
    },
    {
      locale: 'es',
      key: 'common',
      loader: async () => (await import('./es/common.json')).default,
    },
    {
      locale: 'es',
      key: 'about',
      loader: async () => (await import('./es/about.json')).default,
    },
    {
      locale: 'es',
      key: 'bible',
      loader: async () => (await import('./es/bible.json')).default,
    },
    {
      locale: 'es',
      key: 'libraries',
      loader: async () => (await import('./es/libraries.json')).default,
    },
    {
      locale: 'es',
      key: 'store',
      loader: async () => (await import('./es/store.json')).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
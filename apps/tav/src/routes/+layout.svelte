<script>
  import { browser } from '$app/environment'
  import { loadTranslations, locale } from '$lib/translations/index.js'
  import {currentLocale} from '$lib/store.js'
  import Header from '$lib/components/Navigation/Header.svelte'; 
  import Footer from '$lib/components/Navigation/Footer.svelte'; 
  import '../style.css'
  
export const load = async ({ url }) => {
	const { pathname } = url;
	let defaultLocale = 'en';
	if (browser && currentLocale.get()) {
		defaultLocale = currentLocale.get();
	}
	const initLocale = locale.get() || defaultLocale;
	await loadTranslations(initLocale, pathname);
	return {};
}
</script>

<Header />

<main class="-mt-32">
	<div class="bg-stone-50 dark:bg-stone-800 max-w-7xl mx-auto xl:rounded-lg shadow lg:relative">
		<slot />
	</div>
</main>

<Footer />
<script>
	import Footer from "$lib/components/Footer.svelte"
	import Header from "$lib/components/Header.svelte"
	import '../app.postcss';

	import '$lib/i18n.js';
</script>

<div class="">
	<Header />

	<main class="-mt-32 text-gray-800 dark:text-gray-200">
		<div
			class="mx-auto max-w-7xl border border-t-0 border-b-0 border-gray-300 bg-white pt-2 px-2 lg:px-1 pb-8
				dark:rounded-b-none dark:border-gray-500 dark:bg-gray-700 xl:rounded-t-lg">
			<slot />
		</div>
	</main>
	<Footer />
</div>

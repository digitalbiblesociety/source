<script>
	import Breadcrumbs from "./Breadcrumbs.svelte";

	export let background
	export let translations
	export let locale
	export let tabs
</script>
<div class="relative overflow-hidden xl:rounded-tl-xl xl:rounded-tr-xl text-center h-44">
	<div class="relative flex flex-col h-full text-white z-30">
		<Breadcrumbs breadcrumbs={translations?.breadcrumbs} locale={locale} />
		<div class="flex flex-col flex-grow justify-center items-center">
			<h1 class="text-4xl font-extrabold leading-8 tracking-wider sm:text-2xl">{translations?.title ?? ''}</h1>
			<h2 class="text-xl">{translations?.subtitle ?? ''}</h2>
		</div>

		{#if tabs}
			<nav class="flex flex-row justify-center divide-x divide-gray-200 rounded-tl-lg rounded-tr-lg w-1/2 lg:w-1/3 mx-auto">
				{#each tabs as tab,i}
				<a href={`/${locale}/${tab.url}`} 
				class:rounded-tl-lg={i == 0}
				class:rounded-tr-lg={i == (tabs.length - 1)}
				class="flex flex-grow justify-center bg-gray-50 bg-opacity-50 text-gray-800 border-transparent hover:border-emerald-600 hover:bg-emerald-600 hover:text-gray-200 whitespace-nowrap py-2 border-b-2 text-sm">
					{tab.title}
					{#if tab.count}
						<span class="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs md:inline-block">{tab.count}</span>
					{/if}
				  </a>
				{/each}
			</nav>
		{/if}
		<slot name="tabs"></slot>
	</div>

	<picture>
		<!-- <source srcset="{background}.webp" type="image/webp"> -->
		<source srcset="/img/{background}.jpg" type="image/jpeg">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img class="object-cover h-full w-full inset-0 absolute z-10" src="/img/{background}.jpg" role="presentation" />
	</picture>

	<div class="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-r from-primary-500 via-primary-800 to-secondary-500 opacity-80 z-20"></div>
</div>
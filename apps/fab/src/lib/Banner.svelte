<script>
import Breadcrumbs from "./Breadcrumbs.svelte"

export let background
export let translations
export let locale
export let tabs
</script>

<div
	class="relative z-0 h-44 overflow-hidden bg-cover bg-no-repeat text-center xl:rounded-tl-xl xl:rounded-tr-xl"
	style="background-image:url('{background}')">
	<div class="relative z-10 flex h-full flex-col text-white">
		<Breadcrumbs breadcrumbs="{translations.breadcrumbs}" locale="{locale}" />
		{#if translations.modal}
			<div></div>
		{/if}
		<div class="flex flex-grow flex-col items-center justify-center">
			<h1 class="text-4xl font-extrabold leading-8 tracking-wider sm:text-2xl">
				{translations.title}
			</h1>
			<h2 class="text-xl">{translations.subtitle}</h2>
		</div>

		{#if tabs}
			<nav
				class="mx-auto flex w-1/2 flex-row justify-center divide-x divide-gray-200 rounded-tl-lg rounded-tr-lg lg:w-1/3">
				{#each tabs as tab, i}
					<a
						href="{`/${locale}/${tab.url}`}"
						class:rounded-tl-lg="{i == 0}"
						class:rounded-tr-lg="{i == tabs.length - 1}"
						class="flex flex-grow justify-center whitespace-nowrap border-b-2 border-transparent bg-gray-50 bg-opacity-50 py-2 text-sm text-gray-800 hover:border-emerald-600 hover:bg-emerald-600 hover:text-gray-200">
						{tab.title}
						{#if tab.count}
							<span
								class="ml-3 hidden rounded-full bg-gray-100 py-0.5 px-2.5 text-xs text-gray-900 md:inline-block">
								{tab.count}
							</span>
						{/if}
					</a>
				{/each}
			</nav>
		{/if}
		<slot name="tabs" />
	</div>

	<div
		class="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gradient-to-r from-primary-500 via-primary-800 to-secondary-500 opacity-80">
	</div>
</div>

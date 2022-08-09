<script>
import { page } from "$app/stores"
import { t, locale } from "$lib/i18n"

const pages = [
	{ title: "About", url: "about" },
	{ title: "FAQ", url: "about/faq" },
	{ title: "Help", url: "about/help" },
	{ title: "Suggestions", url: "about/suggestions" },
	{ title: "Contact", url: "about/contact" },
]
</script>

<div class="grid grid-cols-4">
	<nav
		class="h-full space-y-1 rounded-l-xl bg-gray-200 px-4 pt-12"
		aria-label="Sidebar">
		{#each pages as about_page}
			<a
				href="{`/${$locale}/${about_page.url}`}"
				class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
				class:bg-gray-300="{$page.url.pathname ===
					`/${$locale}/${about_page.url}`}">
				<span class="truncate">{about_page.title}</span>
			</a>
		{/each}
	</nav>
	<section class="prose col-span-3 mx-auto">
		<slot />
	</section>
</div>

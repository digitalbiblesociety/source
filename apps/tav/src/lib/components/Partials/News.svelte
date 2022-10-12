<script>
import { t } from "$lib/Translations"

import { onMount } from "svelte"
import ChevronDown from "~icons/heroicons-outline/chevron-down"
import Newspaper from "~icons/heroicons-outline/newspaper"

let articles = undefined

onMount(async () => {
	const wp_url = import.meta.env.VITE_WORDPRESS_URL
	let response = await fetch(`${wp_url}posts?per_page=5&_fields=id,title,slug,categories&categories_exclude=5`)
	articles = await response.json()
})
</script>

<div class="relative rounded-xl border dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
	<div class="dark:text-invert absolute top-3 right-4 flex -translate-y-1/2 transform">
		<span class="rounded-lg border border-gray-500 bg-gray-600 p-1.5 dark:bg-gray-800 sm:p-2.5 md:rounded-xl">
			<Newspaper class="inline-block h-4 w-4 text-white sm:h-6 sm:w-6" />
		</span>
	</div>
	{#if articles}
		<div class="mx-auto py-4 px-4 sm:px-6 lg:flex lg:items-center">
			<div class="relative z-20 lg:w-0 lg:flex-1">
				<h2 class="relative z-20 font-semibold uppercase tracking-wider text-blue-600 dark:text-gray-200">
					{$t("common.latest_article")}
				</h2>
				<h2 class="relative z-20 text-3xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-2xl">
					{$t("common.menu.about_news")}
				</h2>
			</div>
		</div>

		<div class="px-12 md:px-24 pb-4 mx-auto">
			<ul>
				{#each articles as article}
					<li class="list-disc">
						<a href="/about/projects/{article.slug}"
						   class="flex justify-left space-x-4">

							<span
								class="inline-flex items-center space-x-1 text-xs sm:text-sm md:text-blue-400">
								<span>{@html article.title.rendered}</span>
								<ChevronDown class="h-4 w-4 text-gray-600 dark:text-gray-300 "/>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

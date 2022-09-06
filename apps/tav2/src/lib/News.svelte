<script>
import { _ as t } from 'svelte-i18n'
import { onMount } from "svelte"

let articles = undefined

onMount(async () => {
	const wp_url = import.meta.env.VITE_WORDPRESS_URL
	let response = await fetch(`${wp_url}posts?per_page=5&_fields=id,title,slug,categories&categories_exclude=5`)
	articles = await response.json()
})
</script>

<div class="relative rounded-xl border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-[url('/img/bg-linen.png')]">
	<div class="dark:text-invert absolute top-3 right-4 flex -translate-y-1/2 transform">
		<span class="rounded-lg border border-gray-500 bg-gray-600 p-1.5 dark:bg-gray-800 sm:p-2.5 md:rounded-xl">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 text-white sm:h-6 sm:w-6">
				<path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z" clip-rule="evenodd" />
				<path d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z" />
			  </svg>
		</span>
	</div>
	{#if articles}
		<div class="mx-auto py-4 px-4 sm:px-6 lg:flex lg:items-center">
			<div class="relative z-20 lg:w-0 lg:flex-1">
				<h2 class="relative z-20 text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-gray-200">
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
								class="inline-flex items-center space-x-1 text-xs sm:text-sm md:text-base font-medium text-blue-400">
								<span>{@html article.title.rendered}</span>

								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-600 dark:text-gray-300">
									<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
								</svg>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

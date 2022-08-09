<script>
import { locale } from "$lib/i18n"

export let breadcrumbs
</script>

{#if breadcrumbs}
	<nav class="flex px-4 pt-2 sm:px-6" aria-label="Breadcrumb">
		<div class="flex sm:hidden">
			<a
				href="{breadcrumbs[breadcrumbs.length - 2].link}"
				class="group inline-flex space-x-3 text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17 8l4 4m0 0l-4 4m4-4H3">
					</path>
				</svg>
				<span>{breadcrumbs[breadcrumbs.length - 2].title}</span>
			</a>
		</div>

		<div class="hidden sm:block">
			<ol class="flex space-x-4">
				<li>
					<div>
						<a href="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
								</path>
							</svg>
							<span class="sr-only">Home</span>
						</a>
					</div>
				</li>

				{#each breadcrumbs as breadcrumb, index}
					<li>
						<div class="flex">
							<svg
								class="h-5 w-5 flex-shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true">
								<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
							</svg>

							{#if index + 1 == breadcrumbs.length}
								<span class="ml-4 text-sm">
									{breadcrumb.title}
								</span>
							{:else}
								<a
									href="{breadcrumb.url}"
									class="ml-4 text-sm cursor-pointer hover:text-gray-300">
									{breadcrumb.title}
								</a>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</nav>
{/if}

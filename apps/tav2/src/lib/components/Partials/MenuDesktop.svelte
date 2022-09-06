<script>
import {
	Menu,
	MenuButton,
	MenuItems,
	MenuItem,
} from "@rgossiaux/svelte-headlessui"

export let pages

let nav_class = `
	inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium 
	text-gray-200 dark:text-gray-300 hover:border-gray-900 hover:text-white dark:hover:text-white
	active:bg-gray-50 active:text-black
`
</script>

<nav
	id="desktop-menu"
	class="mt-1 hidden justify-center pb-0 md:flex md:space-x-8 md:pt-1"
	aria-label="Global">
	{#each pages as p}
		{#if p.nested}
			<Menu>
				<MenuButton class="{nav_class}">
					<span
						class="flex items-center px-2 pt-1 pb-1.5 text-sm md:text-base xl:text-lg">
						{p.title}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 lg:h-5 lg:w-5">
							<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
						</svg>
					</span>
				</MenuButton>
				<MenuItems>
					<div
						class="absolute left-1/2 z-50 mt-2 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 md:max-w-2xl lg:max-w-3xl  ">
						<div
							class="-mt-2 overflow-hidden rounded-xl border border-b-0 border-t-0 drop-shadow-md dark:border-gray-700 dark:drop-shadow-none">
							<div
								class="relative grid gap-6 border  border-t-0 border-gray-200 bg-gray-100 px-2
									   py-2 dark:border-gray-800 dark:bg-gray-700 dark:bg-none
									   sm:gap-3  sm:p-8 md:grid-cols-2">
								{#each p.nested as link}
									<MenuItem>
										<a
											href="{link.href}"
											target="{link.target}"
											class=" flex items-start rounded-lg border border-gray-300 bg-white px-5 py-3 transition duration-150
													ease-in-out dark:border-gray-900 dark:bg-gray-500">
											{#if link.icon}
												<div
													class="{link.class} mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md ">
													<svelte:component this="{link.icon}" />
												</div>
											{/if}
											<div class="ml-4">
												<p
													class="text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white lg:text-base">
													{link.title}
												</p>
												<p
													class="-mt-0.5 text-xs leading-4 text-gray-600 dark:text-gray-200 dark:hover:text-white">
													{link.long}
												</p>
											</div>
										</a>
									</MenuItem>
								{/each}
							</div>
						</div>
					</div>
				</MenuItems>
			</Menu>
		{:else}
			<a href="{p.href}" sveltekit:prefetch class="{nav_class}">
				<span class="text-sm md:text-base xl:text-lg ">{p.title}</span>
			</a>
		{/if}
	{/each}
</nav>

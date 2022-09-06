<script>
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Transition,
} from "@rgossiaux/svelte-headlessui"

import { mobileMenuOpen } from "$lib/store.js"

export let pages
</script>

{#if $mobileMenuOpen}
	<!-- Mobile menu, show/hide based on menu state. -->
	<nav class="md:hidden" aria-label="Global" id="mobile-menu">
		<div
			class="space-y-1 bg-gray-100 px-2 pt-2 pb-3 text-gray-800 dark:bg-slate-900 dark:text-gray-200">
			<!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900"
		  <a href="#" class="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium" aria-current="page">Dashboard</a> -->
			{#each pages as page}
				{#if !page.nested}
					<a
						href="{page.href}"
						on:click="{() => ($mobileMenuOpen = !$mobileMenuOpen)}"
						class="block w-full rounded-md py-2 px-3 text-center text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700">
						{page.title}
					</a>
				{:else}
					<Disclosure>
						<DisclosureButton
							class="flex w-full place-items-center justify-center rounded-md py-2 px-3 text-center text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700">
							{page.title}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
								<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
							</svg>							  
						</DisclosureButton>
						<!-- This example uses Tailwind's transition classes -->
						<Transition
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0">
							<DisclosurePanel
								class="flex flex-col place-items-center justify-center">
								{#each page.nested as link}
									<a
										target="{link.target}"
										href="{link.href}"
										on:click="{() => ($mobileMenuOpen = !$mobileMenuOpen)}"
										class="flex w-full items-center rounded-md py-2 px-3 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700">
										<div class="mx-auto flex w-1/2">
											{#if link.icon}
												<div
													class="{link.class} mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md ">
													<svelte:component this="{link.icon}" />
												</div>
											{/if}
											<div class="ml-4">
												<p
													class="text-sm font-semibold text-gray-700 dark:text-gray-200 dark:hover:text-white">
													{link.title}
												</p>
												<p
													class="-mt-0.5 text-xs leading-4 text-gray-600 dark:text-gray-200 dark:hover:text-white">
													{link.long}
												</p>
											</div>
										</div>
									</a>
								{/each}
							</DisclosurePanel>
						</Transition>
					</Disclosure>
				{/if}
			{/each}
		</div>
	</nav>
{/if}

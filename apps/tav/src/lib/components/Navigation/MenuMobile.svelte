<script>
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Transition,
} from "@rgossiaux/svelte-headlessui"

import { mobileMenuOpen } from "$lib/store.js"
import IconChevronDown from "~icons/heroicons-outline/chevron-down"

export let pages
</script>

{#if $mobileMenuOpen}
	<!-- Mobile menu, show/hide based on menu state. -->
	<nav class="md:hidden" aria-label="Global" id="mobile-menu">
		<div
			class="space-y-1 bg-stone-100 px-2 pt-2 pb-3 text-stone-800 dark:bg-slate-900 dark:text-stone-200">
			<!-- Current: "bg-stone-100 text-stone-900", Default: "text-stone-900 hover:bg-stone-50 hover:text-stone-900"
		  <a href="#" class="bg-stone-100 text-stone-900 block rounded-md py-2 px-3 font-medium" aria-current="page">Dashboard</a> -->
			{#each pages as page}
				{#if !page.nested}
					<a
						href="{page.href}"
						on:click="{() => ($mobileMenuOpen = !$mobileMenuOpen)}"
						class="block w-full rounded-md py-2 px-3 text-center text-stone-900 hover:bg-stone-50 hover:text-stone-900 dark:text-stone-200 dark:hover:bg-stone-700">
						{page.title}
					</a>
				{:else}
					<Disclosure>
						<DisclosureButton
							class="flex w-full place-items-center justify-center rounded-md py-2 px-3 text-center text-stone-900 hover:bg-stone-50 hover:text-stone-900 dark:text-stone-200 dark:hover:bg-stone-700">
							{page.title}
							<IconChevronDown />
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
										class="flex w-full items-center rounded-md py-2 px-3 text-sm text-stone-900 hover:bg-stone-50 hover:text-stone-900 dark:hover:bg-stone-700">
										<div class="mx-auto flex w-1/2">
											{#if link.icon}
												<div
													class="{link.class} mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md ">
													<svelte:component this="{link.icon}" />
												</div>
											{/if}
											<div class="ml-4">
												<p
													class="text-sm font-semibold text-stone-700 dark:text-stone-200 dark:hover:text-white">
													{link.title}
												</p>
												<p
													class="-mt-0.5 text-xs leading-4 text-stone-600 dark:text-stone-200 dark:hover:text-white">
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

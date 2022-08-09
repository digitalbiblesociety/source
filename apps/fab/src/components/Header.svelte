<script>
import { t, locale } from "$lib/i18n"
import Search from "./Search.svelte"
import Menu from "./Menu.svelte"

import I18n from "./i18n.svelte"

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@rgossiaux/svelte-headlessui"

$: pages = [
	{ t: $t("Bibles"), href: `/${$locale}/bibles`, icon: "book-open" },
	{
		t: $t("Languages"),
		type: "language",
		href: `/${$locale}/languages`,
		icon: "annotation",
	},
	{
		t: $t("Countries"),
		type: "country",
		href: `/${$locale}/countries`,
		icon: "world",
	},
	{
		t: $t("Agencies"),
		type: "organizations",
		href: `/${$locale}/organizations`,
		icon: "building",
	},
	{
		t: $t("About"),
		type: "about",
		href: `/${$locale}/about`,
		icon: "users",
	},
]

let open = false
</script>

<nav class="bg-primary-600 pb-32 dark:bg-primary-900">
	<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex items-center px-2 lg:px-0">
				<a
					href="/{$locale}/"
					sveltekit:prefetch
					class="inline-flex shrink-0 items-center">
					<img class="h-10 w-10" src="/img/icon_fab_notitle.svg" alt="Logo" />
					<span class="mx-4 text-white">{$t("Find a Bible")}</span>
				</a>
				<div class="hidden lg:ml-10 lg:block">
					<div class="flex space-x-4">
						{#each pages as p}
							{#if p.nested}
								<Menu>
									<div slot="trigger">
										<div
											class="cursor-pointer rounded-md py-2 text-sm font-medium text-white hover:bg-primary-500 hover:bg-opacity-75">
											{p.t}
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
													d="M19 9l-7 7-7-7">
												</path>
											</svg>
										</div>
									</div>
									<div slot="menu">
										<div
											class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 lg:max-w-3xl">
											<div
												class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
												<div
													class="relative grid gap-6 bg-white px-5 py-6 dark:bg-gray-800 sm:gap-8 sm:p-8 lg:grid-cols-2">
													{#each p.nested as link}
														<a
															href="{link.href}"
															sveltekit:prefetch
															class="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-900">
															<div class="ml-4">
																<p
																	class="text-base font-medium text-gray-900 dark:text-gray-300">
																	{link.t}
																</p>
																<p class="mt-1 text-sm text-gray-500">
																	{$t(`header_${link.type}_description`)}
																</p>
															</div>
														</a>
													{/each}
												</div>
												{#if p.floor}
													<div class="bg-gray-50 p-5 dark:bg-gray-900 sm:p-8">
														<a
															href="{p.floor.href}"
															class="-m-3 flow-root cursor-pointer rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-900">
															<span class="flex items-center">
																<span
																	class="text-base font-medium text-gray-500 dark:text-gray-100">
																	{p.floor.title}
																</span>
																<span
																	class="ml-3 inline-flex items-center rounded-full bg-primary-100 px-3 py-0.5 text-xs leading-5 text-primary-800">
																	{p.floor.tag}
																</span>
															</span>
															<span class="mt-1 block text-sm text-gray-500">
																{p.floor.subtitle}
															</span>
														</a>
													</div>
												{/if}
											</div>
										</div>
									</div>
								</Menu>
							{:else}
								<a
									href="{p.href}"
									class="text-white hover:bg-primary-500 hover:bg-opacity-75 py-2 px-3 text-sm cursor-pointer">
									{p.t}
								</a>
							{/if}
						{/each}
					</div>
				</div>
			</div>
			<div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
				<div class="w-full max-w-lg lg:max-w-xs">
					<Search />
				</div>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					on:click="{() => (open = !open)}"
					class:open
					aria-controls="mobile-menu"
					aria-expanded="{open}"
					class="relative z-50 inline-flex items-center justify-center rounded-md bg-primary-500 p-2 text-primary-200 hover:bg-primary-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600">
					<span class="sr-only">Open main menu</span>
					{#if open}
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
								d="M6 18L18 6M6 6l12 12">
							</path>
						</svg>
					{:else}
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
								d="M4 6h16M4 10h16M4 14h16M4 18h16">
							</path>
						</svg>
					{/if}
				</button>
			</div>
			<div class="hidden pt-2 lg:ml-4 lg:flex">
				<div class="flex items-center">
					<I18n />
				</div>
			</div>
		</div>
	</div>
	<div class="lg:hidden">
		<div class="space-y-1 px-2 pt-2 pb-3">
			<div
				class="absolute top-0 z-40 h-screen w-64 overflow-y-auto bg-gray-700 pt-12"
				style="right: {open
					? '0'
					: '-' + 300 + 'px'}; transition: right 0.4s ease-in-out">
				{#each pages as p}
					{#if !p.nested}
						<a
							class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-primary-500 hover:bg-opacity-75"
							href="{p.href}">
							{p.t}
						</a>
					{:else}
						<Disclosure>
							<DisclosureButton
								class="w-full block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-primary-500 hover:bg-opacity-75 cursor-pointer">
								{p.t}
							</DisclosureButton>
							<DisclosurePanel class="p-4 mt-4">
								{#each p.nested as link}
									<a
										href="{link.href}"
										class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-primary-500 hover:bg-opacity-75">
										{link.t}
									</a>
								{/each}
							</DisclosurePanel>
						</Disclosure>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</nav>

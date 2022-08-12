<script>
	import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@rgossiaux/svelte-headlessui';
	import I18n from '$lib/i18n.svelte';
	import {DarkToggle} from '@dbs/svelte-dbs-ui'
	export let nav;
	export let logo;

	let open = false;
</script>

<div class="relative dark:bg-stone-900">
	<div class="mx-auto max-w-7xl sm:px-6">
		<div
			class="flex items-center justify-between border-b-2 border-stone-100 dark:border-stone-700 py-6 md:justify-start md:space-x-10"
		>
			<!-- Logo -->
			<div class="flex justify-start lg:w-0 lg:flex-1">
				{#if logo}
					<a href="/">
						<span class="sr-only">{logo.alt}</span>
						<img class="h-8 w-auto sm:h-10" src={logo.src} alt={logo.alt} />
					</a>
				{/if}
			</div>

			<!-- Menu Icon -->
			<div class="-my-2 -mr-2 md:hidden">
				<button
					type="button"
					on:click={() => (open = !open)}
					class="inline-flex items-center justify-center rounded-md bg-white p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-expanded="false"
				>
					<span class="sr-only">Open menu</span>
					<!-- Heroicon name: outline/menu -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>

			<!-- Menu -->
			<nav class="hidden space-x-10 md:flex">
				{#each nav as link}
					{#if link.children}
						<div class="relative">
							<Menu>
								<MenuButton
									class="group inline-flex items-center rounded-md bg-white text-stone-500 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									<span>{link.label}</span>
									<svg
										class="ml-2 h-5 w-5 text-stone-400 group-hover:text-stone-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</MenuButton>
								<Transition
									enter="transition duration-100 ease-out"
									enterFrom="transform scale-95 opacity-0"
									enterTo="transform scale-100 opacity-100"
									leave="transition duration-75 ease-out"
									leaveFrom="transform scale-100 opacity-100"
									leaveTo="transform scale-95 opacity-0"
								>
									<MenuItems>
										<div
											class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
										>
											<div
												class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
											>
												<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
													{#each link.children as child}
														<MenuItem>
															<a
																href={child.href}
																class="-m-3 flex items-start rounded-lg p-3 hover:bg-stone-50"
															>
																{#if child.icon}
																	{@html child.icon}
																{/if}
																<div class="ml-4">
																	<p class="text-base font-medium text-stone-900">{child.label}</p>
																	{#if child.description}
																		<p class="mt-1 text-sm text-stone-500">{child.description}</p>
																	{/if}
																</div>
															</a>
														</MenuItem>
													{/each}
												</div>
											</div>
										</div>
									</MenuItems>
								</Transition>
							</Menu>
						</div>
					{:else}
						<a href={link.href} class="text-stone-900 hover:text-black dark:text-stone-200 dark:hover:text-stone-50">
							{ link.label }
						</a>
					{/if}
				{/each}
			</nav>

			<div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
				<DarkToggle />
				{#if nav.aside}
					{#each nav.aside as link}
						<a
							href={link.href}
							class="whitespace-nowrap text-stone-500 hover:text-stone-900"
							>{link.label}</a
						>
					{/each}
				{/if}
				<I18n />
			</div>
		</div>
	</div>

	{#if open}
		<div class="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden">
			<div
				class="divide-y-2 divide-stone-50 rounded-lg bg-white dark:bg-stone-800 shadow-lg ring-1 ring-black ring-opacity-5"
			>
				<div class="px-5 pt-5 pb-6">
					<div class="flex items-center justify-between">
						{#if logo}
							<a href="/">
								<span class="sr-only">{logo.alt}</span>
								<img class="h-8 w-auto sm:h-10" src={logo.src} alt={logo.alt} />
							</a>
						{/if}
						<div class="-mr-2">
							<button
								type="button"
								on:click={() => (open = !open)}
								class="inline-flex items-center justify-center rounded-md p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-500 
									focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<span class="sr-only">Close menu</span>
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="grid gap-y-8">
							{#each nav as link}
								{#if !link.children}
									<a
										href={link.href}
										class="flex flex-col items-center rounded-md p-3 hover:bg-stone-50 text-stone-900 dark:text-stone-200 dark:hover:bg-stone-900"
									>
										{#if link.icon} {@html link.icon} {/if}
										<span class="ml-3"> {link.label} </span>
									</a>
								{:else}
									<Disclosure class="-m-3 flex flex-col items-center rounded-md p-3">
										<DisclosureButton class="ml-3 w-full text-stone-900">
											{link.label}
										</DisclosureButton>
										<DisclosurePanel class="mx-3 w-full space-y-6">
											<div class="mt-4 grid grid-cols-2 gap-y-4 gap-x-8 text-center">
												{#each link.children as child}
													<a class="rounded bg-stone-100 hover:bg-stone-50" href={child.href}>
														{child.label}
													</a>
												{/each}
											</div>
										</DisclosurePanel>
									</Disclosure>
								{/if}
							{/each}
						</nav>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<script>
	import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@rgossiaux/svelte-headlessui';

	export let header
</script>

<div class="bg-gradient-to-r from-primary-400 to-secondary-500 pb-32">
    <nav class="bg-gradient-to-r from-primary-400 to-secondary-500">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div class="relative h-16 flex items-center justify-between">
                <div class="px-2 flex items-center lg:px-0">
					{#if header.title}
						<a href="/" class="flex-shrink-0 text-white text-lg font-bold">{header.title}</a>
					{/if}
					<div class="hidden lg:block lg:ml-10">
					    <div class="flex space-x-4">
							{#each header.nav as link}
							{#if link.children}
								<div class="relative">
									<Menu>
										<MenuButton
											class="group inline-flex items-center rounded-md bg-white text-stone-500 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
								<a href={link.href} class="text-white hover:bg-gray-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">
									{ link.label }
								</a>
							{/if}
						{/each}
					</div>
                    </div>
                </div>
                <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                    <div class="max-w-lg w-full lg:max-w-xs"></div>
                </div>
				<div class="flex lg:hidden">
					<button class="bg-gray-100 p-2 rounded-md inline-flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white" id="headlessui-disclosure-button-2" type="button" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="block h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
					</button>
				</div>
				<div class="hidden lg:block lg:ml-4">
					<div class="flex items-center">
						<div class="ml-3 relative flex-shrink-0">
							<!-- Languages -->
							<button class="rounded-full flex text-sm text-white focus:text-gray-600" id="headlessui-menu-button-1" type="button" aria-haspopup="true" aria-expanded="false">
								<span class="sr-only">Open user menu</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
							</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
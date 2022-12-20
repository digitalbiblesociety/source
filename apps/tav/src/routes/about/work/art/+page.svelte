<script>
export let data;
$: ({ art } = data);
</script>

<!-- Content area -->
<div class="flex flex-1 flex-col">
	<header class="w-full">
		<div
			class="relative z-10 flex h-16 shrink-0 border-b border-stone-200 shadow-sm dark:border-slate-600">
			<button
				type="button"
				class="border-r border-stone-200 px-4 text-stone-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-slate-600 dark:text-stone-400 md:hidden">
				<span class="sr-only">Open sidebar</span>
				<!-- Heroicon name: outline/menu-alt-2 -->
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7">
					</path>
				</svg>
			</button>
			<div class="flex flex-1 justify-between px-4 sm:px-6">
				<div class="flex flex-1">
					<form class="flex w-full md:ml-0" action="#" method="GET">
						<label for="desktop-search-field" class="sr-only">
							Search all files
						</label>
						<label for="mobile-search-field" class="sr-only">
							Search all files
						</label>
						<div
							class="relative w-full text-stone-400 focus-within:text-stone-600">
							<div
								class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
								<!-- Heroicon name: solid/search -->
								<svg
									class="h-5 w-5 shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										clip-rule="evenodd">
									</path>
								</svg>
							</div>
							<input
								name="mobile-search-field"
								id="mobile-search-field"
								class="h-full w-full border-transparent py-2 pl-8 pr-3 text-stone-900 placeholder-stone-500 focus:border-transparent focus:placeholder-stone-400 focus:outline-none focus:ring-0 dark:bg-slate-700 dark:text-stone-200 sm:hidden"
								placeholder="Search"
								type="search" />
							<input
								name="desktop-search-field"
								id="desktop-search-field"
								class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-stone-900 placeholder-stone-500 focus:border-transparent focus:placeholder-stone-400 focus:outline-none focus:ring-0 dark:bg-slate-700 dark:text-stone-200 sm:block"
								placeholder="Search all files"
								type="search" />
						</div>
					</form>
				</div>
			</div>
		</div>

		<!-- Main content -->
		<div class="flex flex-1 items-stretch">
			<main class="flex-1">
				<div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
					<div class="flex">
						<h1
							class="flex-1 text-2xl font-bold text-stone-900 dark:text-stone-200">
							Photos
						</h1>
						<div
							class="ml-6 flex items-center rounded-lg bg-stone-100 p-0.5 sm:hidden">
							<button
								type="button"
								class="rounded-md p-1.5 text-stone-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
								<!-- Heroicon name: solid/view-list -->
								<svg
									class="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clip-rule="evenodd">
									</path>
								</svg>
								<span class="sr-only">Use list view</span>
							</button>
							<button
								type="button"
								class="ml-0.5 rounded-md p-1.5 text-stone-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
								<!-- Heroicon name: solid/view-grid -->
								<svg
									class="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true">
									<path
										d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
									</path>
								</svg>
								<span class="sr-only">Use grid view</span>
							</button>
						</div>
					</div>

					<!-- Tabs -->
					<div class="mt-3 sm:mt-2">
						<div class="sm:hidden">
							<label for="tabs" class="sr-only">Select a tab</label>
							<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
							<select
								id="tabs"
								name="tabs"
								class="block w-full rounded-md border-stone-300 py-2 pl-3 pr-10  focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-900 sm:text-sm">
								<option selected>Recently Viewed</option>
								<option>Recently Added</option>
								<option>Favorited</option>
							</select>
						</div>
						<div class="hidden sm:block">
							<div
								class="flex items-center border-b border-stone-200 dark:border-slate-600">
								<nav
									class="-mb-px flex flex-1 space-x-6 xl:space-x-8"
									aria-label="Tabs">
									<!-- Current: "border-blue-500 text-blue-600", Default: "border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 hover:border-stone-300  dark:border-slate-900" -->
									<span
										aria-current="page"
										class="whitespace-nowrap border-b-2 border-blue-500 py-4 px-1 text-sm text-blue-600">
										Recently Viewed
									</span>

									<span
										class="whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm text-stone-500 hover:border-stone-300 hover:text-stone-700 dark:text-stone-400">
										Recently Added
									</span>

									<span
										class="whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm text-stone-500 hover:border-stone-300 hover:text-stone-700 dark:text-stone-400">
										Favorited
									</span>
								</nav>
								<div
									class="ml-6 hidden items-center rounded-lg bg-stone-100 p-0.5 sm:flex">
									<button
										type="button"
										class="rounded-md p-1.5 text-stone-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
										<!-- Heroicon name: solid/view-list -->
										<svg
											class="h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true">
											<path
												fill-rule="evenodd"
												d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
												clip-rule="evenodd">
											</path>
										</svg>
										<span class="sr-only">Use list view</span>
									</button>
									<button
										type="button"
										class="ml-0.5 rounded-md p-1.5 text-stone-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
										<!-- Heroicon name: solid/view-grid -->
										<svg
											class="h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true">
											<path
												d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
											</path>
										</svg>
										<span class="sr-only">Use grid view</span>
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- Gallery -->
					<section class="mt-8 pb-16" aria-labelledby="gallery-heading">
						<h2 id="gallery-heading" class="sr-only">Recently viewed</h2>
						<ul
							class="relative grid h-screen grid-cols-2 gap-x-4 gap-y-8 overflow-y-scroll sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
							{#each art as artwork}
								<li class="relative">
									<!-- Current: "ring-2 ring-offset-2 ring-blue-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-stone-100 focus-within:ring-blue-500" -->
									<div
										class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-stone-100 ring-2 ring-blue-500 ring-offset-2">
										<!-- Current: "", Default: "group-hover:opacity-75" -->
										<img
											src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
											alt="pointer"
											class="pointer-events-none object-cover" />
										<button
											type="button"
											class="absolute inset-0 focus:outline-none">
											<span class="sr-only">
												View details for IMG_4985.HEIC
											</span>
										</button>
									</div>
									<p
										class="pointer-events-none mt-2 block truncate text-sm text-stone-900 dark:text-stone-200">
										IMG_4985.HEIC
									</p>
									<p
										class="pointer-events-none block text-sm text-stone-500 dark:text-stone-400">
										3.9 MB
									</p>
								</li>
							{/each}

							<!-- More files... -->
						</ul>
					</section>
				</div>
			</main>

			<!-- Details sidebar -->
			<aside
				class="hidden w-96 overflow-y-auto border-l border-stone-200 p-8 dark:border-slate-600 lg:block">
				<div class="space-y-6 pb-16">
					<div>
						<div
							class="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
							<img
								src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
								alt="Cover"
								class="object-cover" />
						</div>
						<div class="mt-4 flex items-start justify-between">
							<div>
								<h2
									class="text-lg text-stone-900 dark:text-stone-200">
									<span class="sr-only">Details for</span>
									IMG_4985.HEIC
								</h2>
								<p class="text-sm text-stone-500 dark:text-stone-400">
									3.9 MB
								</p>
							</div>
							<button
								type="button"
								class="ml-4 flex h-8 w-8 items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-stone-400">
								<!-- Heroicon name: outline/heart -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
									</path>
								</svg>
								<span class="sr-only">Favorite</span>
							</button>
						</div>
					</div>
					<div>
						<h3 class="text-stone-900 dark:text-stone-200">
							Information
						</h3>
						<dl
							class="mt-2 divide-y divide-stone-200 border-t border-b border-stone-200 dark:border-slate-600">
							<div class="flex justify-between py-3 text-sm font-medium">
								<dt class="text-stone-500 dark:text-stone-400">Uploaded by</dt>
								<dd class="text-stone-900 dark:text-stone-200">Marie Culver</dd>
							</div>

							<div class="flex justify-between py-3 text-sm font-medium">
								<dt class="text-stone-500 dark:text-stone-400">Created</dt>
								<dd class="text-stone-900 dark:text-stone-200">June 8, 2020</dd>
							</div>

							<div class="flex justify-between py-3 text-sm font-medium">
								<dt class="text-stone-500 dark:text-stone-400">Last modified</dt>
								<dd class="text-stone-900 dark:text-stone-200">June 8, 2020</dd>
							</div>

							<div class="flex justify-between py-3 text-sm font-medium">
								<dt class="text-stone-500 dark:text-stone-400">Dimensions</dt>
								<dd class="text-stone-900 dark:text-stone-200">4032 x 3024</dd>
							</div>

							<div class="flex justify-between py-3 text-sm font-medium">
								<dt class="text-stone-500 dark:text-stone-400">Resolution</dt>
								<dd class="text-stone-900 dark:text-stone-200">72 x 72</dd>
							</div>
						</dl>
					</div>
					<div>
						<h3 class="text-stone-900 dark:text-stone-200">
							Description
						</h3>
						<div class="mt-2 flex items-center justify-between">
							<p class="text-sm italic text-stone-500 dark:text-stone-400">
								Add a description to this image.
							</p>
							<button
								type="button"
								class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-400 hover:bg-stone-100 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-stone-400">
								<!-- Heroicon name: solid/pencil -->
								<svg
									class="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true">
									<path
										d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
									</path>
								</svg>
								<span class="sr-only">Add description</span>
							</button>
						</div>
					</div>
					<div>
						<h3 class="text-stone-900 dark:text-stone-200">
							Shared with
						</h3>
						<ul
							class="mt-2 divide-y divide-stone-200 border-t border-b border-stone-200 dark:border-slate-600">
							<li class="flex items-center justify-between py-3">
								<div class="flex items-center">
									<img
										src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
										alt="Aimee Douglas"
										class="h-8 w-8 rounded-full" />
									<p
										class="ml-4 text-sm text-stone-900 dark:text-stone-200">
										Aimee Douglas
									</p>
								</div>
								<button
									type="button"
									class="ml-6 rounded-md text-sm text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
									Remove
									<span class="sr-only">Aimee Douglas</span>
								</button>
							</li>

							<li class="flex items-center justify-between py-3">
								<div class="flex items-center">
									<img
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt="Andrea McMillan"
										class="h-8 w-8 rounded-full" />
									<p
										class="ml-4 text-sm text-stone-900 dark:text-stone-200">
										Andrea McMillan
									</p>
								</div>
								<button
									type="button"
									class="ml-6 rounded-md text-sm text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
									Remove
									<span class="sr-only">Andrea McMillan</span>
								</button>
							</li>

							<li class="flex items-center justify-between py-2">
								<button
									type="button"
									class="group -ml-1 flex items-center rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
									<span
										class="flex h-8 w-8 items-center justify-center rounded-full  border-2 border-dashed border-stone-300 text-stone-400 dark:border-slate-900">
										<!-- Heroicon name: solid/plus-sm -->
										<svg
											class="h-5 w-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true">
											<path
												fill-rule="evenodd"
												d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
												clip-rule="evenodd">
											</path>
										</svg>
									</span>
									<span
										class="ml-4 text-sm text-blue-600 group-hover:text-blue-500">
										Share
									</span>
								</button>
							</li>
						</ul>
					</div>
					<div class="flex justify-around">
						<button type="button" class="button w-1/3">Download</button>
						<button type="button" class="button-dark w-1/3">Delete</button>
					</div>
				</div>
			</aside>
		</div>
	</header>
</div>

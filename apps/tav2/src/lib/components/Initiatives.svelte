<script>
import { _ as t } from 'svelte-i18n'

const initiatives = [
	{
		title: "Audio Players to Malawi",
		quantity: 1500,
		id: "179",
		deadline: "July 9th, 2022",
	},
	{
		title: "Print Bibles in Mexico",
		quantity: 100,
		id: "180",
		location: "Chipas, Mexico",
	},
	{
		title: "Tamil SD Cards",
		quantity: 25000,
		id: "183",
		location: "India",
		deadline: "August 10th, 2022",
	},
]

let dbs = {
	hiring: false,
}
</script>

<div
	class="rounded-lg border border-gray-300 bg-gray-200 dark:border-gray-500 dark:bg-primary-500 lg:overflow-hidden lg:pb-14">
	<div class="grid grid-cols-2 gap-4 py-8">
		<div class="flex flex-col place-items-center justify-center pl-8">
			<span
				class="text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-gray-200">
				Scripture distribution
			</span>
			<h2
				class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
				Initiatives
			</h2>
			<p
				class="mt-4 text-base text-gray-500 dark:text-gray-200 sm:text-xl lg:text-lg xl:text-xl">
				We are always looking for a few people to help us with these so if you
				are interested in helping us please consider donating or volunteering.
				We're also always looking for new projects so if you know of a need,
				please contact us.
			</p>
		</div>
		<div class="p-4 text-white ">
			<div class="overflow-hidden bg-slate-100 shadow sm:rounded-md">
				<ul role="list" class="divide-y divide-y-8 divide-gray-200">
					{#each initiatives as initiative}
						<li>
							<a
								href="/about/news/initiative/{initiative.id}"
								class="block hover:bg-gray-50">
								<div class="px-4 py-4 sm:px-6">
									<div class="flex items-center justify-between">
										<p class="truncate text-sm font-medium text-blue-600">
											{initiative.title}
										</p>
										<div class="ml-2 flex flex-shrink-0">
											<p
												class="inline-flex rounded-full bg-slate-800 px-2 text-xs font-semibold leading-5 text-slate-200">
												{initiative.id}
											</p>
										</div>
									</div>
									<div class="mt-2 sm:flex sm:justify-between">
										<div class="sm:flex">
											{#if initiative.quantity}
												<p class="flex items-center text-sm text-gray-500">
													<Icon
														name="quantity"
														type="solid"
														class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
													{initiative.quantity}
												</p>
											{/if}
											{#if initiative.location}
												<p
													class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
													<Icon
														name="marker"
														type="solid"
														class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
													{initiative.location}
												</p>
											{/if}
										</div>

										{#if initiative.deadline}
											<div
												class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
												<Icon
													name="calendar"
													type="solid"
													class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
												<time datetime="2020-01-07">
													{initiative.deadline}
												</time>
											</div>
										{/if}
									</div>
								</div>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

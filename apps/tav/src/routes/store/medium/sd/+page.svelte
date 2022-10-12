<script>
import { t } from "$lib/Translations"
let specs = [
	{ attribute: "Brand", value: "SanDisk" },
	{ attribute: "Flash Memory", value: "SDXC" },
	{ attribute: "Hardware Interface", value: "SDXC" },
	{ attribute: "Speed Class", value: "Class 10" },
	{ attribute: "Memory Storage", value: "Capacity	128 GB" },
]
</script>

<div
	class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
	<div>
		<h1
			class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			SD Card
		</h1>
		<h2 class="text-2xl font-bold tracking-tight text-gray-700 sm:text-4xl">
			Technical Specifications
		</h2>
		<p class="mt-4 text-gray-500">
			While we sometimes will stock different variations of SD cards to maintain
			a steady supply our most commonly distributed card's specs are listed
			here. If you have a question or would like to request a specific card,
			please <a class="text-gray-700 underline" href="/about/contact">
				get in touch with us.
			</a>
		</p>

		<dl
			class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
			{#each specs as spec}
				<div class="border-t border-gray-200 pt-4">
					<dt class="text-gray-900">{spec.attribute}</dt>
					<dd class="mt-2 text-sm text-gray-500">{spec.value}</dd>
				</div>
			{/each}
		</dl>
	</div>
	<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
		<div class="h-24 w-24 rounded-lg border-2 border-gray-100 bg-gray-200">
		</div>
		<div class="h-24 w-24 rounded-lg border-2 border-gray-100 bg-gray-200">
		</div>
		<div class="h-24 w-24 rounded-lg border-2 border-gray-100 bg-gray-200">
		</div>
		<div class="h-24 w-24 rounded-lg border-2 border-gray-100 bg-gray-200">
		</div>
		<div class="h-24 w-24 rounded-lg border-2 border-gray-100 bg-gray-200">
		</div>
		<div class="h-24 w-24 rounded-lg border-2 border-gray-100 bg-gray-200">
		</div>
	</div>
</div>

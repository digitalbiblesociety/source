<script>
let variations = [
	{
		title: "Linen and Gold Foil",
		description: "",
		img: "/img/binding_linen.jpeg",
	},
	{ title: "Hardcover", description: "", img: "/img/binding_casewrap.jpeg" },
	{ title: "Perfect Bound", img: "/img/binding_perfect.jpeg" },
	{ title: "Saddle Stich", img: "/img/binding_saddle.jpeg" },
	{ title: "Binding Coil", img: "/img/binding_coil.jpeg" },
]
</script>

<div class="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
	<div class="max-w-3xl">
		<h2 id="features-heading" class="text-gray-500">
			Variations for Print on Demand
		</h2>
		<p
			class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			Trim & Binding
		</p>
		<p class="mt-4 text-gray-500">...</p>
	</div>

	<div class="flex flex-row flex-wrap">
		{#each variations as variation}
			<div
				class="xs:w-1/2 flex flex-col-reverse justify-between sm:w-1/3 md:w-1/5">
				<div class="mt-6">
					<h3 class="text-sm text-gray-900">{variation.title}</h3>
					<p class="mt-2 text-sm text-gray-500">{variation.description}</p>
				</div>
				<div
					class="aspect-w-1 aspect-h-1 mx-2 overflow-hidden rounded-lg bg-gray-100">
					<img src="{variation.img}" class="object-cover object-center" />
				</div>
			</div>
		{/each}
	</div>
</div>

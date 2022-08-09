<script>
	import MenuSubnav from "./Partials/MenuSubnav.svelte";
	import Breadcrumbs from "$lib/Breadcrumbs.svelte";

	export let title
	export let subtitle
	export let caption
	export let subnav
	export let breadcrumbs
</script>

<div class="border-gray-300 dark:border-gray-700 xl:rounded-t-lg">
	{#if breadcrumbs}
		<Breadcrumbs breadcrumbs={breadcrumbs} />
	{/if}
	<div class="border-b-2 border-transparent  ">
		<div class="ml-8 md:ml-32">
			<h2 class="hidden md:block text-sm font-normal mt-2 ">{@html subtitle }</h2>
			<h1 class="font-bold text-xl lg:text-2xl text-center md:text-left">{@html title }</h1>
		</div>
		{#if subnav}
		<div class="flex w-full text-center mt-2">
			<MenuSubnav links={subnav} />
		</div>
		{/if}
	</div>
</div>
<p class="max-w-4xl px-6 md:px-12 pt-4 md:pt-6 italic mx-auto text-sm text-center sm:hide md:block mb-2">{ caption ?? '' }</p>
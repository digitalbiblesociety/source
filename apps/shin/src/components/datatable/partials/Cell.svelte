<script>
	export let title
	export let subtitle
	export let href
	export let icon
</script>

<a href={href} class="hover:underline">
	{#if icon}
		{@html icon}
	{/if}
	<div class="font-medium text-gray-900 dark:text-gray-100">{title ?? ''}</div>
	<div class="text-gray-500 dark:text-gray-400">{subtitle ?? ''}</div>
</a>
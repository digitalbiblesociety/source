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
	<div class="text-stone-900 dark:text-stone-100">{title ?? ''}</div>
	<div class="text-stone-500 dark:text-stone-400">{subtitle ?? ''}</div>
</a>
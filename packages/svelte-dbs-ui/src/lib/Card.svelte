<script>
	export let details;
</script>

<div class="relative flex items-center space-x-3 rounded-lg border dark:bg-stone-900 px-6 py-5 shadow-sm hover:border-stone-400">
	{#if details.icon}
	<div class="flex h-10 w-10 flex-shrink-0 place-items-center justify-center rounded-full bg-stone-200 dark:bg-stone-900 text-center font-mono">
		{details.icon}
	</div>
	{/if}
	{#if details.nav && !details.url}
	<div class="min-w-0 flex-1">
		<p class="text-sm font-medium text-stone-900 dark:text-stone-200">{details.title ?? ''}</p>
		<p class="truncate text-sm text-stone-500 dark:text-stone-400">{details.subtitle ?? ''}</p>
		<div class="flex justify-around pt-4 text-sm">
			{#each details.nav as link}
			<a class="inline-flex items-center px-2.5 py-0.5 rounded-full dark:text-stone-200" href={link.url}>
				{link.icon ?? ''}
				{link.title}
			</a>
			 {/each}
		</div>
	</div>
	{/if}
	{#if !details.nav && details.url}
	<a class="min-w-0 flex-1" href={details.url}>
		<p class="text-sm font-medium text-stone-900 dark:text-stone-200">{details.title ?? ''}</p>
		<p class="truncate text-sm text-stone-500 dark:text-stone-400">{details.subtitle ?? ''}</p>
	</a>
	{/if}
</div>
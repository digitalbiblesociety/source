<script>
	export let data;
</script>

<div class="mx-auto max-w-4xl">
	{#if data}
		{@html data.film?.webEmbedPlayer}
	{/if}
</div>

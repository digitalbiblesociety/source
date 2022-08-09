<script>
	export let stat_block
</script>


<dl class="-mx-8 -mt-8 py-4 flex flex-wrap justify-center">
	{#each stat_block as stat}
	{#if stat.value}
	  <div class="flex flex-col px-8 pt-8 place-items-center">
		<dt class="order-2 text-base font-medium text-gray-500">{stat.title}</dt>
		{#if stat.href}
			<dd class="order-1 text-2xl font-extrabold text-primary-600 sm:text-3xl">
				<a href={stat.href}> {stat.value} </a>
			</dd>
		{:else}
			<dd 
				class="order-1 text-xl font-extrabold sm:text-3xl"
				class:text-md={stat.mini}>
				{@html stat.icon ?? stat.value}
			</dd>
		{/if}
	</div>
	{/if}
	{/each}
  </dl>



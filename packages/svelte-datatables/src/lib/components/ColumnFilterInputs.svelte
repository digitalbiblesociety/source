<script>
	import { onMount } from 'svelte';
	import { context as store } from '../app/Context.js';
	export let id = 'svelte-simple-datatable';
	const context = store.get(id);
	const columns = context.getColumns();
	const options = context.getOptions();

	let pageWidth;
	let opened = [];
	let active_filters = [];

	onMount(async () => {
		if ($options.customFilters) {
			$options.customFilters.forEach((filter) => {
				checkDefaults(filter, true);
			});
		}
	})

	// Set default values for the filter inputs to checked by default
	function checkDefaults(filter, isChecked) {
		let checked_filters = 0;
		let active_filters_without_defaults = Object.entries(active_filters).filter(
			([key]) => !key.includes('_0')
		);
		for (let i = 0; i < active_filters_without_defaults.length; i++) {
			if (active_filters_without_defaults[i][1]) {
				checked_filters++;
			}
		}

		for (let i = 0; i < filter.options.length; i++) {
			const option = filter.options[i];
			if (option.default) {
				active_filters[filter.key + '_' + i] = checked_filters === 0 && isChecked;
			}
		}
	}
</script>

<svelte:window bind:outerWidth={pageWidth} />
{#if $options.customFilters}
		<section>
				<div class="wrapper">
					{#each $options.customFilters as filter}
						{#each $columns as column}
							{#if column.name === filter.key}
								<div
									class="relative inline-block text-center mx-2 lg:border lg:border-primary-200 w-4/5 rounded-md mb-6"
								>
									<div
										on:click={() => {
											opened[filter.key] = !opened[filter.key];
										}}
										class="inline-flex justify-center text-sm font-medium text-primary-600 dark:text-stone-100 uppercase hover:text-stone-900"
									>
										<span>{filter.label}</span>
										<svg
											class="flex-shrink-0 mr-4 ml-1 h-5 w-5 text-stone-400 lg:hidden"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<div
										class:hidden={!opened[filter.key] && pageWidth < 1025}
										class="origin-top-right absolute lg:relative right-0  bg-white lg:bg-transparent rounded-md px-4 py-2"
									>
										<form class="space-y-2">
											<fieldset
												on:change|preventDefault={(e) => {
													columns.filter(
														column.key,
														e.target.checked ? e.target.value : '',
														filter.operation
													);
													checkDefaults(filter, !e.target.checked);
												}}>
												{#each filter.options as option, index}
													<div class="flex items-center">
														<input
															id={column.name + index}
															name={column.key + '[]'}
															value={option.value}
															bind:checked={active_filters[column.name + '_' + index]}
															data-filter={column.name + '_' + index}
															type="checkbox"
															class="h-4 w-4 border-stone-300 rounded"
														/>
														<label for={column.name + index}>{option.label}</label>
													</div>
												{/each}
											</fieldset>
										</form>
									</div>
								</div>
							{/if}
						{/each}
					{/each}
				</div>
		</section>
{/if}

<style>
section {
	display: block; 
	position: relative; 
	z-index: 10; 
	padding-bottom: 1rem; 
}

#svelte-simple-datatable aside {
	position: absolute;
	top: 0;
}

section .wrapper {
	display: flex;
	align-items: center;
	justify-content: start;
	height:100%;
}
@media (min-width: 1024px) { 
	section .wrapper {
		flex-direction: column; 
	}
}

fieldset {
	display: block; 
	padding-top: 0.5rem;
	padding-bottom: 0.5rem; 
	padding-left: 0.75rem; 
	padding-right: 1rem; 
	margin-top: 0.25rem; 
	font-size: 1rem;
	line-height: 1.5rem; 
	width: 100%; 
	border-radius: 0.375rem; 
	border-color: #D1D5DB; 
}

label {
	padding-right: 1rem; 
	margin-left: 0.75rem; 
	color: #374151; 
	font-size: 0.875rem;
	line-height: 1.25rem; 
	font-weight: 500; 
	white-space: nowrap; 
}

</style>
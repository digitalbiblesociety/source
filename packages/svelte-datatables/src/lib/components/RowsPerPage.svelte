<script>
	import { context as store } from '../app/Context.js';
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption
	} from '@rgossiaux/svelte-headlessui';

	export let id = 'svelte-simple-datatable';
	const context = store.get(id);
	const options = context.getOptions();

	const rowOptions = [25, 50, 100, 250];
</script>

<Listbox
	value={$options.rowsPerPage}
	on:change={(e) => {
		$options.rowsPerPage = e.detail;
	}}
>
	<ListboxButton class="relative flex flex-row h-8 w-full p-2 border-r rounded-tl-md rounded-bl-md text-left sm:text-sm dark:text-stone-600">
		{$options.rowsPerPage}
		<svg
			class=" mr-1 ml-1 h-5 w-5 text-stone-400 inline"
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
	</ListboxButton>
	<ListboxOptions
		class="absolute z-10 mt-1 w-24 bg-white dark:bg-stone-300 shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
	>
		{#each rowOptions as option}
			<ListboxOption class="text-stone-900 cursor-default select-none relative pl-3" value={option}>
				{option}
				{#if option === $options.rowsPerPage}
					<span class="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-4">
						<!-- Heroicon name: solid/check -->
						<svg
							class="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				{/if}
			</ListboxOption>
		{/each}
	</ListboxOptions>
</Listbox>

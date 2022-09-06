<script>
import {Listbox, ListboxButton, ListboxOptions, ListboxOption} from '@rgossiaux/svelte-headlessui'
import {font} from '$lib/stores/preferences.js'

const fonts = [
	{name: 'Arial', type: 'sans-serif'},
	{name: 'Verdana', type: 'sans-serif'},
	{name: 'Tahoma', type: 'sans-serif'},
	{name: 'Trebuchet MS', type: 'sans-serif'},
	{name: 'Times New Roman', type: 'serif'},
	{name: 'Georgia', type: 'serif'},
	{name: 'Garamond', type: 'serif'},
	{name: 'Courier New', type: 'monospace'},
]

const selectedFont = fonts[0]
</script>



<label for="about" class="block text-sm text-stone-700 dark:text-stone-300"> Font </label>

<div class="relative z-0 inline-flex shadow-sm rounded-md">
	<button 
		on:click={font.decreaseSize}
		class="relative inline-flex items-center px-4 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">

		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
			<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
		</svg>
	</button>

	<button 
	class:opacity-50={!$font.justified}
	on:click={() => $font.justified = !$font.justified}
	class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
		<rect x="2" y="2" width="20" height="4" rx=".6" ry=".6"/>
		<rect x="2" y="10" width="20" height="4" rx=".6" ry=".6"/>
		<rect x="2" y="18" width="20" height="4" rx=".6" ry=".6"/>
	</svg>
	</button>

	<button 
	on:click={font.increaseSize}
	class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
		<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
	</svg>
	</button>

	<div class="-mx-px relative block">
		<Listbox value={selectedFont} on:change={e => (selectedFont = e.detail)}>
		  <ListboxButton class="relative inline-flex items-center px-4 py-3 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
			  {selectedFont.name}
		  
			  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
			  </svg>
		  </ListboxButton>
		  <ListboxOptions class="origin-top-left absolute left-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
			{#each fonts as font}
			  <ListboxOption class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-stone-100" value={font} disabled={font.unavailable}>
				  <span class="font-normal block truncate">{font.name}</span>
				  <span>{font.type}</span>
			  </ListboxOption>
			{/each}
		  </ListboxOptions>
		</Listbox>
	  </div>
  </div>
  

<!--
<div class="relative block">
<label for="about" class="block text-sm text-stone-700 dark:text-stone-300"> Font Size </label>

<div 
class="w-6 h-6"
class:opacity-50={!$font.justified}
on:click={() => $font.justified = !$font.justified}>
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
	<rect x="2" y="2" width="20" height="4" rx=".6" ry=".6"/>
	<rect x="2" y="10" width="20" height="4" rx=".6" ry=".6"/>
	<rect x="2" y="18" width="20" height="4" rx=".6" ry=".6"/>
</svg>
</div>

<button type="button" 

class="-mr-1 relative h-10 inline-flex items-center px-4 py-2 rounded-l-md text-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 border border-stone-400 dark:border-stone-700">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full p-1 cursor-pointer bg-stone-700 text-stone-100 hover:bg-black hover:text-white" viewBox="0 0 24 24" fill="currentColor">
		<path fill-rule="evenodd" d="M2.25 12a.75.75 0 01.75-.75h18a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />					  
	</svg>
</button>
<button type="button" 
on:click={font.increaseSize}
class="-ml-1 relative h-10 inline-flex items-center px-4 py-2 rounded-r-md text-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 border border-stone-400 dark:border-stone-700">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full p-1 cursor-pointer bg-stone-700 text-stone-100 hover:bg-black hover:text-white" viewBox="0 0 24 24" fill="currentColor">
		<path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v8.25H21a.75.75 0 010 1.5h-8.25V21a.75.75 0 01-1.5 0v-8.25H3a.75.75 0 010-1.5h8.25V3a.75.75 0 01.75-.75z" clip-rule="evenodd" />
	</svg>
</button>
-->
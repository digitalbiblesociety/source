<script>
	import TopMenu from './TopMenu.svelte'

</script>

<div class="flex flex-row justify-between h-12 bg-gray-700 text-white">
	<div class="flex flex-row my-3 mx-4">
		<TopMenu />
		<h1 class="ml-2">Sophia</h1>
	</div>
	<div class="flex flex-row">
	<div class="flex my-3 mr-3">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
		</svg>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
		</svg>
	</div>

	<div class="my-1 relative flex items-center">
	  <input type="text" name="search" id="search" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md">
	  <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
		<kbd class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"> ⌘K </kbd>
	  </div>
	</div>
  
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-3 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
	</svg>
	</div>
</div>
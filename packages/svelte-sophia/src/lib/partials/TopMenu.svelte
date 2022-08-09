<script>
	import {Menu, MenuButton, MenuItems, MenuItem, Transition} from '@rgossiaux/svelte-headlessui'
	import SettingsMenu from './SettingsMenu.svelte'
	import Login from './Login.svelte'
	import {columns} from '$lib/store'

	const nav = [
		{type: 'window', title: 'bible', icon: '', handleClick() {}},
		{type: 'window', title: 'commentary', icon: '', handleClick() {}},
		{type: 'window', title: 'search', icon: '', handleClick() {}},
		{type: 'window', title: 'Map', icon: '', handleClick() {}},
		{type: 'window', title: 'Media', icon: '', handleClick() {}},
		{type: 'window', title: 'Parallels', icon: '', handleClick() {}},
		{type: 'window', title: 'Comparison', icon: '', handleClick() {}},
		{type: 'window', title: 'Audio', icon: '', handleClick() {}},
		{type: 'window', title: 'Statistics', icon: '', handleClick() {}},
//		{type:'options',title:'Settings',icon:''},
//		{type:'options',title:'About',icon:''},
//		{type:'options',title:'Feedback',icon:''}
	]

	function openWindow(type) {
		switch (type) {
			case 'bible':
				$columns = [...$columns, {id: 'ENGKJV', type: 'bible', chapters: []}]
				break
	
			default:
				break
		}
	}

	let shareUrl = '?'
	for (let i = 0; i < $columns.length; i++) {
		shareUrl += 'w' + i + '=' + $columns[i].id + '&'
	}
	
	shareUrl = shareUrl.slice(0, -1)
</script>

<!-- This example requires Tailwind CSS v2.0+ -->

<Menu class="relative">
	<MenuButton
		class="text-gray-200 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 
		focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</MenuButton>
	<Transition
		enter="transition duration-100 ease-out"
		enterFrom="transform scale-95 opacity-0"
		enterTo="transform scale-100 opacity-100"
		leave="transition duration-75 ease-out"
		leaveFrom="transform scale-100 opacity-100"
		leaveTo="transform scale-95 opacity-0"
	>
		<MenuItems class="absolute z-10 transform mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl">
			<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
				<div class="flex flex-row w-full justify-between bg-gray-200 dark:bg-gray-900">
				<SettingsMenu />
				<Login />
				</div>
				<div class="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
					{#each nav as link}
					{#if link.type === 'window'}
						<MenuItem>
							<button
								on:click={() => openWindow(link.title)}								
								class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition ease-in-out duration-150"
							>
							{#if link.icon}
								<div
									class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
								>
								{@html link.icon}
								</div>
								{/if}
								<div class="ml-4">
									<p class="text-base font-medium text-gray-900 dark:text-gray-200">{link.title}</p>
									{#if link.subtitle}
									<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
										{link.subtitle}
									</p>
									{/if}
								</div>
							</button>
						</MenuItem>
						{/if}
					{/each}

				</div>

			</div>
		</MenuItems>

	</Transition>
</Menu>

<!--
	  Flyout menu, show/hide based on flyout menu state.
  
	  Entering: "transition ease-out duration-200"
		From: "opacity-0 translate-y-1"
		To: "opacity-100 translate-y-0"
	  Leaving: "transition ease-in duration-150"
		From: "opacity-100 translate-y-0"
		To: "opacity-0 translate-y-1"
	-->

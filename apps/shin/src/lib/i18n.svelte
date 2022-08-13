<script>
	import { Menu, MenuButton, MenuItems, MenuItem } from "@rgossiaux/svelte-headlessui"
	import { t, locale, locales } from "$lib/translations/index.js"
	import IconTranslate from "~icons/heroicons-outline/translate"
	</script>
	
	<Menu>
		<MenuButton
			class="flex p-1 md:px-2.5 text-sm rounded-md border border-stone-500 bg-stone-200 text-stone-700
					 dark:bg-stone-600 dark:text-stone-200" aria-label="Language Select">
			<IconTranslate
				class="h-5 w-5 dark:placeholder-stone-400 md:mr-2" />
	
			<span class="hidden sm:block">{$t(`common.languages.${$locale}`)}</span>
		</MenuButton>
	
		<MenuItems
			class="absolute z-50 w-28 rounded-md bg-white drop-shadow-lg dark:bg-stone-800">
			{#each $locales as iso}
				<MenuItem
					class="block cursor-pointer py-2 px-4 text-sm text-stone-700 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
					on:click="{() => {
						$locale = iso
					}}">
					{$t(`common.languages.${iso}`)}
				</MenuItem>
			{/each}
		</MenuItems>
	</Menu>
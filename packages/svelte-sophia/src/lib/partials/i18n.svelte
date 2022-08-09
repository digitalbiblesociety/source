<script>
	import {
		Menu,
		MenuButton,
		MenuItems,
		MenuItem,
	} from '@rgossiaux/svelte-headlessui'
	import {t, locale, locales} from '$lib/translations/index.js'
	import IconTranslate from '~icons/heroicons-outline/translate'
	</script>
	
	<Menu>
		<MenuButton
			class="flex rounded-md p-1 text-sm text-gray-900 bg-gray-200 dark:bg-gray-600 dark:text-gray-200">
			<IconTranslate
				class="h-5 w-5 dark:placeholder-gray-400 md:mr-2" />
	
			<span class="hidden sm:block">{$t('common.translate_title')}</span>
		</MenuButton>
	
		<MenuItems
			class="absolute w-28 rounded-md bg-white drop-shadow-lg dark:bg-gray-800">
			{#each $locales as iso}
				<MenuItem
					class="block cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
					on:click="{() => {
						$locale = iso
					}}">
					{$t(`common.languages.${iso}`)}
				</MenuItem>
			{/each}
		</MenuItems>
	</Menu>
	
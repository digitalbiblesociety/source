<script>
import Menu from "./Menu.svelte"
import { t, locale } from "$lib/i18n"

const toggleLanguage = (current_lang) => ($locale = current_lang.iso)
const translations = [
	{ iso: "en", t: $t("English") },
	{ iso: "zh", t: $t("Chinese") },
]
</script>

<Menu>
	<div slot="trigger">
		<button class="text-white hover:text-gray-300">
			<span class="sr-only">View notifications</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129">
				</path>
			</svg>
		</button>
	</div>
	<div
		slot="menu"
		class="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg dark:bg-gray-800">
		{#each translations as translation}
			<div
				on:click="{() => toggleLanguage(translation)}"
				class="block cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200"
				role="menuitem"
				tabindex="-1">
				{translation.t}
			</div>
		{/each}
	</div>
</Menu>

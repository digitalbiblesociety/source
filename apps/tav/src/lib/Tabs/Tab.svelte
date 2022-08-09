<script>
import { getContext, onMount } from "svelte"

import getId from "./id"
import { TABS } from "./Tabs.svelte"

let tabEl

const tab = {
	id: getId(),
}
const { registerTab, registerTabElement, selectTab, selectedTab, controls } =
	getContext(TABS)

let isSelected
$: isSelected = $selectedTab === tab

registerTab(tab)

onMount(async () => {
	registerTabElement(tabEl)
})
</script>

<li
	bind:this="{tabEl}"
	role="tab"
	id="{tab.id}"
	aria-controls="{$controls[tab.id]}"
	aria-selected="{isSelected}"
	tabindex="{isSelected ? 0 : -1}"
	class="	mx-4 inline-flex w-auto items-center justify-center py-2
	px-2 text-sm uppercase leading-none hover:bg-gray-50
	hover:text-blue-800 hover:underline dark:hover:text-primary-400 sm:-mx-0.5 sm:justify-start
	sm:bg-gray-200 sm:py-2 sm:px-6 dark:sm:bg-gray-800 md:rounded-tl-2xl md:rounded-tr md:border md:border-2 md:border-gray-400 lg:text-base "
	class:text-primary-600="{isSelected}"
	class:border-b-transparent="{isSelected}"
	class:bg-white="{isSelected}"
	on:click="{() => selectTab(tab)}">
	<slot />
</li>

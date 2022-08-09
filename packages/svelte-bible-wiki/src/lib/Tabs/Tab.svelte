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
	class="uppercase inline-flex w-1/2 items-center justify-center rounded-tl-2xl rounded-tr border border-gray-300
		   py-3 -mx-0.5 bg-gray-100 leading-none sm:w-auto sm:justify-start sm:px-7"
	class:text-blue-600="{isSelected}"
	class:border-b-transparent="{isSelected}"
	class:bg-transparent="{isSelected}"
	on:click="{() => selectTab(tab)}">
	<slot />
</li>

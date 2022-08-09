<script>
import { onMount } from "svelte"

export let link
export let title

function handleClick() {
	let http = new XMLHttpRequest()

	http.open("POST", "http://aleph.test/api/ab")
	http.setRequestHeader("event", "click")
	http.setRequestHeader("target", link)
	http.setRequestHeader("page_url", window.location.href)
	http.setRequestHeader("user_agent", navigator.userAgent)
	http.send()
	window.location.href = link
}
</script>

<a href="{link}" on:click|preventDefault="{handleClick}">{title}</a>

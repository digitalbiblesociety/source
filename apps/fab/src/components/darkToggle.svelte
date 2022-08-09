<script>
import { onMount } from "svelte"

let theme_mode = ""
onMount(async () => {
	theme_mode = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light"
})
const toggleDark = () => {
	document.documentElement.classList.toggle("dark")
	theme_mode = theme_mode === "dark" ? "light" : "dark"
}

let sunbeams = [
	{ id: 1, x1: "12", y1: "1", x2: "12", y2: "3" },
	{ id: 2, x1: "12", y1: "21", x2: "12", y2: "23" },
	{ id: 3, x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" },
	{ id: 4, x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" },
	{ id: 5, x1: "1", y1: "12", x2: "3", y2: "12" },
	{ id: 6, x1: "21", y1: "12", x2: "23", y2: "12" },
	{ id: 7, x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" },
	{ id: 8, x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" },
]
</script>

<div class="relative mr-4" on:click="{toggleDark}">
	<span class="sr-only">Toggle Light and Dark Mode</span>
	<button class="shrink-0">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			class="h-6 w-6 rotate-45">
			<mask id="mask">
				<rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
				<circle
					cx="12"
					cy="4"
					r="9"
					fill="black"
					class:opacity-0="{theme_mode === 'dark'}">
				</circle>
			</mask>
			<circle
				fill="{theme_mode === 'dark' ? '#fbbf24' : '#f1f1f1'}"
				cx="12"
				cy="12"
				r="7"
				mask="url(#mask)">
			</circle>

			<g stroke="#fbbf24" class:opacity-0="{theme_mode != 'dark'}">
				{#each sunbeams as beam (beam.id)}
					<line x1="{beam.x1}" y1="{beam.y1}" x2="{beam.x2}" y2="{beam.y2}">
					</line>
				{/each}
			</g>
		</svg>
	</button>
</div>

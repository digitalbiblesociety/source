<script>
const stats = [
	{ title: "In GBC", value: 2767 },
	{ title: "In DBL", value: 1830 },
	{ title: "Total Tracked", value: 47477 },
]
</script>

<div class="my-8 mx-auto max-w-xs">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 251 123"
		xml:space="preserve">
		<style>
		text {
			fill: #08c;
			font-family: monospace;
			font-size: 10px;
		}
		rect {
			fill: #ddd;
		}
		</style>
		<rect y="22" rx="9" width="63.5" height="62.8"></rect>
		<rect x="1.3" y="23.3" rx="9" width="61" height="60.5"></rect>
		<rect x="75" y="7" rx="9" width="78.5" height="77.8"></rect>
		<rect x="76.3" y="8.3" rx="9" width="76" height="75.5"></rect>
		<rect x="163" rx="9" width="86.5" height="84.8"></rect>
		<rect x="164.3" y="1.3" rx="9" width="84" height="82.5"></rect>
		<text x="80" y="23.8">010010101001</text>
		<text x="80" y="37.3">010100010101</text>
		<text x="80" y="50.8">110101001001</text>
		<text x="80" y="64.3">000101001010</text>
		<text x="80" y="77.8">010100100101</text>
		<path
			d="M234 67C86 109 60-10 0 39c60-31 94 80 236 32 0-17-4-12 12-48l-1-8c-16 34-13 40-13 52"
			fill="#FFF">
		</path>
	</svg>
</div>

<div class="prose mx-auto">
	<h1 class="mb-12 text-center">The Global Bible Catalogue</h1>

	<dl class="-mx-8 -mt-8 flex flex-row justify-center">
		{#each stats as stat}
			<div class="flex flex-col justify-center px-8 pt-8 text-center">
				<dt class="order-2 text-base font-medium text-gray-500">
					{stat.title}
				</dt>
				<dd class="order-1 text-2xl font-extrabold text-gray-800 sm:text-3xl">
					{stat.value}
				</dd>
			</div>
		{/each}
	</dl>

	<h2>Overview</h2>
	<p>
		The Global Bible Catalogue (GBC) is a catalogue of generic metadata relating
		to published Scriptures and the languages they represent. The system
		contains listings of expressions and manifestations of the various
		translation works recorded in history, with special focus on the last 200
		years. It is being developed with funding from the ETEN partnership, owned
		and maintained by the UBS and put at the disposal of Bible Agencies
		associated with the ETEN fellowship. The system contains numerous duplicates
		but a central librarian is working to clean-up the data.
	</p>
</div>

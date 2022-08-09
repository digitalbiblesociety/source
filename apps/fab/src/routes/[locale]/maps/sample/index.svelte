<style>
svg {
	max-width: 100%;
	height: auto;
	height: "intrinsic";
}

div {
	white-space: pre;
}

.tooltip {
	border-radius: 5px;
	padding: 5px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
		rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
		rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
</style>

<script>
import { scaleQuantile, range, geoPath, geoNaturalEarth1 } from "d3"
import { feature, mesh } from "topojson-client"
import world from "../../../../../static/map_50m.json" //for latest counties-albers-10m.json: please visit https://github.com/topojson/us-atlas
import data from "./choropleth-data" // or pass data to component as prop

const width = 900 // the outer width of the chart, in pixels
const height = 600 // the outer height of the chart, in pixels
const names = ["Diabetes", "Obesity"] //the group names of the first and second elements
const labels = ["low", "med", "high"] //color maxtrx labels
const colors = [
	"#e8e8e8",
	"#ace4e4",
	"#5ac8c8",
	"#dfb0d6",
	"#a5add3",
	"#5698b9",
	"#be64ac",
	"#8c62aa",
	"#3b4994",
] // low to high color maxtrix
const tooltipBackground = "#CFD8DC" // background color of tooltip
const tooltipTextColor = "black" // text color of tooltip
const outlineStrokeColor = "white" // the color of the state outlines
const k = 20 //size of the legend

let locInfo
let legendInfo
const n = Math.floor(Math.sqrt(colors.length))

const countries = new Map(
	world.map((d) => [d.geometry.id, d.geometry.properties])
)
console.log(world)
// const stateLines = mesh(world, world.objects.states, (a, b) => a !== b);
const xFunc = scaleQuantile(
	Array.from(Object.values(data), (d) => d[0]),
	range(n)
)
const yFunc = scaleQuantile(
	Array.from(Object.values(data), (d) => d[1]),
	range(n)
)

const projection = geoNaturalEarth1()
const pathFunc = geoPath(projection)
const pathData = feature(world, world).features

const color = (value) => {
	if (!value) return "#ccc"
	const [a, b] = value
	return colors[yFunc(b) + xFunc(a) * n]
}

const countriesColors = {
	BD: "#e3ece3",
	BE: "#75a375",
	BF: "#94b894",
	BG: "#6c9d6c",
	BA: "#7ca87c",
	BN: "#a7c4a7",
	BO: "#679a67",
	JP: "#c9dbc9",
	BI: "#70a070",
	BJ: "#82ac82",
	BT: "#d3e2d3",
	JM: "#75a375",
	BW: "#72a172",
	BR: "#6a9b6a",
	BS: "#679a67",
	BY: "#7aa77a",
	BZ: "#6f9f6f",
	RU: "#80aa80",
	RW: "#689b68",
	RS: "#689b68",
	LT: "#6c9d6c",
	LU: "#72a172",
	LR: "#6c9d6c",
	RO: "#669966",
	GW: "#a9c6a9",
	GT: "#679a67",
	GR: "#679a67",
	GQ: "#679967",
	GY: "#79a679",
	GE: "#6a9c6a",
	GB: "#78a578",
	GA: "#72a172",
	GN: "#a9c6a9",
	GM: "#abc7ab",
	GL: "#679a67",
	KW: "#9fbf9f",
	GH: "#73a273",
	OM: "#c5d8c5",
	_2: "#ffffff",
	_1: "#ffffff",
	_0: "#ffffff",
	JO: "#b4cdb4",
	HR: "#699b69",
	HT: "#6c9d6c",
	HU: "#6d9e6d",
	HN: "#6b9c6b",
	PR: "#679a67",
	PS: "#ffffff",
	PT: "#689a68",
	PY: "#679a67",
	PA: "#699b69",
	PG: "#669966",
	PE: "#689b68",
	PK: "#ccddcc",
	PH: "#699b69",
	PL: "#689a68",
	ZM: "#679a67",
	EH: "#f6f9f6",
	EE: "#93b793",
	EG: "#9bbc9b",
	ZA: "#6d9e6d",
	EC: "#669966",
	AL: "#9bbc9b",
	AO: "#6a9c6a",
	KZ: "#7da87d",
	ET: "#76a476",
	ZW: "#6c9d6c",
	ES: "#6f9f6f",
	ER: "#76a476",
	ME: "#6e9f6e",
	MD: "#679a67",
	MG: "#84ad84",
	MA: "#c8dac8",
	UZ: "#c4d8c4",
	MM: "#aec9ae",
	ML: "#b8d0b8",
	MN: "#c8dac8",
	MK: "#75a375",
	MW: "#6e9e6e",
	MR: "#ebf2eb",
	UG: "#6a9c6a",
	MY: "#a5c3a5",
	MX: "#699b69",
	VU: "#ffffff",
	FR: "#75a375",
	FI: "#6d9e6d",
	FJ: "#75a375",
	FK: "#689a68",
	NI: "#6a9c6a",
	NL: "#82ab82",
	NO: "#6b9d6b",
	NA: "#6a9c6a",
	NC: "#ffffff",
	NE: "#b8d0b8",
	NG: "#7da87d",
	NZ: "#7aa67a",
	NP: "#d5e3d5",
	CI: "#8ab18a",
	CH: "#6d9d6d",
	CO: "#abc7ab",
	CN: "#b8d0b8",
	CM: "#73a273",
	CL: "#6b9c6b",
	CA: "#74a274",
	CG: "#689a68",
	CF: "#aec9ae",
	CD: "#6a9b6a",
	CZ: "#a6c4a6",
	CY: "#6e9e6e",
	CR: "#6c9d6c",
	CU: "#6c9d6c",
	SZ: "#6d9e6d",
	SY: "#a9c6a9",
	KG: "#9cbd9c",
	KE: "#6c9d6c",
	SS: "#77a577",
	SR: "#7da97d",
	KH: "#d3e2d3",
	SV: "#6d9e6d",
	SK: "#6b9c6b",
	KR: "#8eb38e",
	SI: "#6e9f6e",
	KP: "#bcd3bc",
	SO: "#ffffff",
	SN: "#b1cbb1",
	SL: "#8db38d",
	SB: "#ffffff",
	SA: "#b6ceb6",
	SE: "#74a274",
	SD: "#c9dbc9",
	DO: "#689a68",
	DJ: "#b4cdb4",
	DK: "#6d9d6d",
	DE: "#77a477",
	YE: "#ffffff",
	AT: "#73a273",
	DZ: "#c9dbc9",
	US: "#71a071",
	LV: "#7aa67a",
	UY: "#79a579",
	LB: "#84ad84",
	LA: "#c7dac7",
	TW: "#ffffff",
	TT: "#79a679",
	TR: "#e7efe7",
	LK: "#b0cab0",
	TN: "#e7efe7",
	TL: "#ffffff",
	TM: "#abc7ab",
	TJ: "#cedfce",
	LS: "#6a9c6a",
	TH: "#d8e5d8",
	TF: "#ffffff",
	TG: "#8eb48e",
	TD: "#89b189",
	LY: "#c9dbc9",
	AE: "#abc7ab",
	VE: "#679967",
	AF: "#fbfcfb",
	IQ: "#c2d6c2",
	IS: "#689a68",
	IR: "#e0eae0",
	AM: "#669966",
	IT: "#6c9d6c",
	VN: "#aec9ae",
	AR: "#abc7ab",
	AU: "#77a477",
	IL: "#bfd4bf",
	IN: "#c4d8c4",
	TZ: "#77a477",
	AZ: "#b9d0b9",
	IE: "#689a68",
	ID: "#d3e2d3",
	UA: "#6c9d6c",
	QA: "#a1c1a1",
	MZ: "#7aa67a",
}
let currentCountries = { ...countriesColors }

const format = (value) => {
	if (!value) return "N/A"
	const [a, b] = value
	console.log("format", value, a, b)
	return `${a}% ${names[0]}${labels[xFunc(a)] && ` (${labels[xFunc(a)]})`}
    ${b}% ${names[1]}${labels[yFunc(b)] && ` (${labels[yFunc(b)]})`}`
}

const cartesian = (...a) =>
	a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())))
const legendMap = cartesian(range(n), range(n))
</script>

<svg id="map" viewBox="0 0 975 610">
	{#each world as data, i}
		<path
			id="{data.properties.country_id}"
			class="cursor-pointer"
			center="{data.properties.center}"
			d="{pathFunc(data)}"
			fill="{currentCountries[data.properties.country_id]}"
			on:click="{() => goto(`/countries/${data.properties.country_id}`)}"
			on:mouseover="{(e) => (legendInfo = { e: e, i: i, j: j })}"
			on:focus="{(e) => (legendInfo = { e: e, i: i, j: j })}"
			on:mouseout="{() => (legendInfo = null)}"
			on:blur="{() => (legendInfo = null)}"
			stroke="#222">
		</path>
	{/each}

	<g transform="translate(870,450)">
		<g
			transform="translate({(-k * n) / 2},{(-k * n) / 2}) rotate(-45 {(k * n) /
				2},{(k * n) / 2})">
			<marker
				id="arrow"
				markerHeight="10"
				markerWidth="10"
				refX="6"
				refY="3"
				orient="auto">
				<path d="M0,0L9,3L0,6Z"></path>
			</marker>
			{#each legendMap as [i, j]}
				<rect
					width="{k}"
					height="{k}"
					x="{i * k}"
					y="{(n - 1 - j) * k}"
					fill="{colors[j * n + i]}"
					on:mouseover="{(e) => (legendInfo = { e: e, i: i, j: j })}"
					on:focus="{(e) => (legendInfo = { e: e, i: i, j: j })}"
					on:mouseout="{() => (legendInfo = null)}"
					on:blur="{() => (legendInfo = null)}">
				</rect>
			{/each}
			<line
				marker-end="url(#arrow)"
				x1="0"
				x2="{n * k}"
				y1="{n * k}"
				y2="{n * k}"
				stroke="black"
				stroke-width="1.5">
			</line>
			<line
				marker-end="url(#arrow)"
				y2="0"
				y1="{n * k}"
				stroke="black"
				stroke-width="1.5">
			</line>
			<text
				font-weight="bold"
				dy="0.71em"
				transform="rotate(90) translate({(n / 2) * k},6)"
				text-anchor="middle">
				{names[0]}
			</text>
			<text
				font-weight="bold"
				dy="0.71em"
				transform="translate({(n / 2) * k},{n * k + 6})"
				text-anchor="middle">
				{names[1]}
			</text>
		</g>
	</g>

	<!-- Map Tooltip -->
	{#if locInfo}
		<div
			class="tooltip"
			style="position:absolute; left:{locInfo.e.x + 12}px; top:{locInfo.e.y +
				12}px; pointer-events:none; background-color:{tooltipBackground}; color:{tooltipTextColor}">
			{locInfo.d.properties.name}, {world.get(locInfo.d.id.slice(0, 2)).name}
			{`\n${format(data[locInfo.d.id])}`}
		</div>
	{/if}

	<!-- Legend Tooltip -->
	{#if legendInfo}
		<div
			class="tooltip"
			style="position:absolute; left:{legendInfo.e.x + 12}px; top:{legendInfo.e
				.y +
				12}px; pointer-events:none; background-color:{tooltipBackground}; color:{tooltipTextColor}">
			{names[0]}{labels[legendInfo.j] && ` (${labels[legendInfo.j]})`}
			{`\n${names[1]}${labels[legendInfo.i] && ` (${labels[legendInfo.i]})`}`}
		</div>
	{/if}
</svg>

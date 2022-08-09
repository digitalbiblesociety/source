<script context="module">
// see https://kit.svelte.dev/docs#loading
export async function load({ params, fetch }) {
	const res = await fetch(`/map_50m.json`)
	if (res.ok) {
		return {
			props: {
				map_50m: await res.json(),
			},
		}
	}
	return {
		status: res.status,
		error: new Error(`Could not load JSON for Map`),
	}
}
</script>

<script>
import * as L from "leaflet"
import { goto } from "$app/navigation"
import { t, locale } from "$lib/i18n"
import MapToolbar from "./MapToolbar.svelte"
import "leaflet/dist/leaflet.css"

let wwl = {
	AF: 98,
	KP: 96,
	SO: 91,
	LY: 91,
	YE: 88,
	ER: 88,
	NG: 87,
	PK: 87,
	IR: 85,
	IN: 82,
	SA: 81,
	MM: 79,
	SD: 79,
	IQ: 78,
	SY: 78,
	MV: 77,
	CN: 76,
	QA: 74,
	VN: 71,
	EG: 71,
	UZ: 71,
	DZ: 71,
	MR: 70,
	ML: 70,
	TM: 69,
	LA: 69,
	MA: 69,
	ID: 68,
	BD: 68,
	CO: 68,
	CF: 68,
	BF: 68,
	NE: 68,
	BT: 67,
	TN: 66,
	OM: 66,
	CU: 66,
	ET: 66,
	JO: 66,
	CD: 66,
	MZ: 65,
	TR: 65,
	MX: 65,
	CM: 65,
	TJ: 65,
	BN: 64,
	KZ: 64,
	NP: 64,
	KW: 64,
	MY: 63,
}

let map
export let map_50m

function createMap(container) {
	let m = L.map(container).setView([10, 10], 3)
	L.tileLayer(
		"https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
		{
			attributionControl: false,
			subdomains: "abcd",
			maxZoom: 14,
		}
	).addTo(m)

	L.geoJSON(map_50m, {
		style: function (feature) {
			return {
				color: "#222",
				weight: 0.5,
			}
		},
		onEachFeature: function (feature, layer) {
			layer.on({
				click: function (e) {
					goto(`/${$locale}/countries/${feature.properties.country_id}`)
				},
				mouseover: function (e) {
					e.target.setStyle({
						weight: 2,
					})
				},
				mouseout: function (e) {
					e.target.setStyle({
						weight: 0.5,
					})
				},
			})
		},
	}).addTo(m)
	return m
}

// Map ToolBar
let toolbar = L.control({ position: "topright" })
let toolbarComponent

toolbar.onAdd = (m) => {
	let div = L.DomUtil.create("div")
	toolbarComponent = new MapToolbar({
		target: div,
		props: {},
	})
	toolbarComponent.$on("click-eye", ({ detail }) => (eye = detail))
	toolbarComponent.$on("click-lines", ({ detail }) => (lines = detail))
	toolbarComponent.$on("click-reset", () => {
		map.setView(initialView, 5, { animate: true })
	})
	return div
}
toolbar.onRemove = () => {
	if (toolbarComponent) {
		toolbarComponent.$destroy()
		toolbarComponent = null
	}
}

function setMapStyle(name) {
	var scale = ranges[name]
	usLayer.eachLayer(function (layer) {
		// Decide the color for each state by finding its
		// place between min & max, and choosing a particular
		// color as index.
		var division = Math.floor(
			(hues.length - 1) *
				((layer.feature.properties[name] - scale.min) / (scale.max - scale.min))
		)
		// See full path options at
		// http://leafletjs.com/reference.html#path
		layer.setStyle({
			fillColor: hues[division],
			fillOpacity: 0.8,
			weight: 0.5,
		})
	})
}

function mapAction(container) {
	map = createMap(container)
	toolbar.addTo(map)
	return {
		destroy: () => {
			toolbar.remove()
			map.remove()
		},
	}
}
</script>

<div class="h-80 w-full" use:mapAction></div>

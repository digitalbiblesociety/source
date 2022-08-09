import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			precompress: true,
			pages: "build",
			assets: "build",
		}),
		prerender: {
			default: true,
	   },
	},

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		defaults: {
			style: "postcss",
		},
	}),
}

export default config

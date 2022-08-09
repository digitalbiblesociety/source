import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			server: {
				strictPort: false,
			},
		},
		adapter: adapter()
	}
};

export default config;

import adapter from '@sveltejs/adapter-auto';

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(

			{
				pages: 'build',
				assets: 'build',
				fallback: null
			}
		), appDir: 'app',

		prerender: {
			handleHttpError({ status, path, referrer, referenceType }) {
				if (status === 404) {
					console.warn(`Suppressing 404 error for ${path}`);
					return true; // Suppress the error
				}
			}
		}

	}
};

export default config;

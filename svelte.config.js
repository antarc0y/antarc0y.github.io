import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
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

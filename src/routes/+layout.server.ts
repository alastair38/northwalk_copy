import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const settings = await client.getSingle('settings');
	// get the 3 most recent articles / case studies
	const articles = await client.getByType('case_study', { pageSize: 3 });

	return {
		settings,
		articles
	};
}

export const prerender = 'auto';

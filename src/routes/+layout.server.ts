import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	// using getAllByType instead of getSingle so that an error is not thrown when there is no content
	const res = await client.getAllByType('settings');

	const settings = res[0];

	if (!settings) {
		return {
			settingsMessage:
				"Looks like you haven't published your site settings yet! This is where you set site-wide options such as site title, navigation etc."
		};
	}

	// get the 3 most recent articles / case studies
	const articles = await client.getByType('case_study', { pageSize: 3 });

	return {
		settings,
		articles
	};
}

export const prerender = 'auto';

import { createClient } from '$lib/prismicio';

import * as prismic from '@prismicio/client';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		const page = await client.getByUID('people', params.uid);

		const relatedPosts = await client.get({
			filters: [prismic.filter.at('my.post.authors.author', page.id)]
		});

		const relatedPublications = await client.get({
			filters: [prismic.filter.at('my.publications.authors.author', page.id)]
		});

		return {
			page,
			relatedPosts,
			relatedPublications,
			title: page.data.name,
			meta_description: page.data.biography,
			meta_title: page.data.name,
			meta_image: page.data.image
		};
	} catch (err) {
		error(404, String(err));
	}
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('people');

	return pages.map((page) => {
		return {
			uid: page.uid
		};
	});
}

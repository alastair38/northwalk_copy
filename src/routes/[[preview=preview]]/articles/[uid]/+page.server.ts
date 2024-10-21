import { createClient } from '$lib/prismicio';
import { asText } from '@prismicio/client';
import type { CategoriesDocument, PeopleDocument } from '../../../../prismicio-types';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		const page = await client.getByUID('post', params.uid, {
			fetchLinks: ['people.name', 'people.image', 'article_categories.title']
		});

		return {
			page,
			title: page.data.title,
			meta_description: asText(page.data.excerpt),
			meta_title: page.data.title,
			meta_image: page.data.image
		};
	} catch (err) {
		error(404, String(err));
	}
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('post');

	return pages.map((page) => {
		return { uid: page.uid };
	});
}

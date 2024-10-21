import { createClient } from '$lib/prismicio';
import * as prismic from '@prismicio/client';
import { asText } from '@prismicio/client';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		const page = await client.getByUID('article_categories', params.uid);

		const documents = await client.getByType('post', {
			filters: [prismic.filter.at('my.post.categories.category', page.id)]
		});

		return {
			page,
			title: page.data.title,
			documents,
			meta_description: asText(page.data.description),
			meta_title: page.data.title,
			meta_image: page.data.image
		};
	} catch (err) {
		error(404, String(err));
	}
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('article_categories');

	return pages.map((page) => {
		return {
			uid: page.uid
		};
	});
}
function asFilled(name: any) {
	throw new Error('Function not implemented.');
}

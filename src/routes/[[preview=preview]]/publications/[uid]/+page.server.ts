import { createClient } from '$lib/prismicio';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		const page = await client.getByUID('publications', params.uid);

		return {
			page,
			title: page.data.title,
			meta_description: page.data.meta_description,
			meta_title: page.data.meta_title,
			meta_image: page.data.image
		};
	} catch (err) {
		error(404, String(err));
	}
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('publications');

	return pages.map((page) => {
		return {
			uid: page.uid
		};
	});
}
function asFilled(name: any) {
	throw new Error('Function not implemented.');
}

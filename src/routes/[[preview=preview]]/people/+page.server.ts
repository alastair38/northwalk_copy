import { createClient } from '$lib/prismicio';
import { mappers } from '$lib/slices/mappers';
import { asText, mapSliceZone } from '@prismicio/client';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getSingle('team', {
		fetchLinks: ['people.name', 'people.image', 'people.work_title']
	});

	return {
		page,

		title: page.data.title,
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image
	};
}

export function entries() {
	return [{}];
}

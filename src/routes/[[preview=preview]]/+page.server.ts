import { mapSliceZone } from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import { mappers } from '$lib/slices/mappers';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		// using getAllByType instead of getSingle so that an error is not thrown when there is no content
		const res = await client.getAllByType('homepage');

		const page = res[0];

		if (!page) {
			return {
				message: "Looks like you haven't published your home page content yet!"
			};
		}

		const slices = await mapSliceZone(page?.data?.slices, mappers, { client });

		return {
			slices,
			title: 'Home',
			meta_description: page?.data.meta_description,
			meta_title: page?.data.meta_title,
			meta_image: page?.data.meta_image
		};
	} catch (err) {
		return {
			message: `There has been an error. ${err}`
		};
	}
}

export function entries() {
	return [{}];
}

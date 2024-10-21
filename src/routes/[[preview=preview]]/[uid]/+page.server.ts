import { asText } from '@prismicio/client';
import * as prismic from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import { error } from '@sveltejs/kit';

import { Resend } from 'resend';
import { RESEND_API_KEY as RESEND } from '$env/static/private';

const resend = new Resend(RESEND);

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		const page = await client.getByUID('page', params.uid);

		return {
			page,
			title: asText(page.data.title),
			meta_description: page.data.meta_description,
			meta_title: page.data.meta_title,
			meta_image: page.data.meta_image
		};
	} catch (err) {
		error(404, String(err));
	}
}

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('page', {
		filters: [prismic.filter.not('my.page.uid', 'home')]
	});

	return pages.map((page) => {
		return {
			uid: page.uid
		};
	});
}

import { createClient } from '$lib/prismicio';
import { error } from '@sveltejs/kit';
export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	try {
		const documents = await client.getByType('post', {
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc'
			},
			pageSize: 9,
			page: Number(params.page)
		});

		if (documents.results.length === 0) {
			error(404, 'Error');
		}

		return {
			documents,
			meta_type: documents.results[0].type
		};
	} catch (err) {
		error(404, String(err));
	}
}

// export async function entries([]) {
// 	const client = createClient();
// 	const pages = await client.getByType('post', {
// 		orderings: {
// 			field: 'document.first_publication_date',
// 			direction: 'desc'
// 		},
// 		pageSize: 9
// 	});

// 	return Array.from({ length: pages.total_pages }, (_, i) => i + 1);
// }

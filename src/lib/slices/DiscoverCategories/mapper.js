import * as prismic from '@prismicio/client';
/**
 * @param {Object} args
 * @param {prismic.Content.DiscoverCategoriesSlice} args.slice
 * @param {{ client: prismic.Client<prismic.Content.AllDocumentTypes>}} args.context
 */
export default async function mapper({ slice, context }) {
	const caseStudies = (
		await Promise.all(
			slice.primary.categories.map(async (item) => {
				if (prismic.isFilled.contentRelationship(item.category)) {
					const items = await context.client.getByID(item.category.id);

					return /** @type {prismic.Content.CaseStudyDocument} */ (items);
				}
			})
		)
	).filter(Boolean);

	return {
		slice,
		caseStudies
	};
}

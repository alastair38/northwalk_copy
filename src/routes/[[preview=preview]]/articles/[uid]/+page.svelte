<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import type {
		PeopleDocument,
		CategoriesDocument,
		ArticleCategoriesDocument
	} from '../../../../prismicio-types.js';
	import Categories from '$lib/components/relatedContent/Categories.svelte';
	import Authors from '$lib/components/relatedContent/Authors.svelte';
	import FeaturedImage from '$lib/components/utilities/FeaturedImage.svelte';
	import MaskImage from '$lib/components/backgrounds/MaskImage.svelte';
	import Heading1 from '$lib/components/utilities/Heading1.svelte';
	import ArticleHeader from '$lib/components/headers/ArticleHeader.svelte';
	import DateTime from '$lib/components/utilities/DateTime.svelte';
	import Excerpt from '$lib/components/utilities/Excerpt.svelte';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';

	export let data;

	const authors = data.page.data.authors.map(
		(author) =>
			author.author as typeof author.author & {
				uid: PeopleDocument['uid'];
				data: Pick<PeopleDocument['data'], 'name' | 'image'>;
			}
	);

	const categories = data.page.data.categories.map(
		(category) =>
			category.category as typeof category.category & {
				uid: ArticleCategoriesDocument['uid'];
				data: Pick<ArticleCategoriesDocument['data'], 'title'>;
			}
	);
</script>

{#if data.page.data.showbackground}
	<MaskImage image={data.page.data.image} class="mask opacity-10 mix-blend-multiply" />
{/if}

<Bounded tag="article">
	{#if !data.page.data.showbackground}
		<Dotted variant="faded" class="text-content/50" />
	{/if}
	<ArticleHeader>
		<DateTime dateTime={data.page.first_publication_date} />
		<Heading1 class="leading-tight">{data.page.data.title}</Heading1>
		{#if authors.length > 0}
			<Authors class="justify-center" {authors} />
		{/if}

		{#if data.page.data.excerpt}
			<Excerpt excerpt={data.page.data.excerpt} />
		{/if}

		{#if categories.length > 0}
			<Categories class="justify-center" {categories} />
		{/if}
	</ArticleHeader>
	<FeaturedImage image={data.page.data.image} />
	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>

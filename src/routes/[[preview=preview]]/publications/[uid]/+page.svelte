<script lang="ts">
	import { PrismicText, SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Authors from '$lib/components/relatedContent/Authors.svelte';
	import Categories from '$lib/components/relatedContent/Categories.svelte';

	import type { CategoriesDocument, PeopleDocument } from '../../../../prismicio-types.js';
	import Heading1 from '$lib/components/utilities/Heading1.svelte';
	import FeaturedImage from '$lib/components/utilities/FeaturedImage.svelte';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';
	import MaskImage from '$lib/components/backgrounds/MaskImage.svelte';

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
				uid: CategoriesDocument['uid'];
				data: Pick<CategoriesDocument['data'], 'title'>;
			}
	);
</script>

{#if data.page.data.showbackground}
	<MaskImage image={data.page.data.image} class="mask opacity-10 mix-blend-multiply" />
{/if}

<Bounded class=" mt-12">
	{#if !data.page.data.showbackground}
		<Dotted variant="faded" class="text-content/50" />
	{/if}
	<header class="mx-auto max-w-3xl">
		<Heading1 variant="small">{data.page.data.title}</Heading1>

		{#if authors.length > 0}
			<Authors {authors} />
		{/if}

		<p class="mb-6 text-lg text-content">
			<PrismicText field={data.page.data.body} />
		</p>

		{#if categories.length > 0}
			<Categories {categories} />
		{/if}
	</header>

	{#if data.page.data.image}
		<FeaturedImage image={data.page.data.image} />
	{/if}

	<div class="mx-auto">
		<SliceZone slices={data.page.data.slices} {components} />
	</div>
</Bounded>

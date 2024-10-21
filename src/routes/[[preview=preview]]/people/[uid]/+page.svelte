<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';

	import PersonHeader from '$lib/components/headers/PersonHeader.svelte';
	import type { Content } from '@prismicio/client';

	import MaskImage from '$lib/components/backgrounds/MaskImage.svelte';
	import RelatedContent from '$lib/components/relatedContent/RelatedContent.svelte';
	import RelatedPublications from '$lib/components/relatedContent/RelatedPublications.svelte';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';

	export let data;

	const pubs = data.relatedPublications.results.map(
		(study) =>
			study as typeof study & {
				data: Content.PublicationsDocument['data'];
			}
	);

	const articles = data.relatedPosts.results.map(
		(study) =>
			study as typeof study & {
				data: Content.PostDocument['data'];
			}
	);
</script>

{#if data.page.data.showbackground}
	<MaskImage image={data.page.data.image} />
{/if}

<Bounded tag="article">
	{#if !data.page.data.showbackground}
		<Dotted variant="faded" class="text-content/50" />
	{/if}
	<PersonHeader data={data.page} />

	{#if articles.length !== 0}
		<RelatedContent heading={'Recent articles'} {articles} />
	{/if}
	{#if pubs.length !== 0}
		<RelatedContent heading={'Publications'} articles={pubs} />
	{/if}
</Bounded>

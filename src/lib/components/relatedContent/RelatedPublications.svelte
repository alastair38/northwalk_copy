<script lang="ts">
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import IconArrowRight from '~icons/ph/arrow-right';
	import type { Content } from '@prismicio/client';
	import type {
		CaseStudyDocumentData,
		PublicationsDocumentData,
		Simplify
	} from '../../../prismicio-types';

	export let pubs: (Content.AllDocumentTypes & { data: Simplify<PublicationsDocumentData> })[];
	//export let publications: (Content.AllDocumentTypes & { data: Simplify<CaseStudyDocumentData> })[];
</script>

<div class="mt-16 w-full space-y-12">
	<h2 class="flex gap-1 text-xl font-bold md:text-3xl">
		Publications <span aria-hidden="true" class="text-accent-light">.</span>
	</h2>
	<div class="grid grid-flow-row gap-12">
		{#each pubs as item}
			<div class="space-y-6">
				<!-- <PrismicImage field={item.data.image} class="h-60 w-full object-cover opacity-100" /> -->
				<h3 class="flex font-black">
					{item.data.title}
				</h3>
				<PrismicRichText field={item.data.body} />
				<PrismicLink document={item} class=" group flex w-fit items-center gap-2 font-medium"
					>Read more <span class="sr-only">about {item.data.title}</span>
					<IconArrowRight
						class="transition-transform duration-200 group-hover:translate-x-2"
					/></PrismicLink
				>
			</div>
			<hr />
		{/each}
	</div>
</div>

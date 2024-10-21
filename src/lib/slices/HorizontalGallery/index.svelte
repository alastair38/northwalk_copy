<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.HorizontalGallerySlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div
		class={`${slice.primary.background ? 'rounded-md border border-content/10 p-8' : ''} w-full space-y-6`}
	>
		{#if slice.primary.title}
			<Heading2 class="font-black text-content" variant="xsmall">{slice.primary.title}</Heading2>
		{/if}

		{#if slice.primary.description}
			<p>{slice.primary.description}</p>
		{/if}

		<div
			class="media-scroller mx-auto grid w-full snap-x snap-mandatory grid-flow-col gap-6 overflow-x-scroll pb-4"
		>
			{#each slice.primary.image as item}
				{#if item.caption}
					<figure
						class="relative aspect-video w-[400px] snap-center overflow-clip rounded-md shadow-md"
					>
						<PrismicImage class="h-full w-full object-cover " field={item.image} />

						<figcaption class="absolute bottom-0 left-0 right-0 bg-base/95 p-4">
							{item.caption}
						</figcaption>
					</figure>
				{:else}
					<figure
						class="relative aspect-video w-[400px] snap-center overflow-clip rounded-md shadow-md"
					>
						<PrismicImage class="h-full w-full object-cover " field={item.image} />
					</figure>
				{/if}
				<!-- Render content for item -->
			{/each}
		</div>
	</div>
</Bounded>

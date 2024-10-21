<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.MasonryGallerySlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="w-full space-y-6 rounded-md border border-content/10 p-8">
		{#if slice.primary.title}
			<Heading2 class="font-black text-content" variant="xsmall">{slice.primary.title}</Heading2>
		{/if}

		{#if slice.primary.description}
			<p>{slice.primary.description}</p>
		{/if}

		<div class="group columns-3xs gap-6">
			{#each slice.primary.images as item}
				{#if item.caption}
					<figure
						class="relative mb-6 w-full break-inside-avoid overflow-clip rounded-md shadow-md"
					>
						<PrismicImage class="object-cover " field={item.image} />

						<figcaption class="absolute bottom-0 left-0 right-0 bg-base/90 p-4">
							{item.caption}
						</figcaption>
					</figure>
				{:else}
					<figure class="mb-6 break-inside-avoid overflow-clip rounded-md shadow-md">
						<PrismicImage class="object-cover " field={item.image} />
					</figure>
				{/if}
				<!-- Render content for item -->
			{/each}
		</div>
	</div>
</Bounded>

<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText, PrismicText } from '@prismicio/svelte';

	export let slice: Content.DetailsCardSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div
		class={`outline-content/10 ${slice.variation === 'alternate' ? 'bg-brand-light/20' : 'bg-accent-light'} grid grid-cols-2 overflow-clip rounded-md shadow-2xl outline outline-1 outline-offset-4`}
	>
		{#if slice.primary.text}
			<div class="relative grid aspect-square h-full gap-2 p-12">
				{#if slice.primary.heading}
					<div class="vertical absolute bottom-0 left-0 top-0 flex justify-center">
						<span
							class="rounded-br-md rounded-tr-md bg-white py-4 text-sm font-medium tracking-wide"
							>{slice.primary.heading}</span
						>
					</div>
				{/if}

				{#each slice.primary.text as item, i}
					<div
						class={`h-full items-center border-b-content/30 ${i === slice.primary.text.length - 1 ? 'border-none' : 'border-b pb-2'} flex`}
					>
						<div class="grid w-full grid-cols-4 gap-6">
							<span class="font-black">{item.title}</span>
							<div class="col-span-3">
								<PrismicText field={item.description} />
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		<PrismicImage class="aspect-square h-full w-full object-cover" field={slice.primary.image} />
	</div>
</Bounded>

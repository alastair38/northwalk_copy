<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import ButtonLink from '$lib/components/utilities/ButtonLink.svelte';
	import clsx from 'clsx';
	import SpanHeading from './SpanHeading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, PrismicImage, PrismicText } from '@prismicio/svelte';

	import IconGear from '~icons/ph/gear';
	import IconCycle from '~icons/ph/arrows-clockwise';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';
	import { asText } from '@prismicio/helpers';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';

	/** @type {import("@prismicio/client").Content.ShowcaseSlice} */
	export let slice: Content.ShowcaseSlice;

	const icons = {
		gear: IconGear,
		cycle: IconCycle
	};
</script>

<Bounded
	wide={true}
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative"
>
	<Dotted variant="rounded" class="text-brand" />

	{#if slice.primary.heading}
		<Heading2 class="mb-16 max-w-2xl text-center font-black">
			{slice.primary.heading}
		</Heading2>
	{/if}
	<div class="relative grid items-center gap-8 text-base lg:grid-cols-6 lg:py-12">
		<div class="md:col-span-3">
			{#if slice.primary.icon}
				<div aria-hidden="true" class="w-fit rounded-lg bg-brand p-2 text-2xl">
					<svelte:component this={icons[slice.primary.icon]} />
				</div>
			{/if}
			{#if slice.primary.subheading}
				<p class="mb-4 mt-6 text-2xl font-normal text-content">
					{slice.primary.subheading}
				</p>
			{/if}
			{#if slice.primary.body}
				<div class="max-w-xl space-y-4 text-content">
					<PrismicRichText field={slice.primary.body} />
				</div>
			{/if}
			{#if slice.primary.button_link}
				<ButtonLink field={slice.primary.button_link} class="mt-6"
					>{slice.primary.button_text || 'Learn more'}</ButtonLink
				>
			{/if}
		</div>

		<PrismicImage
			field={slice.primary.image}
			class={clsx(
				'w-full rounded-md shadow-2xl lg:col-span-3 lg:pt-0',
				slice.variation === 'reverse' ? 'lg:order-1' : 'lg:-order-1'
			)}
			sizes="(max-width: 768px) 100vw, 50vw"
		/>
	</div>
</Bounded>

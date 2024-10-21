<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';
	import clsx from 'clsx';

	import type { CaseStudyDocument } from '../../../prismicio-types';
	import type { Content } from '@prismicio/client';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';
	import Link from '$lib/components/utilities/Link.svelte';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';

	export let slice: Content.CaseStudiesSlice;

	export let caseStudies: CaseStudyDocument[] = [];
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	wide={true}
	class={clsx(
		'relative',
		slice.variation === 'dark' ? ' bg-gradient-to-b from-content-dark to-brand-dark text-base' : '',
		slice.variation === 'dark' && slice.primary.top_margin && 'mt-12 md:mt-16'
	)}
	>{#if slice.variation === 'dark'}
		<Dotted variant="rounded" class="text-highlight-400" />
	{/if}
	<div class="z-0">
		<Heading2 variant="impact" class="max-w-3xl text-center">
			<PrismicText field={slice.primary.heading} /></Heading2
		>

		<div class="mx-auto mt-6 max-w-prose text-balance text-center text-lg">
			<PrismicRichText field={slice.primary.body} />
		</div>
	</div>

	<div class="mt-16 grid gap-16 md:mt-20">
		{#each caseStudies as caseStudy, index}
			<div
				class="group relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
			>
				<div class="col-span-1 flex flex-col justify-center gap-4">
					<h3 class="text-xl font-bold md:text-2xl">
						<PrismicText field={caseStudy.data.company} />
					</h3>
					<div>
						<PrismicRichText field={caseStudy.data.description} />
					</div>

					<Link field={caseStudy} linkType="withArrow">Read case study</Link>
				</div>

				<div class={clsx('relative lg:col-span-2', index % 2 && 'md:-order-1')}>
					<div class="image-glow -bottom-8 -left-4 bg-accent-dark"></div>
					<div class="image-glow bg-brand-100 -right-4 -top-8"></div>
					<PrismicImage
						field={caseStudy.data.image}
						sizes="(max-width: 768px) 100vw, 50vw"
						class="z-20 scale-[.98] rounded-xl transition-transform duration-300 group-hover:scale-100"
					/>
				</div>
			</div>
		{/each}
	</div>
</Bounded>

<style>
	.image-glow {
		@apply absolute h-1/2 w-1/2 rounded-full opacity-0 mix-blend-screen blur-3xl transition-opacity duration-500 group-hover:opacity-30;
	}
</style>

<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Grid from '$lib/components/layout/Grid.svelte';
	import IconSparkle from '~icons/ph/rocket-launch-duotone';
	import type { Content } from '@prismicio/client';
	import { PrismicText } from '@prismicio/svelte';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';

	export let slice: Content.TestimonialsSlice;
</script>

<Bounded
	wide={true}
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="bg-content/5"
>
	<Grid variant="3-col" class="relative items-center p-6">
		<Dotted variant="rounded" class="text-content" />

		{#if slice.primary.heading || slice.primary.description}
			<div class="relative space-y-6 text-pretty text-center md:col-start-3 md:row-start-1">
				<Heading2 class="flex items-center justify-center gap-4 font-black" variant="small"
					><IconSparkle class="-rotate-90 text-accent" />
					{slice.primary.heading} <span aria-hidden="true" class="-pl-1 text-accent">...</span>
				</Heading2>
				{#if slice.primary.description}
					<p>{slice.primary.description}</p>
				{/if}
			</div>
		{/if}
		<div
			class="-ml-24 flex h-96 max-w-4xl items-center md:col-span-2 md:col-start-1 md:row-start-1"
		>
			<div
				aria-hidden="true"
				class="pointer-events-none -mr-24 w-4/5 scale-50 select-none gap-6 space-y-6 rounded-lg bg-base-light p-8 shadow-2xl blur-sm"
			>
				<ul class="flex items-center justify-end gap-2">
					<li class="h-3 w-3 rounded-full bg-accent-dark"></li>
					<li class="h-3 w-3 rounded-full bg-brand"></li>
					<li class="h-3 w-3 rounded-full bg-highlight-400"></li>
				</ul>
				<p>{slice.primary.text}</p>
				<p class="font-medium italic">{slice.primary.citation}</p>
			</div>
			<blockquote class="relative z-10 w-4/5 space-y-6 rounded-lg bg-accent-light p-8 shadow-2xl">
				<ul aria-hidden="true" class="flex items-center justify-end gap-2">
					<li class="h-3 w-3 rounded-full bg-accent-dark"></li>
					<li class="h-3 w-3 rounded-full bg-brand"></li>
					<li class="h-3 w-3 rounded-full bg-highlight-400"></li>
				</ul>
				<p>{slice.primary.text}</p>
				<p class="font-medium italic">{slice.primary.citation}</p>
				<div class="absolute -bottom-8 left-0 right-0 -z-0 h-12 bg-base/70 blur-3xl"></div>
			</blockquote>
			<div
				aria-hidden="true"
				class=" pointer-events-none -ml-24 w-4/5 scale-50 select-none space-y-6 rounded-lg bg-base-light p-8 shadow-2xl blur-sm"
			>
				<ul class="flex items-center justify-end gap-2">
					<li class="h-3 w-3 rounded-full bg-accent-dark"></li>
					<li class="h-3 w-3 rounded-full bg-brand"></li>
					<li class="h-3 w-3 rounded-full bg-highlight-400"></li>
				</ul>
				<p>{slice.primary.text}</p>
				<p class="font-medium italic">{slice.primary.citation}</p>
			</div>
		</div>
	</Grid>
</Bounded>

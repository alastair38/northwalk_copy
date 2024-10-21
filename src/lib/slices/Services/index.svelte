<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Grid from '$lib/components/layout/Grid.svelte';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';
	import type { Content } from '@prismicio/client';

	import IconGear from '~icons/ph/gear';
	import IconCycle from '~icons/ph/arrows-clockwise';
	import IconArrow from '~icons/ph/arrow-right';
	import IconAperture from '~icons/ph/aperture';
	import IconBell from '~icons/ph/bell-ringing';
	import IconCalendar from '~icons/ph/calendar';
	import ButtonLink from '$lib/components/utilities/ButtonLink.svelte';
	import clsx from 'clsx';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';

	export let slice: Content.ServicesSlice;

	const icons = {
		aperture: IconAperture,
		arrow: IconArrow,
		bell: IconBell,
		calendar: IconCalendar,
		cycle: IconCycle,
		gear: IconGear
	};
</script>

<Bounded wide={true} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#if slice.primary.heading}
		<Heading2 variant="impact" class="mb-3 md:mb-6">{slice.primary.heading}</Heading2>
	{/if}

	{#if slice.primary.description}
		<p class="prose mb-6 text-center md:mb-12">{slice.primary.description}</p>
	{/if}
	<Grid variant="auto">
		{#each slice.primary.services as item}
			<article
				class={clsx(
					'relative space-y-6 overflow-clip rounded-md p-6 shadow-2xl',
					slice.variation === 'light' ? 'text-content' : 'text-base'
				)}
			>
				<div
					class={clsx(
						'absolute inset-0 -z-40 w-full',
						slice.variation === 'default'
							? 'bg-gradient-to-b from-content-dark to-content'
							: 'bg-white'
					)}
				>
					<Dotted
						variant="rounded"
						class={clsx('', slice.variation === 'default' ? 'text-accent' : 'text-content')}
					/>
				</div>
				{#if item.icon}
					<div
						aria-hidden="true"
						class={clsx(
							'w-fit rounded-lg p-2 text-lg md:text-xl',
							item.style === 'brand' && 'bg-brand text-base',
							item.style === null && 'bg-brand text-base',
							item.style === 'accent' && 'bg-accent text-content',
							item.style === 'highlight' && 'bg-highlight-400 text-content'
						)}
					>
						<svelte:component this={icons[item.icon]} />
					</div>
				{/if}

				<p class="font-black md:text-xl">{item.title}</p>

				{#if item.description}
					<p>{item.description}</p>
				{/if}

				{#if item.link}
					<ButtonLink variant={item.style} field={item.link} class="mt-6"
						>{item.linkText || 'Learn more'}</ButtonLink
					>
				{/if}
			</article>
		{/each}
	</Grid>
</Bounded>

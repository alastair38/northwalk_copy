<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import IconArrowLeft from '~icons/ph/caret-left';
	import IconArrowRight from '~icons/ph/caret-right';

	export let slice: Content.CarouselSlice;

	function currentIndicator(i: number) {
		const indicators = document.querySelectorAll('.indicators');

		indicators.forEach((ind) => ind.classList.remove('bg-accent-light'));
		indicators[i]?.classList.add('bg-accent-light');
	}
</script>

<Bounded
	class="relative overflow-clip "
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="space-y-6 text-center">
		{#if slice.primary.title}
			<h2 class="text-4xl font-black text-accent">{slice.primary.title}</h2>
		{/if}

		{#if slice.primary.description}
			<PrismicRichText field={slice.primary.description} />
		{/if}

		<ul
			class="carousel flex snap-x snap-proximity flex-nowrap items-start overflow-x-scroll scroll-smooth"
		>
			{#each slice.primary.slide as item, i}
				<!-- Render content for item -->
				<li
					class="relative aspect-video w-full shrink-0 snap-center scroll-mt-20 rounded-md shadow-2xl"
					id={`slide-${i}`}
				>
					{#if slice.primary.slide.length > 1}
						{#if i === 0}
							<div class="absolute left-0 top-0 h-full w-full">
								<a
									on:click={() => currentIndicator(slice.primary.slide.length - 1)}
									class="focus-visible:bg-base-20 absolute left-0 top-0 flex h-full w-16 items-center justify-center hover:bg-base/20"
									href={`#slide-${slice.primary.slide.length - 1}`}
									><span class="flex h-8 w-8 items-center justify-center rounded-full bg-base p-1"
										><IconArrowLeft /></span
									></a
								>
								<a
									on:click={() => currentIndicator(i + 1)}
									class="focus-visible:bg-base-20 absolute right-0 top-0 flex h-full w-16 items-center justify-center hover:bg-base/20"
									href={`#slide-${i + 1}`}
									><span class="flex h-8 w-8 items-center justify-center rounded-full bg-base p-1"
										><IconArrowRight />
									</span></a
								>
							</div>
						{:else if slice.primary.slide.length !== i + 1}
							<div class="absolute left-0 top-0 h-full w-full"></div>
							<a
								on:click={() => currentIndicator(i - 1)}
								class="focus-visible:bg-base-20 absolute left-0 top-0 flex h-full w-16 items-center justify-center hover:bg-base/20"
								href={`#slide-${i - 1}`}
								><span class="flex h-8 w-8 items-center justify-center rounded-full bg-base p-1"
									><IconArrowLeft />
								</span></a
							>
							<a
								on:click={() => currentIndicator(i + 1)}
								class="focus-visible:bg-base-20 absolute right-0 top-0 flex h-full w-16 items-center justify-center p-2 hover:bg-base/20"
								href={`#slide-${i + 1}`}
								><span class="flex h-8 w-8 items-center justify-center rounded-full bg-base p-1"
									><IconArrowRight />
								</span></a
							>
						{:else}
							<div class="absolute left-0 top-0 h-full w-full"></div>
							<a
								on:click={() => currentIndicator(i - 1)}
								class="focus-visible:bg-base-20 absolute left-0 top-0 flex h-full w-16 items-center justify-center hover:bg-base/20"
								href={`#slide-${i - 1}`}
								><span class="flex h-8 w-8 items-center justify-center rounded-full bg-base p-1"
									><IconArrowLeft />
								</span></a
							>
							<a
								on:click={() => currentIndicator(0)}
								class="focus-visible:bg-base-20 absolute right-0 top-0 flex h-full w-16 items-center justify-center p-2 hover:bg-base/20"
								href={`#slide-0`}
								><span class="flex h-8 w-8 items-center justify-center rounded-full bg-base p-1"
									><IconArrowRight />
								</span></a
							>
						{/if}
					{/if}

					<PrismicImage class="h-full w-full rounded-md object-cover" field={item.image} />
					<span class="absolute bottom-8 right-20 rounded-sm bg-base/80 px-3 py-1"
						>{item.caption}</span
					>
				</li>
			{/each}
		</ul>
		<ul class="mx-auto flex w-fit items-center gap-4">
			{#each slice.primary.slide as item, i}
				<li>
					<a
						data-indicator={i}
						on:click={() => currentIndicator(i)}
						class={`indicators flex h-3 w-3 items-center justify-center rounded-full border ${i === 0 && 'bg-accent-light'}`}
						href={`#slide-${i}`}
					>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</Bounded>

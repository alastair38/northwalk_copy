<script lang="ts">
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';
	import Link from '$lib/components/utilities/Link.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	export let slice: Content.TabsSlice;
	$: activeTabValue = 0;

	$: js = false;

	export let tabsLength = slice.primary.tabs.length;

	onMount(() => {
		// this will only run if javascript is enabled and we toggle the hidden attribute and opacity: 0 based on this
		js = true;
	});

	const handleClick = (tabValue: number) => () => {
		activeTabValue = tabValue;
	};

	function keyboardNav(
		this: {
			'on:keydown': (e: { keyCode: any }) => void;
			'on:click': () => void;
			id: string;
			href: string;
			tabindex: number | null;
			'aria-selected': boolean;
			role: 'tab';
		},
		e: { keyCode: any }
	) {
		switch (e.keyCode) {
			case 37:
				if (activeTabValue === 0) {
					activeTabValue = tabsLength - 1;
				} else {
					activeTabValue = activeTabValue - 1;
				}

				document.getElementById(`tab-${activeTabValue}`)?.focus();

				break;
			case 39:
				if (activeTabValue + 1 === tabsLength) {
					activeTabValue = 0;
				} else {
					activeTabValue = activeTabValue + 1;
				}

				document.getElementById(`tab-${activeTabValue}`)?.focus();

				break;
		}
	}
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div
		class="rounded-md bg-accent-light/20 p-8 shadow-2xl outline outline-1 outline-offset-4 outline-content/10"
	>
		<Heading2 class="mb-3 text-center font-bold text-content" variant="small" id="tabs-title"
			>{slice.primary.title}</Heading2
		>

		{#if slice.primary.description}
			<div class="mb-6 text-balance text-center text-content">
				<PrismicRichText field={slice.primary.description} />
			</div>
		{/if}

		<hr class="border-content/10" />
		<ul class="mt-8 flex items-center gap-3 self-start" aria-labelledby="tabs-title" role="tablist">
			{#each slice.primary.tabs as item, i}
				<li role="presentation">
					<a
						class={`uppecase focus-visible:outline-content-100 rounded-md px-3 py-1 outline-offset-2 ${activeTabValue === i ? 'text-base-100 hover:text-base-100/70 inline-flex bg-accent shadow-sm' : 'bg-accent-light/40 text-content/80 hover:text-content'}`}
						on:keydown={keyboardNav}
						on:click|preventDefault={handleClick(i)}
						id={`tab-${i}`}
						href={`#target-${i}`}
						tabindex={activeTabValue === i ? null : -1}
						aria-selected={activeTabValue === i ? true : false}
						role="tab"
					>
						{item.title}
					</a>
				</li>
				<!-- Render content for tab titles -->
			{/each}
		</ul>

		{#each slice.primary.tabs as item, i}
			<!-- {#if activeTabValue === i} -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				class={`outline-content-100/\/80 prose text-content ${js && 'opacity-0'} mt-6 h-max w-full max-w-full space-y-6 rounded-sm outline-offset-4 focus-visible:outline prose-a:no-underline`}
				id={`target-${i}`}
				aria-labelledby={`tab-${i}`}
				hidden={js && activeTabValue !== i ? true : false}
				data-visible={activeTabValue === i ? 'true' : 'false'}
				role="tabpanel"
			>
				<PrismicRichText field={item.description} />

				{#if item.link}
					<Link class="text-content/80" linkType="withArrow" field={item.link}>Find out more</Link>
				{/if}
			</div>
			<!-- {/if} -->
			<!-- Render content for tab description -->
		{/each}
	</div>
</Bounded>

<script lang="ts">
	// @ts-nocheck using this to supress incorrect error regarding the name property on the details element. Using the same name property groups multiple details elements together so they work as an accordion. Firefox does not currently support this. See browser implementation at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#browser_compatibility

	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';

	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';

	export let slice: Content.FaqsSlice;
	$: activeDetails = 0;

	$: js = false;

	export let faqsLength = slice.primary.faq.length;

	onMount(() => {
		// this will only run if javascript is enabled and we toggle the hidden attribute and opacity: 0 based on this
		js = true;
	});

	const handleClick = (detailsValue: number) => () => {
		let details = document.querySelectorAll('details');
		if (activeDetails === detailsValue && details[detailsValue].open) {
			details[detailsValue].open = false;
		} else {
			details[detailsValue].open = true;
		}

		activeDetails = detailsValue;
	};

	// function keyboardNav(
	// 	this: {
	// 		'on:keydown': (e: { keyCode: any }) => void;
	// 		'on:click': () => void;
	// 		id: string;
	// 		href: string;
	// 		tabindex: number | null;
	// 		'aria-selected': boolean;
	// 		role: 'tab';
	// 	},
	// 	e: { keyCode: any }
	// ) {
	// 	switch (e.keyCode) {
	// 		case 37:
	// 			if (activeDetails === 0) {
	// 				activeDetails = faqsLength - 1;
	// 			} else {
	// 				activeDetails = activeDetails - 1;
	// 			}

	// 			document.getElementById(`tab-${activeDetails}`)?.focus();

	// 			break;
	// 		case 39:
	// 			if (activeDetails + 1 === faqsLength) {
	// 				activeDetails = 0;
	// 			} else {
	// 				activeDetails = activeDetails + 1;
	// 			}

	// 			document.getElementById(`tab-${activeDetails}`)?.focus();

	// 			break;
	// 	}
	// }
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div
		class={`${slice.variation === 'default' ? 'rounded-md bg-base p-8 shadow-2xl outline outline-1 outline-offset-4 outline-content/10' : ''}`}
	>
		<Heading2 class="mb-3 text-center font-bold text-content" variant="small" id="tabs-title"
			>{slice.primary.title}</Heading2
		>

		{#if slice.primary.description}
			<div class="mb-6 text-balance text-center text-content">
				<PrismicRichText field={slice.primary.description} />
			</div>
		{/if}

		<hr
			class={`${slice.variation === 'default' ? 'border-content/10' : 'mb-12 border-content/10'}`}
		/>

		{#if faqsLength !== 0}
			{#each slice.primary.faq as item, i}
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

				<details
					name="details"
					class={`outline-content-100/\/80 prose text-content ${js && 'opacity-1'} group mt-6 h-max w-full max-w-full space-y-6 rounded-sm border-b border-b-content/10 outline-offset-4 focus-visible:outline prose-a:no-underline`}
					id={`target-${i}`}
					aria-labelledby={`tab-${i}`}
					open={js && activeDetails !== i ? false : true}
					data-visible={activeDetails === i ? 'true' : 'false'}
					on:click|preventDefault={handleClick(i)}
				>
					<summary
						class="group flex cursor-pointer items-center justify-between gap-2 py-2 font-bold focus-visible:outline-none"
					>
						<span
							class="flex cursor-pointer items-center justify-between gap-2 rounded-md font-bold outline-1 outline-content/50 group-focus-visible:outline group-focus-visible:outline-offset-2"
							>{item.title}</span
						>
						<svg
							aria-hidden="true"
							class="-mr-1 h-5 w-5 fill-current opacity-75 transition-transform duration-300 group-open:rotate-90"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							><path
								d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
							/></svg
						></summary
					>
					<div data-visible={activeDetails === i ? 'true' : 'false'}>
						<PrismicRichText field={item.summary} />
					</div>
				</details>
			{/each}
		{/if}
	</div>
</Bounded>

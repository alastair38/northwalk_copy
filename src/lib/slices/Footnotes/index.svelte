<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import IconReturn from '~icons/ph/arrow-bend-down-left-light';
	export let slice: Content.FootnotesSlice;
</script>

<aside
	class="prose prose-lg w-full pb-12"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<h2>Footnotes</h2>
	<ol class="p-0 prose-p:m-0">
		{#each slice.primary.note as item, i}
			<li>
				<div class="flex items-center gap-2">
					<PrismicRichText field={item.body} /><a id={`ftn-${i + 1}`} href={`#footnote-${i + 1}`}
						><IconReturn class="text-sm" aria-hidden="true" /><span class="sr-only">Return</span></a
					>
				</div>
			</li>
		{/each}
	</ol>
	<hr />
</aside>

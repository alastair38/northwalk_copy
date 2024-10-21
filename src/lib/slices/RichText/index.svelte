<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import { type Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.RichTextSlice;

	const htmlSerializer: prismicH.HTMLMapSerializer = {
		label: ({ children, node }) => {
			if (node.data.label === 'footnote')
				return `<a class="footnotes" id="footnote-${children}" href="#ftn-${children}"><span class="sr-only">${children}</span></a>`;
		}
	};
</script>

<div class="prose prose-lg mx-auto w-full hover:prose-a:no-underline">
	{@html prismicH.asHTML(slice.primary.content, null, htmlSerializer)}
</div>

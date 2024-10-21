<script lang="ts">
	import FeaturedImage from '$lib/components/utilities/FeaturedImage.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.FullWidthImageSlice;
</script>

<FeaturedImage
	image={slice.primary.image}
	caption={slice.primary.caption}
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
/>

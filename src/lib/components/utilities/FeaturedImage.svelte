<script lang="ts">
	import type { ImageField, KeyTextField } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let image: ImageField<never>;
	export let caption: string | undefined | KeyTextField = undefined;
</script>

<figure {...$$restProps} class="my-16 w-full overflow-clip rounded-md shadow-2xl">
	<PrismicImage class="aspect-video object-cover" field={image} />
	{#if caption}
		<figcaption class="bg-base px-2 py-1 text-center text-content md:px-6 md:py-3">
			{caption}
		</figcaption>
	{/if}
</figure>

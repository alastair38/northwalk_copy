<script lang="ts">
	import { PrismicText, SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import PageHeader from '$lib/components/headers/PageHeader.svelte';
	import Heading1 from '$lib/components/utilities/Heading1.svelte';
	import Dotted from '$lib/components/backgrounds/dotted.svelte';
	import MaskImage from '$lib/components/backgrounds/MaskImage.svelte';

	export let data;
</script>

{#if data.page.data.showbackground}
	<MaskImage image={data.page.data.meta_image} class="mask opacity-10 mix-blend-multiply" />
{/if}

<Bounded tag="div" wide={true}>
	{#if !data.page.data.showbackground}
		<Dotted variant="faded" class="text-content/50" />
	{/if}

	<PageHeader>
		<Heading1>
			<PrismicText field={data.page.data.title} />
		</Heading1>
	</PageHeader>

	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>

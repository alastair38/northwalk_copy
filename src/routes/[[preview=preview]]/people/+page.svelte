<script>
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Heading1 from '$lib/components/utilities/Heading1.svelte';
	import PageHeader from '$lib/components/headers/PageHeader.svelte';

	export let data;
</script>

<Bounded>
	<PageHeader>
		<Heading1>
			{data.page.data.title}
		</Heading1>
	</PageHeader>
	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>

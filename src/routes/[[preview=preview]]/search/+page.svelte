<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import SearchForm from '$lib/components/utilities/SearchForm.svelte';

	export let data: PageData;
</script>

<Bounded>
	<h1 class="text-5xl font-black md:text-4xl">{data.page.data.title}</h1>
	<SearchForm />

	<SliceZone slices={data.page.data.slices} {components} />
</Bounded>

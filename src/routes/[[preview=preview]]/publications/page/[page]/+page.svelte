<script lang="ts">
	import type { PageData } from './$types';
	import Archive from '$lib/components/pages/Archive.svelte';

	export let data: PageData;
</script>

<Archive {data} />

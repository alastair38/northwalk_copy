<script lang="ts">
	import '../app.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';

	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Seo from '$lib/components/utilities/SEO.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Seo />

<Header settings={$page.data.settings} />
<main data-theme={$page.data.settings.data.theme}>
	<slot />
</main>
<Footer settings={$page.data.settings} />
<PrismicPreview {repositoryName} />

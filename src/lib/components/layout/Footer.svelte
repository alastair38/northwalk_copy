<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import WordMark from '../design/Logo.svelte';

	/** @type {import("@prismicio/client").Content.SettingsDocument} */
	export let settings;
</script>

<footer class="mt-auto">
	<nav
		class="flex flex-col items-center justify-between gap-6 border-t border-brand-light/10 px-8 py-7 md:flex-row"
		aria-label="Footer navigation"
	>
		<a href="/">
			{#if settings.data?.logo}
				<PrismicImage field={settings.data.logo} class="h-12 w-auto" />
				<span class="sr-only">{settings.data.site_title} home page</span>
			{:else}
				<span>You need to add your logo to the site settings</span>
			{/if}
		</a>

		<ul class="flex gap-6">
			{#each settings.data.navigation as item (item.label)}
				<li>
					<PrismicLink field={item.link} class="inline-flex min-h-11 items-center">
						{item.label}
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</footer>

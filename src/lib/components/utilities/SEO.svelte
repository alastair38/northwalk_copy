<script lang="ts">
	import { page } from '$app/stores';

	type MetaData = {
		content_type: string;
		title: string;
		description: string;
	};

	let filteredMeta = $page.data.settings.data.custom_type_meta.filter((meta: MetaData) => {
		return meta.content_type.replace(/ /g, '_').toLowerCase() === $page.data.meta_type;
	});

	const metaDescription = $page.data.meta_description
		? $page.data.meta_description
		: filteredMeta[0]?.description;
</script>

<svelte:head>
	<title>
		{$page.data?.title ? $page.data?.title : filteredMeta[0]?.title}

		{$page.url.pathname !== '/' ? ` - ${$page.data.settings.data.site_title}` : ''}
	</title>

	<meta
		name="description"
		content={metaDescription ? metaDescription : $page.data.settings.data.meta_description}
	/>

	<link rel="canonical" href={$page.url.href} />

	<meta
		property="og:description"
		content={metaDescription ? metaDescription : $page.data.settings.data.meta_description}
	/>

	<meta name="og:title" content={$page.data?.title ? $page.data?.title : filteredMeta[0]?.title} />

	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{:else}
		<meta name="og:image" content={$page.data.settings.data.og_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	<!-- Open Graph -->
	<meta property="og:site_name" content={$page.data.settings.data.site_title} />
	<meta
		property="og:title"
		content={$page.data?.title ? $page.data?.title : filteredMeta[0]?.title}
	/>
	<meta
		property="og:description"
		content={metaDescription ? metaDescription : $page.data.settings.data.meta_description}
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.href} />
	<meta
		property="og:image"
		content={$page.data.meta_image?.url || $page.data.settings.data.og_image.url}
	/>
	<meta
		property="og:image:url"
		content={$page.data.meta_image?.url || $page.data.settings.data.og_image.url}
	/>
	<meta
		property="og:image:secure_url"
		content={$page.data.meta_image?.url || $page.data.settings.data.og_image.url}
	/>

	<meta property="og:image:type" content="image/webp" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />
	<meta
		property="og:image:alt"
		content={$page.data.meta_image?.alt || $page.data.settings.data.og_image.alt}
	/>

	<!-- Twitter -->
	<meta name="twitter:title" content={$page.data?.title} />
	<meta
		name="twitter:description"
		content={metaDescription ? metaDescription : $page.data.settings.data.meta_description}
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:image"
		content={$page.data.meta_image?.url || $page.data.settings.data.og_image.url}
	/>
	<meta
		name="twitter:image:alt"
		content={$page.data.meta_image?.alt || $page.data.settings.data.og_image.alt}
	/>
	<meta name="twitter:domain" content={$page.url.origin} />
</svelte:head>

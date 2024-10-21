<script lang="ts">
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	import IconX from '~icons/ph/x-logo';
	import IconInsta from '~icons/ph/instagram-logo';
	import IconEmail from '~icons/ph/envelope-simple-light';
	import type { Content } from '@prismicio/client';
	import Heading1 from '../utilities/Heading1.svelte';

	export let data: Content.PeopleDocument;

	const icons = {
		twitter: IconX,
		instagram: IconInsta,
		email: IconEmail
	};
</script>

<div class="grid w-full grid-cols-1 place-items-center">
	<header
		class="relative flex h-full w-full flex-col items-center justify-center overflow-clip text-content"
	>
		<PrismicImage
			field={data.data.image}
			class="mb-2 h-24 w-24 rounded-full object-cover opacity-100"
		/>

		<Heading1 variant="small">{data.data.name}</Heading1>

		<span class="text-content/80">{data.data.work_title}</span>
		{#if data.data.platform.length !== 0}
			<ul class="mt-4 flex items-center gap-4">
				{#each data.data.platform as item}
					<li>
						<PrismicLink field={item.link}
							><span class="sr-only">{item.link_text}</span>
							<svelte:component
								this={icons[item.platform_name]}
								class="transition-transform duration-200 hover:scale-125 focus-visible:scale-125"
							/></PrismicLink
						>
					</li>
				{/each}
			</ul>
		{/if}
	</header>
	<div class="prose prose-lg my-2 text-lg md:my-6">
		<PrismicRichText field={data.data.biography} />
	</div>
</div>

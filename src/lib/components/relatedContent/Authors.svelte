<script lang="ts">
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import clsx from 'clsx';
	let className: string | undefined = undefined;

	export { className as class };
	export let authors;
</script>

<div class={clsx('my-6 flex gap-6', className)}>
	{#each authors as author}
		<PrismicLink
			class="text-content/80 group flex items-center gap-2 no-underline decoration-brand-100 underline-offset-2 hover:underline focus-visible:outline-none "
			field={author}
			>{#if author.data?.image}
				<PrismicImage
					field={author.data.image}
					class="h-8 w-8 rounded-full object-cover opacity-100 transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105 group-focus-visible:outline group-focus-visible:outline-offset-2"
				/>
			{/if}
			{author.data.name}
		</PrismicLink>
	{/each}
</div>

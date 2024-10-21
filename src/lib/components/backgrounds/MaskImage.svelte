<script lang="ts">
	import type { ImageField } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	import clsx from 'clsx';
	type Variant = 'none' | 'dark' | 'brand' | 'accent';

	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = 'none';
	export let image: ImageField<never>;
</script>

<div
	id="mask-header"
	class={clsx(
		'mask dotted-light absolute left-0 right-0 top-0 isolate -z-10',
		variant === 'dark' && ' bg-content-dark',
		variant === 'brand' && 'bg-brand-dark',
		variant === 'accent' && 'bg-accent-dark'
	)}
	{...$$restProps}
>
	<PrismicImage
		aria-hidden="true"
		field={image}
		class={clsx('h-screen w-full object-cover opacity-10 mix-blend-luminosity', className)}
	/>
</div>

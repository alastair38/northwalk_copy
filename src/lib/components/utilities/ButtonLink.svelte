<script lang="ts">
	import clsx from 'clsx';
	import { PrismicLink } from '@prismicio/svelte';

	type Variant = 'brand' | 'accent' | 'highlight';
	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = 'brand';
</script>

<PrismicLink
	field={$$restProps.field}
	document={$$restProps.document}
	{...$$restProps}
	on:click
	class={clsx(
		'relative inline-flex h-fit w-fit rounded-md px-4 py-2 shadow-xl outline-offset-2 outline-brand transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-md after:bg-opacity-0 after:blur-md after:transition-all after:duration-300  after:hover:bg-opacity-50 ',
		className,
		variant === 'brand' &&
			'bg-brand text-base after:bg-brand-light hover:bg-brand-light hover:text-white focus-visible:text-white',
		variant === 'accent' &&
			'bg-accent text-content after:bg-accent-light hover:bg-accent-light hover:text-black focus-visible:text-black',
		variant === 'highlight' &&
			'bg-highlight-400 hover:bg-highlight-200 after:bg-highlight-200 text-content hover:text-black focus-visible:text-black'
	)}
>
	<slot />
</PrismicLink>

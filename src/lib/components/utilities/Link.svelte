<script>
	import clsx from 'clsx';
	import { PrismicLink } from '@prismicio/svelte';
	import IconArrowRight from '~icons/ph/arrow-right-light';
	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };

	/**
	 * @type {string | null}
	 */
	export let linkType = 'default';
</script>

{#if linkType === 'default'}
	<PrismicLink
		field={$$restProps.field}
		document={$$restProps.document}
		{...$$restProps}
		class={clsx('w-fit', className)}
	>
		<slot />
	</PrismicLink>
{/if}

{#if linkType === 'withArrow'}
	<PrismicLink
		field={$$restProps.field}
		document={$$restProps.document}
		{...$$restProps}
		class={clsx(
			'group flex w-fit items-center gap-2 font-medium focus-visible:outline-offset-4',
			className
		)}
	>
		<slot />
		<IconArrowRight
			aria-hidden="true"
			class="text-accent transition-transform duration-200 group-hover:translate-x-1"
		/>
	</PrismicLink>
{/if}

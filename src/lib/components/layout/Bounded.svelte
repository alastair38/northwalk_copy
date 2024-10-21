<script lang="ts">
	import clsx from 'clsx';

	type Wide = boolean;
	type Spacing = boolean;
	type Background = 'default' | 'brand' | 'accent';
	let className: string | undefined = undefined;

	export let tag = 'section';
	export { className as class };
	export let wide: Wide = false;
	export let spacing: Spacing = false;
	export let background: Background = 'default';
</script>

<svelte:element this={tag} {...$$restProps} class={clsx('px-4 py-12 md:px-8 md:py-16', className)}>
	<div
		class={clsx(
			'mx-auto flex w-full flex-col items-center',
			wide ? 'max-w-7xl' : 'max-w-5xl',
			spacing ? 'space-y-12 px-12 pb-12' : 'p-6',
			background === 'brand' && 'rounded-md bg-brand-light shadow-2xl',
			background === 'accent' && 'rounded-md bg-accent-light shadow-2xl'
		)}
	>
		<slot />
	</div>
</svelte:element>

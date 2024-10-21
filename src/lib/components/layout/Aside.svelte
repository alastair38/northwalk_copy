<script>
	import clsx from 'clsx';

	export let tag = 'aside';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<svelte:element this={tag} {...$$restProps} class={clsx('relative mx-auto max-w-7xl', className)}>
	<div class="flex w-full flex-col items-center">
		<slot />
	</div>
</svelte:element>

<script lang="ts">
	import clsx from 'clsx';

	type Variant = 'default' | 'compact' | 'spaced';
	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = 'default';
</script>

<header
	class={clsx(
		'mb-12 text-3xl font-bold md:text-5xl',
		variant === 'default' && 'space-y-6',
		variant === 'compact' && 'space-y-3',
		variant === 'spaced' && 'space-y-12',
		className
	)}
	{...$$restProps}
>
	<slot />
</header>

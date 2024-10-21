<script lang="ts">
	import clsx from 'clsx';

	type Variant = 'default' | 'small' | 'impact';

	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = 'default';
</script>

<h1
	class={clsx(
		'text-pretty font-black',
		variant === 'default' && 'text-3xl md:text-5xl',
		variant === 'small' && 'text-2xl md:text-4xl',
		variant === 'impact' && 'text-5xl md:text-7xl',
		className
	)}
	{...$$restProps}
>
	<slot />
</h1>

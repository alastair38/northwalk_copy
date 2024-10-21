<script lang="ts">
	import clsx from 'clsx';

	type Variant = 'default' | 'small' | 'xsmall' | 'impact';

	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = 'default';
</script>

<h2
	class={clsx(
		'text-balance',
		variant === 'default' && 'text-3xl md:text-5xl',
		variant === 'small' && 'text-xl md:text-3xl',
		variant === 'xsmall' && ' md:text-xl',
		variant === 'impact' && 'text-3xl font-black md:text-5xl',
		className
	)}
	{...$$restProps}
>
	<slot />
</h2>

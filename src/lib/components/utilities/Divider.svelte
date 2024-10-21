<script lang="ts">
	import clsx from 'clsx';

	type Variant = 'default' | 'small' | 'medium';
	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = 'default';
</script>

<hr
	class={clsx(
		'mx-auto border-content/10',
		variant === 'default' && 'w-full',
		variant === 'small' && 'w-1/4',
		variant === 'medium' && 'w-1/2',
		className
	)}
	{...$$restProps}
/>

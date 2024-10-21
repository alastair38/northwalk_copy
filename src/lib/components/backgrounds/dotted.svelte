<script lang="ts">
	import clsx from 'clsx';

	type Variant = 'default' | 'rounded' | 'faded';
	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = 'default';
</script>

<span
	aria-hidden="true"
	class={clsx(
		'dotted absolute inset-0 opacity-30',
		variant === 'rounded' && 'mask-radial z-0',
		variant === 'faded' && 'mask -z-40',
		variant === 'default' && 'z-0',
		className
	)}
	{...$$restProps}
></span>

<script lang="ts">
	import clsx from 'clsx';

	type Variant = 'default' | 'compact' | 'spaced';
	let className: string | undefined = undefined;
	export { className as class };
	export let variant: Variant = 'default';
</script>

<header
	class={clsx(
		'mx-auto max-w-3xl text-pretty text-center',
		variant === 'default' && '',
		variant === 'compact' && 'space-y-3',
		variant === 'spaced' && 'space-y-12',
		className
	)}
	{...$$restProps}
>
	<slot />
</header>

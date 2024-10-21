<script lang="ts">
	import { asText } from '@prismicio/helpers';
	import { PrismicRichText } from '@prismicio/svelte';
	import clsx from 'clsx';

	let className: string | undefined = undefined;
	export { className as class };
	export let excerpt: any;
</script>

<div class={clsx('text-balance', className)} {...$$restProps}>
	<PrismicRichText field={excerpt} />
</div>

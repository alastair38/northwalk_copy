<script lang="ts">
	import { asDate } from '@prismicio/client';
	import clsx from 'clsx';
	let className: string | undefined = undefined;
	export { className as class };
	export let dateTime: any;
</script>

<time
	datetime={dateTime}
	class={clsx('inline-flex gap-1 text-sm text-content/80', className)}
	{...$$restProps}
>
	{asDate(dateTime)?.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})}
</time>

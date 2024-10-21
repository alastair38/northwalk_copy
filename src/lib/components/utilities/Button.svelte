<script lang="ts">
	import clsx from 'clsx';

	import IconArrowRight from '~icons/ph/arrow-right-light';

	let className = undefined;
	export { className as class };

	type Button = 'default' | 'submit' | 'ghost' | 'arrow';

	export let btnType: Button = 'default';
</script>

{#if btnType === 'default'}
	<button
		{...$$restProps}
		class={clsx(
			'hover:bg-content/5 bg-content/10 focus-visible:ring-content/10 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium ring-offset-2 focus:outline-none focus-visible:ring-2 disabled:opacity-25 sm:w-auto',
			className
		)}
		on:click
	>
		<slot />
	</button>
{/if}

{#if btnType === 'submit'}
	<button
		{...$$restProps}
		class={clsx(
			'hover:bg-brand-light bg-brand focus-visible:ring-brand w-full rounded-lg px-5 py-2.5 text-center text-base text-sm font-medium ring-offset-2 focus:outline-none focus-visible:ring-2 disabled:opacity-25 sm:w-auto',
			className
		)}
		on:click
	>
		<slot />
	</button>
{/if}

{#if btnType === 'arrow'}
	<button
		{...$$restProps}
		class={clsx(
			'group flex w-fit items-center gap-2 font-black focus-visible:outline-offset-4',
			className
		)}
		on:click
	>
		<slot />
		<IconArrowRight
			aria-hidden="true"
			class="text-accent-light bg-content aspect-square rounded-full p-0.5 transition-transform duration-200 group-hover:translate-x-1"
		/>
	</button>
{/if}

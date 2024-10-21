<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';

	const urlBase = $page.url.pathname.split('/')[1];

	let className = undefined;
	export { className as class };

	export let totalPages: number = 0;
	export let pageNumber: number = 0;
	export let resultsPerPage: number = 0;
	export let totalResults: number = 0;
</script>

{#if totalPages > 1}
	<div class={clsx('mt-12 flex items-center gap-4', className)} {...$$restProps}>
		{#each Array(totalPages) as _, idx}
			<a
				href={`/${urlBase}/page/${idx + 1}`}
				class={pageNumber === idx + 1
					? 'flex h-8 w-8 items-center justify-center rounded-full bg-accent-light/50'
					: 'flex h-8 w-8 items-center justify-center rounded-full'}
			>
				{idx + 1}
			</a>
		{/each}
		<span
			aria-label={`${resultsPerPage * (pageNumber - 1) + 1} ${pageNumber === totalPages ? '' : `to ${resultsPerPage * pageNumber}`} of ${totalResults} results`}
			class="fixed bottom-4 right-5 flex rounded-md bg-white px-2 py-2 font-mono text-xs"
		>
			{resultsPerPage * (pageNumber - 1) + 1}
			{pageNumber === totalPages ? '' : `- ${resultsPerPage * pageNumber}`}
			/ {totalResults}
		</span>
	</div>
{/if}

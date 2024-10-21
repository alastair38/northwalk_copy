<script lang="ts">
	import { enhance } from '$app/forms';
	import IconSearch from '~icons/ph/magnifying-glass-light';

	import { PrismicLink, PrismicText } from '@prismicio/svelte';
	import Button from './Button.svelte';

	export let sending = false;
	$: searchTerm = '';

	export let searchData:
		| {
				type: 'success';
				status: number;
				data?: Record<string, any> | undefined | any;
		  }
		| undefined = undefined;
</script>

<form
	method="POST"
	action="/search?/search"
	class="mt-24 w-full"
	use:enhance={() => {
		sending = true;

		return async ({ update, result }) => {
			await update({ reset: false });

			if (result.type === 'success') {
				searchData = result;
			}

			setTimeout(() => {
				sending = false;
			}, 3000);
		};
	}}
>
	<div
		class="group flex items-center gap-3 border-b border-brand-light/10 p-2 focus-within:border-brand"
	>
		<label aria-label="search" for="searchInput" class="text-content/80"
			><IconSearch class="h-6 w-6 " />
		</label>

		<!-- svelte-ignore a11y-autofocus --- this retains focus on the input field after a search -->
		<input
			autofocus={sending}
			autocomplete="off"
			type="text"
			id="searchInput"
			bind:value={searchTerm}
			name="search"
			class="block w-full bg-transparent py-2.5 text-sm text-content/80 placeholder:text-brand focus:outline-none"
			placeholder="enter your search term ..."
			required
		/>

		<Button btnType="submit" disabled={sending} type="submit">Search</Button>

		<Button
			type="button"
			on:click={() => {
				searchTerm = '';
				searchData = undefined;
			}}
		>
			Clear
		</Button>
	</div>
</form>

{#if searchData?.type === 'success'}
	<div class="mt-12 flex w-full flex-col gap-6">
		<p class="text-center">
			Search results for <span class="italic text-content/80">{`${searchTerm}`}</span>
		</p>
		{#each searchData?.data?.publications as item}
			<div class=" border-b border-content/10 p-2 focus-within:bg-content/10">
				<PrismicLink
					document={item}
					class="group flex items-end justify-between text-content transition-colors duration-200 hover:text-content/50   focus:outline-none"
				>
					<div>
						<h2 class="font-bold hover:text-content/50">
							<PrismicText field={item.data.company} />
						</h2>
						<p><PrismicText field={item.data.description} /></p>
					</div>
					<span
						class="h-fit rounded-full bg-brand-light/30 px-3 py-1 text-sm font-light capitalize"
					>
						{item.type.replace(/_/g, ' ')}
					</span>
				</PrismicLink>
			</div>
		{/each}
	</div>
{/if}

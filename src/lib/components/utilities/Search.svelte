<script lang="ts">
	import { enhance } from '$app/forms';
	import IconSearch from '~icons/ph/magnifying-glass-light';
	import IconClose from '~icons/ph/x';
	import { PrismicLink, PrismicText } from '@prismicio/svelte';

	export let sending = false;
	let searchTerm = '';

	export let dialog: HTMLDialogElement | undefined = undefined;
	const closeDialog = () => dialog?.close();

	export let searchData:
		| {
				type: 'success';
				status: number;
				data?: Record<string, any> | undefined | any;
		  }
		| undefined = undefined;
</script>

<button
	class="group flex items-center gap-2 rounded-full border border-content-light/10 bg-base px-3 py-1 text-sm font-light text-content ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark"
	on:click={() => dialog?.showModal()}
	><span>Search</span><IconSearch class="h-5 w-5 group-hover:text-brand" />
</button>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<dialog
	bind:this={dialog}
	on:close={() => {
		searchData = undefined;
		searchTerm = '';
	}}
	class="relative min-h-96 w-2/3 overscroll-contain rounded-md backdrop:backdrop-blur-md"
>
	<div class="flex min-h-96 flex-col justify-between">
		<div class="flex items-center gap-6">
			<form
				method="POST"
				action="/search?/search"
				class="w-full"
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
				<div class="border-content-100/10 group flex items-center gap-3 border-b p-2">
					<label for="search" class="sr-only mb-2 block text-sm font-medium text-content/80"
						>Search query
					</label>
					<IconSearch class="h-6 w-6 " />
					<input
						autocomplete="off"
						type="text"
						id="search"
						bind:value={searchTerm}
						name="search"
						class="block w-full bg-transparent py-2.5 text-sm text-content/80 placeholder:text-brand focus:outline-none"
						placeholder="enter your search term ..."
						required
					/>

					<button
						disabled={sending}
						type="submit"
						class="w-full rounded-lg bg-brand px-5 py-2.5 text-center text-sm font-medium text-base ring-offset-2 hover:bg-brand-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-25 sm:w-auto"
						>Search</button
					>
				</div>
			</form>
		</div>

		{#if searchData?.type === 'success'}
			<div class="mb-12 flex flex-col gap-6 p-6">
				<span class=""
					>Search results for <span class="italic text-content/80">{`${searchTerm}`}</span>
				</span>
				{#each searchData?.data?.publications as item}
					<div class=" border-b py-2">
						<PrismicLink
							document={item}
							class="group flex justify-between font-bold text-content transition-colors duration-200 focus:outline-none"
							on:click={closeDialog}
						>
							<span class="hover:text-content/50 group-focus-visible:text-content/50">
								<PrismicText field={item.data.company} /></span
							>
							<span
								class="rounded-full bg-brand-light/30 px-3 py-1 text-sm font-light capitalize group-focus-visible:outline group-focus-visible:outline-offset-2 group-focus-visible:outline-brand/50"
							>
								{item.type.replace(/_/g, ' ')}
							</span>
						</PrismicLink>
					</div>
				{/each}
			</div>
		{/if}

		<button
			class="focus:online-none mb-2 ml-auto mr-2 mt-auto w-fit rounded-full bg-brand p-1 text-base ring-offset-2 hover:bg-content-light focus-visible:ring-2 focus-visible:ring-brand"
			on:click={closeDialog}
		>
			<span class="sr-only">Close</span> <IconClose /></button
		>
	</div>
</dialog>

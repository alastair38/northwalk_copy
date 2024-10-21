<script lang="ts">
	import { enhance } from '$app/forms';
	import IconCircleNotch from '~icons/ph/circle-notch';
	import Bounded from '$lib/components/layout/Bounded.svelte';
	import Button from '$lib/components/utilities/Button.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.FormSlice;

	export let sending = false;
	export let form: {
		type: 'success';
		status: number;
		data?: Record<string, any> | undefined;
	};
</script>

<Bounded class="w-full" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="self-start">
		<PrismicRichText field={slice.primary.description} />
	</div>
	<form
		method="POST"
		action="/search?/email"
		class="relative w-full rounded-md bg-white px-6 pb-20 shadow-2xl outline outline-1 outline-offset-4 outline-content/10"
		use:enhance={() => {
			sending = true;

			return async ({ update, result }) => {
				await update();

				if (result.type === 'success') {
					form = result;
				}

				setTimeout(() => {
					sending = false;
				}, 3000);
			};
		}}
	>
		<div>
			<div
				class={`mx-auto mb-6 flex h-14 items-center ${form?.type === 'success'} ? 'bg-accent-light' : ''} p-4`}
			>
				{#if form?.type === 'success' && sending}
					<p class="mx-auto">
						Thank you for your message {form.data?.email}
					</p>
				{/if}

				{#if !form?.type && sending}
					<p class="absolute inset-0 flex items-center justify-center bg-white/70 text-center">
						<svg class="h-12/ w-12/ animate-spin text-content" fill="none" viewBox="0 0 24 24">
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					</p>
				{/if}
			</div>
			<div />
			<div class="mb-8">
				<label for="email" class="mb-2 block text-sm font-medium text-content/80">Your email</label>
				<input
					type="email"
					id="email"
					name="email"
					class="block w-full rounded-lg border border-content/10 bg-base-light p-2.5 text-sm text-content/80 focus-visible:outline-content/50"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<div class="mb-8">
				<label for="message" class="mb-2 block text-sm font-medium text-content/80"
					>Your message</label
				>
				<textarea
					id="message"
					name="message"
					class="block w-full rounded-lg border border-content/10 bg-base-light p-2.5 text-sm text-content/80 focus-visible:outline-content/50"
					required
				/>
			</div>
			<!-- <div class="mb-8 flex items-start">
				<div class="flex h-5 items-center">
					<input
						id="remember"
						type="checkbox"
						name="remember"
						class="h-4 w-4 rounded-full border accent-brand"
					/>
				</div>
				<label for="remember" class="ms-2 text-sm font-medium text-content/80">Remember me</label>
			</div> -->

			<Button disabled={sending} type="submit" btnType="submit">Submit</Button>
		</div>
	</form>
</Bounded>

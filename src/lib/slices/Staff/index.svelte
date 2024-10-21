<script lang="ts">
	import { page } from '$app/stores';

	// Types
	import type { PeopleDocument } from '../../../prismicio-types';
	import type { Content } from '@prismicio/client';

	// Slice simulator images
	import Image0 from './images/image1.jpg';
	import Image1 from './images/image2.jpg';
	import Image2 from './images/image3.jpg';
	import Image3 from './images/image4.jpg';

	// Components
	import { PrismicLink, PrismicImage } from '@prismicio/svelte';
	import IconArrowRight from '~icons/ph/arrow-right-light';
	import Aside from '$lib/components/layout/Aside.svelte';
	import Heading2 from '$lib/components/utilities/Heading2.svelte';
	import Grid from '$lib/components/layout/Grid.svelte';

	export let slice: Content.StaffSlice;

	const images = [Image0, Image1, Image2, Image3];

	const staff = slice.primary.staff_members.map(
		(person) =>
			person.person as typeof person.person & {
				uid: PeopleDocument['uid'];
				data: Pick<PeopleDocument['data'], 'name' | 'image' | 'work_title'>;
			}
	);
</script>

<Aside
	class="w-full rounded-md bg-base-light p-6 font-medium md:p-12"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if slice.primary.title}
		<Heading2 variant="xsmall" class="mb-8 self-start font-black ">
			{slice.primary.title}
		</Heading2>
	{/if}

	<Grid variant="auto">
		{#if staff.length !== 0}
			{#each staff as item}
				<PrismicLink
					field={item}
					class="group relative w-full overflow-clip rounded-md rounded-md bg-base shadow-2xl outline outline-1 outline-offset-4 outline-content/10"
				>
					<div class="overflow-clip">
						<PrismicImage
							class="aspect-square h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-64"
							field={item?.data?.image}
						/>
					</div>

					<span class="flex w-fit items-center gap-2 px-3 py-2 font-medium">
						{item?.data?.name}
						{` - ${item?.data?.work_title}`}
						<IconArrowRight
							aria-hidden="true"
							class="text-accent transition-transform duration-200 group-hover:translate-x-1"
						/>
					</span>
				</PrismicLink>
			{/each}
		{/if}

		{#if $page.route.id === '/slice-simulator'}
			{#each { length: 3 } as _, i}
				<div
					class="group relative w-full overflow-clip rounded-md rounded-md bg-accent-light/20 shadow-2xl outline outline-1 outline-offset-4 outline-content/10"
				>
					<div class="overflow-clip">
						<img
							class="h-64 w-full rounded-t-md object-cover transition-transform duration-300 group-hover:scale-105"
							src={images[i]}
							alt=""
						/>
					</div>
					<span class="flex w-full items-center gap-2 bg-base px-3 py-2 font-medium">
						John Doe
						<IconArrowRight
							aria-hidden="true"
							class="text-accent transition-transform duration-200 group-hover:translate-x-1"
						/>
					</span>
				</div>
			{/each}
		{/if}
	</Grid>
</Aside>

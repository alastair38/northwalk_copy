<script lang="ts">
	import { PrismicRichText, PrismicText, PrismicImage } from '@prismicio/svelte';
	import type { CaseStudyDocument } from '../../../prismicio-types';
	import Link from '../utilities/Link.svelte';
	import Heading2 from '../utilities/Heading2.svelte';
	import { asText } from '@prismicio/helpers';

	export let item: CaseStudyDocument<string>;
</script>

<div class="w-full overflow-clip rounded-md shadow-2xl">
	<PrismicImage class="aspect-video object-cover" field={item.data.image} />
	<div class="space-y-4 p-6">
		<Heading2 variant="xsmall" class="font-black">
			<PrismicText field={item.data.company} />
		</Heading2>
		<PrismicRichText field={item.data.description} />
		<Link
			document={item}
			aria-label={`Read ${asText(item.data.company)} ${item.type.replace(/_/g, ' ')}`}
			linkType="withArrow">View Details</Link
		>
	</div>
</div>

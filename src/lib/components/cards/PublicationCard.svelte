<script lang="ts">
	import { PrismicRichText } from '@prismicio/svelte';
	import type { PublicationsDocument, CaseStudyDocument } from '../../../prismicio-types';
	import Link from '../utilities/Link.svelte';
	import Heading2 from '../utilities/Heading2.svelte';

	export let item: PublicationsDocument<string>;
</script>

<div class="w-full space-y-6 rounded-md p-6 shadow-2xl">
	<Heading2 variant="xsmall" class="font-black">{item.data.title}</Heading2>
	<PrismicRichText field={item.data.body} />
	<Link document={item} linkType="withArrow">View Details</Link>
</div>

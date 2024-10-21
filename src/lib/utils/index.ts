export type MetaData = {
	content_type: string;
	title: string;
	description: string;
};

export const filteredMeta = (metaArray: any[], type: any) =>
	metaArray.filter((meta: MetaData) => {
		return meta.content_type.replace(/ /g, '_').toLowerCase() === type;
	});

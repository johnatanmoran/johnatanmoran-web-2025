export default interface Articles {
	id: number;
	attributes: {
		title: string;
		slug: string;
		excerpt: string;
		content: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		coverImage: {};
	};
}

export interface FeaturedImage {
	node: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
}

export type Category = {
	name: string;
};

export type Tag = {
	name: string;
};

export interface Categories {
	nodes: Category[];
}

export interface Author {
	firstName: string;
	lastName: string;
}

export interface ShowcaseBlogDetails {
	slug: string;
	title: string;
	featuredImage: FeaturedImage;
	categories: Categories;
	content: string;
}

export interface RelatedBlogDetails extends ShowcaseBlogDetails {}

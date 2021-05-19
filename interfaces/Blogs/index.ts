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

export interface ReadingTime {
	readtime: number;
}

export interface ShowcaseBlogDetails {
	slug: string;
	title: string;
	featuredImage: FeaturedImage;
	categories: Categories;
	content: string;
	readingTime: ReadingTime;
}

export interface FilteredBlog {
	slug: string;
	title: string;
	categories: Categories;
	readingTime: ReadingTime;
}

export interface RelatedBlogDetails {
	title: string;
	slug: string;
	featuredImage: FeaturedImage;
	categories: Categories;
	readingTime: ReadingTime;
}

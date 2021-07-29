/* Types */
import next from 'next';
import { Category, ShowcaseBlogDetails } from '../../interfaces/Blogs';

export const fallBackImageURL = `https://wordpress.sellgo-dev.com/wp-content/uploads/2021/05/dd5ff4_f90c144477bb4bb8b982992680376ca0_mv2.png`;

export const imageLoaderForBlogs = (config: any) => {
	const { src, width, quality } = config;

	return `${src || fallBackImageURL}?w=${width}&q=${quality || 75}`;
};

export const generatePlaceholderImages = async (blogList:any, getPlaiceholder: (img:string) => any) => {
	const newBlogList:any[] = [];
	await Promise.all(blogList.map(async (post:any) => {
		let imgSrc = post.featuredImage?.node?.sourceUrl;
		if (!imgSrc) {
			imgSrc = fallBackImageURL
		}
		const {base64} = await getPlaiceholder(imgSrc);
		newBlogList.push({placeholder: base64, ...post});
	}));
	return newBlogList;
}

/* Send back first category name on showcase */
export const generateCategoryDisplayName = (categoriesList: Category[]) => {
	if (!categoriesList.length) {
		return '';
	}
	return categoriesList[0].name === 'Uncategorized'
		? ''
		: `${categoriesList[0].name} |`;
};

/* Format blog read time */
export const formatBlogReadTime = (time: number) => {
	return Math.abs(time);
};

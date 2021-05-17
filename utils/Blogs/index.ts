import readingTime from 'reading-time';

/* Types */
import { Category } from '../../interfaces/Blogs';

export const imageLoaderForBlogs = (config: any) => {
	const { src, width, quality } = config;
	const newSrc =
		process.env.NODE_ENV === 'production'
			? src.replace('http://', 'https://')
			: src;

	return `${src}?w=${width}&q=${quality || 75}`;
};

/* Send back first category name on showcase */
export const generateCategoryDisplayName = (categoriesList: Category[]) => {
	if (!categoriesList.length) {
		return '';
	}
	return categoriesList[0].name;
};

/* Send the reading time details */
export const getBlogReadTime = (content: string) => {
	return readingTime(content).text;
};

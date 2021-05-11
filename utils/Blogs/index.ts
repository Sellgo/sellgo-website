import readingTime from 'reading-time';

/* Types */
import { Category } from '../../interfaces/Blogs';

export const imageLoaderForBlogs = (config: any) => {
	const { src, width, quality } = config;
	const newSrc = src.replace('http://', 'https://');

	return `${newSrc}?w=${width}&q=${quality || 75}`;
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

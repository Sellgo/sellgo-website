/* Types */
import { Category } from '../../interfaces/Blogs';

export const imageLoaderForBlogs = (config: any) => {
	const { src, width, quality } = config;
	return `${src}?w=${width}&q=${quality || 75}`;
};

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

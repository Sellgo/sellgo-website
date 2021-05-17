/* Types */
import { Category } from '../../interfaces/Blogs';

export const imageLoaderForBlogs = (config: any) => {
	const { src, width, quality } = config;
<<<<<<< HEAD
	const newSrc =
		process.env.NODE_ENV === 'production'
			? src.replace('http://', 'https://')
			: src;

=======
>>>>>>> 6d560def299f1bb22a270b6557340d382674b5dc
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

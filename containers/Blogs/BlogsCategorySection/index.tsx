import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CategoryBlogCard from '../../../components/BlogFeatureCards/CategoryBlogCard';

interface Props {}

const BlogsCategorySection: React.FC<Props> = () => {
	return (
		<section className={styles.blogsCategorySection}>
			<h2 className="secondary-heading">Visit Sellgo Blog&apos;s</h2>
			<div className={styles.categoryBlogsWrapper}>
				<CategoryBlogCard />
				<CategoryBlogCard />
				<CategoryBlogCard />
				<CategoryBlogCard />
			</div>
		</section>
	);
};

export default BlogsCategorySection;

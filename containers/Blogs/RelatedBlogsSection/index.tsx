import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import RelatedBlogCard from '../../../components/BlogFeatureCards/RelatedBlogCard';

interface Props {}

const RelatedBlogsSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.relatedBlogs}`}>
			<h3>Related Articles</h3>
			<div className={styles.relatedBlogsWrapper}>
				<RelatedBlogCard />
				<RelatedBlogCard />
				<RelatedBlogCard />
			</div>
		</section>
	);
};

export default RelatedBlogsSection;

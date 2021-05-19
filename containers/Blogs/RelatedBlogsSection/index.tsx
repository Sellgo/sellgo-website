import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import RelatedBlogCard from '../../../components/BlogFeatureCards/RelatedBlogCard';

/* Types */
import { RelatedBlogDetails } from '../../../interfaces/Blogs';

interface Props {
	relatedBlogs: RelatedBlogDetails[];
}

const RelatedBlogsSection: React.FC<Props> = (props) => {
	const { relatedBlogs } = props;

	return (
		<section className={`page-container ${styles.relatedBlogs}`}>
			<h3>Related Articles</h3>
			<div className={styles.relatedBlogsWrapper}>
				{relatedBlogs.map((blog: RelatedBlogDetails) => {
					return <RelatedBlogCard key={uuid()} {...blog} />;
				})}
			</div>
		</section>
	);
};

export default RelatedBlogsSection;

import React from 'react';
import Link from 'next/link';

/* Styles */
import styles from './index.module.scss';

/* Types */
import { ShowcaseBlogDetails } from '../../../interfaces/Blogs';

/* Components */
import BlogCardImage from '../../BlogCardImage';

interface Props {
	relatedBlogsDetails: ShowcaseBlogDetails | null;
}

const CategoryBlogCard: React.FC<Props> = (props) => {
	const { relatedBlogsDetails } = props;

	// return empty if no details found
	if (!relatedBlogsDetails) {
		return null;
	}

	return (
		<article className={styles.categoryBlogCard}>
			<Link href={`/blogs/blog/${relatedBlogsDetails.slug}`} passHref>
				<a>
					<div className={styles.categoryBlogCard__Image}>
						<BlogCardImage
							featuredImage={relatedBlogsDetails.featuredImage}
							placeholder={relatedBlogsDetails.placeholder}
							priority={false}
						/>
					</div>

					<div className={styles.categoryBlogCard__Text}>
						<p>{relatedBlogsDetails.title}</p>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default CategoryBlogCard;

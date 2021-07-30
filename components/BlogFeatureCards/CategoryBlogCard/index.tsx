import React from 'react';
import Link from 'next/link';

/* Styles */
import styles from './index.module.scss';

/* Types */
import { ShowcaseBlogDetails } from '../../../interfaces/Blogs';

/* Components */
import BlogCardImage from '../../ShimmeredImage';

/* Utils */
import { fallBackImageURL, imageLoaderForBlogs } from '../../../utils/Blogs';

interface Props {
	relatedBlogsDetails: ShowcaseBlogDetails | null;
}

const CategoryBlogCard: React.FC<Props> = (props) => {
	const { relatedBlogsDetails } = props;

	// return empty if no details found
	if (!relatedBlogsDetails) {
		return null;
	} 

	const {title, featuredImage, slug} = relatedBlogsDetails;


	return (
		<article className={styles.categoryBlogCard}>
			<Link href={`/blogs/blog/${slug}`} passHref>
				<a>
					<div className={styles.categoryBlogCard__Image}>
						<BlogCardImage
							loader={imageLoaderForBlogs}
							src={featuredImage?.node?.sourceUrl || fallBackImageURL}
							alt={featuredImage?.node?.altText}
							layout="fill"
							objectFit="cover"
						/>
					</div>

					<div className={styles.categoryBlogCard__Text}>
						<p>{title}</p>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default CategoryBlogCard;

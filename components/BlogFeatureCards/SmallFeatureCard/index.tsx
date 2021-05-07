import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Types */
import { ShowcaseBlogDetails } from '../../../interfaces/Blogs';

/* Utils */
import {
	generateCategoryDisplayName,
	imageLoaderForBlogs
} from '../../../utils/Blogs';

interface Props {
	showcaseBlogDetails: ShowcaseBlogDetails;
}

const SmallFeatureCard: React.FC<Props> = (props) => {
	const { showcaseBlogDetails } = props;

	const { featuredImage, slug, title, categories } = showcaseBlogDetails;

	return (
		<Link passHref href={`/blogs/blog/${slug}`}>
			<a>
				<article className={`${styles.smallFeatureCard}`}>
					<div className={styles.bgImage}>
						<Image
							loader={imageLoaderForBlogs}
							src={featuredImage.node.sourceUrl}
							alt={featuredImage.node.altText}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className={styles.blogText}>
						<h2>{title}</h2>
						<p>
							{generateCategoryDisplayName(categories.nodes)} | 15 mins read
						</p>
					</div>
				</article>
			</a>
		</Link>
	);
};

export default SmallFeatureCard;

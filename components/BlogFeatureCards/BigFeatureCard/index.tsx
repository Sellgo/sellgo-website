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

const BigFeatureCard: React.FC<Props> = (props) => {
	const { showcaseBlogDetails } = props;

	const { featuredImage, slug, title, categories } = showcaseBlogDetails;

	return (
		<Link href={`/blogs/blog/${slug}`} passHref>
			<a>
				<article className={styles.bigFeatureCard}>
					<div className={styles.bgImage}>
						<Image
							loader={imageLoaderForBlogs}
							src={featuredImage.node.sourceUrl}
							alt={featuredImage.node.altText}
							layout="fill"
							objectFit="cover"
							priority
						/>
					</div>
					<div className={styles.blogText}>
						<h1>{title}</h1>
						<p>{generateCategoryDisplayName(categories.nodes)} | 25 Min Read</p>
					</div>
				</article>
			</a>
		</Link>
	);
};

export default BigFeatureCard;

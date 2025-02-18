import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Utils */
import {
	formatBlogReadTime,
	generateCategoryDisplayName,
	imageLoaderForBlogs,
	formatBlogDate
} from '../../../../utils/Blogs';

/* Types */
import { ShowcaseBlogDetails } from '../../../../interfaces/Blogs';

interface Props {
	blogDetails: ShowcaseBlogDetails;
}

const BigBlogCard: React.FC<Props> = (props) => {
	const {
		blogDetails: { slug, title, featuredImage, categories, readingTime, date }
	} = props;

	return (
		<article className={styles.bigCard}>
			<Link href={`/blogs/blog/${slug}`} passHref>
				<a>
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
						<h4>{title}</h4>
						<p className={styles.blogDetails}>
							{date && formatBlogDate(date.toString())}
							<br />
							{generateCategoryDisplayName(categories.nodes)}{' '}
							{formatBlogReadTime(readingTime.readtime)} Minute Read
						</p>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default BigBlogCard;

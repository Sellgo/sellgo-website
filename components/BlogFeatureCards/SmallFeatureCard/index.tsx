import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Types */
import { ShowcaseBlogDetails } from '../../../interfaces/Blogs';

/* Utils */
import {
	formatBlogReadTime,
	generateCategoryDisplayName,
} from '../../../utils/Blogs';

/* Components */
import BlogCardImage from '../../BlogCardImage';

interface Props {
	showcaseBlogDetails: ShowcaseBlogDetails;
}

const SmallFeatureCard: React.FC<Props> = (props) => {
	const { showcaseBlogDetails } = props;

	const {
		featuredImage,
		slug,
		title,
		categories,
		readingTime,
		placeholder
	} = showcaseBlogDetails;

	if (!showcaseBlogDetails) {
		return null;
	}

	return (
		<Link passHref href={`/blogs/blog/${slug}`}>
			<a>
				<article className={`${styles.smallFeatureCard}`}>
					<div className={styles.bgImage}>
						<BlogCardImage
							featuredImage={featuredImage}
							placeholder={placeholder}
							priority
						/>
					</div>
					<div className={styles.blogText}>
						<h2>{title}</h2>
						<p>
							{generateCategoryDisplayName(categories.nodes)}{' '}
							{formatBlogReadTime(readingTime.readtime)} mins read
						</p>
					</div>
				</article>
			</a>
		</Link>
	);
};

export default memo(SmallFeatureCard);

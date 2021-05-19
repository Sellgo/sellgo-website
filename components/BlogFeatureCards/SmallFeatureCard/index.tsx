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
	imageLoaderForBlogs,
	fallBackImageURL
} from '../../../utils/Blogs';

/* Components */
import ImageLoader from '../../ImageLoader';
import TextLoader from '../../TextLoader';

interface Props {
	showcaseBlogDetails: ShowcaseBlogDetails;
	loading: boolean;
}

const SmallFeatureCard: React.FC<Props> = (props) => {
	const { showcaseBlogDetails, loading } = props;

	const {
		featuredImage,
		slug,
		title,
		categories,
		readingTime
	} = showcaseBlogDetails;

	return (
		<Link passHref href={`/blogs/blog/${slug}`}>
			<a>
				<article className={`${styles.smallFeatureCard}`}>
					<div className={styles.bgImage}>
						{loading ? (
							<ImageLoader width={200} height={200} />
						) : (
							<Image
								loader={imageLoaderForBlogs}
								src={featuredImage?.node?.sourceUrl || fallBackImageURL}
								alt={featuredImage?.node?.altText}
								layout="fill"
								objectFit="cover"
								priority
							/>
						)}
					</div>
					<div className={styles.blogText}>
						{loading ? (
							<TextLoader />
						) : (
							<>
								<h2>{title}</h2>
								<p>
									{generateCategoryDisplayName(categories.nodes)}{' '}
									{formatBlogReadTime(readingTime.readtime)} mins read
								</p>
							</>
						)}
					</div>
				</article>
			</a>
		</Link>
	);
};

export default memo(SmallFeatureCard);

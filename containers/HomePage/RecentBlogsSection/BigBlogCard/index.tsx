import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Utils */

import { imageLoaderForBlogs } from '../../../../utils/Blogs';
import { FeaturedImage } from '../../../../interfaces/Blogs';

interface Props {
	blogDetails: {
		featuredImage: FeaturedImage;
		slug: string;
		title: string;
		date: string;
	};
}

const BigBlogCard: React.FC<Props> = (props) => {
	const {
		blogDetails: { slug, title, featuredImage }
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
							priority
						/>
					</div>

					<div className={styles.blogText}>
						<h4>{title}</h4>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default BigBlogCard;

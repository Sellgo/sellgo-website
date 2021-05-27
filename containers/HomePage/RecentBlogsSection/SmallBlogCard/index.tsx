import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Utility */
import { imageLoaderForBlogs } from '../../../../utils/Blogs';

/* Types */
import { FeaturedImage } from '../../../../interfaces/Blogs';

interface Props {
	blogDetails: {
		featuredImage: FeaturedImage;
		slug: string;
		title: string;
		date: string;
	};
}

const SmallBlogCard: React.FC<Props> = (props) => {
	const {
		blogDetails: { slug, title, featuredImage }
	} = props;

	return (
		<article className={styles.smallCard}>
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
					</div>
				</a>
			</Link>
		</article>
	);
};

export default SmallBlogCard;

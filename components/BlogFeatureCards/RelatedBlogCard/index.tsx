import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Utility */
import { imageLoaderForBlogs } from '../../../utils/Blogs';

interface Props {}

const RelatedBlogCard: React.FC<Props> = () => {
	return (
		<article className={styles.relatedBlogCard}>
			<div className={styles.bgImage}>
				<Image
					loader={imageLoaderForBlogs}
					src="https://blog.hubspot.com/hubfs/excel-marketing-templates.jpg"
					alt="Alt Text"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className={styles.blogText}>
				<h2>Problems with Amzon Seller</h2>
				<p>marketing | 15 mins read</p>
			</div>
		</article>
	);
};

export default RelatedBlogCard;

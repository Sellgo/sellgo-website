import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styles */
import styles from './index.module.scss';

/* Utils */
import { imageLoaderForBlogs } from '../../../utils/Blogs';

/* Types */
import { RelatedBlogDetails } from '../../../interfaces/Blogs';

interface Props {
	relatedBlogsDetails: RelatedBlogDetails;
}

const CategoryBlogCard: React.FC<Props> = () => {
	return (
		<article className={styles.categoryBlogCard}>
			<Link href="/" passHref>
				<a>
					<div className={styles.categoryBlogCard__Image}>
						<Image
							loader={imageLoaderForBlogs}
							src={`https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/
					2018/blogroll-images/marketing-blog-image.jpg`}
							alt="Alt Text"
							layout="fill"
							objectFit="cover"
						/>
					</div>

					<div className={styles.categoryBlogCard__Text}>
						<h3>Marketing</h3>
						<p>Insights, ideas and inspiration</p>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default CategoryBlogCard;

import React from 'react';
import Image from 'next/image';

/* Styles */
import styles from './index.module.scss';

/* Utils */
import { fallBackImageURL, imageLoaderForBlogs } from '../../../utils/Blogs';

/* Types */
import { FeaturedImage, Author } from '../../../interfaces/Blogs';

interface Props {
	title: string;
	author: Author;
	shortSummary: string;
	featuredImage: FeaturedImage;
}

const HeroBox: React.FC<Props> = (props) => {
	const { title, author, shortSummary, featuredImage } = props;

	return (
		<section className={styles.heroboxWrapper}>
			<div className={`${styles.herobox}`}>
				<div className={styles.herobox__Left}>
					<div className={`page-container ${styles.contentWrapper}`}>
						<h1>{title}</h1>
						<p>
							Written by{' '}
							<span>
								{author.firstName} {author.lastName}
							</span>
						</p>
						{/* eslint-disable-next-line react/no-danger */}
						<div dangerouslySetInnerHTML={{ __html: shortSummary }}></div>
						<div className={styles.rect} />
					</div>
				</div>

				<div className={styles.herobox__Right}>
					<Image
						loader={imageLoaderForBlogs}
						src={featuredImage?.node?.sourceUrl || fallBackImageURL}
						alt={featuredImage.node.altText}
						width={featuredImage.node.mediaDetails.width}
						height={featuredImage.node.mediaDetails.height}
						priority
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

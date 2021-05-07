import React from 'react';
import Image from 'next/image';

/* Styles */
import styles from './index.module.scss';

interface Props {
	pageUrl?: string;
	quote?: string;
}

const ShareBlogSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.shareBlogs}`}>
			<h3>Don&apos;t forget to share this post</h3>
			<div className={styles.shareLinksWrapper}>
				<a href="">
					<Image
						src="/twitterBlueLogo.svg"
						alt="Twitter Company Logo"
						width={20}
						height={20}
					/>
				</a>
				<a href="">
					<Image
						src="/facebookBlueLogo.svg"
						alt="Facebook Company Logo"
						width={20}
						height={20}
					/>
				</a>
				<a href="">
					<Image
						src="/instagramBlueLogo.svg"
						alt="Instagram Company Logo"
						width={20}
						height={20}
					/>
				</a>
				<a href="">
					<Image
						src="/youtubeBlueLogo.svg"
						alt="Youtube Company Logo"
						width={20}
						height={20}
					/>
				</a>
			</div>
		</section>
	);
};

export default ShareBlogSection;

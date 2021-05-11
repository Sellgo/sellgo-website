import React from 'react';
import Image from 'next/image';
import {
	TwitterShareButton,
	FacebookShareButton,
	LinkedinShareButton
} from 'react-share';

/* Styles */
import styles from './index.module.scss';

interface Props {
	pageUrl: string;
	title: string;
}

const ShareBlogSection: React.FC<Props> = (props) => {
	const { pageUrl, title } = props;

	const formatPageTitleForShare = `${title}.\n`;

	return (
		<section className={`page-container ${styles.shareBlogs}`}>
			<h3>Don&apos;t forget to share this post</h3>
			<div className={styles.shareLinksWrapper}>
				<TwitterShareButton
					url={pageUrl}
					title={formatPageTitleForShare}
					className={styles.shareButton}
				>
					<Image
						src="/twitterBlueLogo.svg"
						alt="Twitter Company Logo"
						width={20}
						height={20}
					/>
				</TwitterShareButton>

				<FacebookShareButton
					url={pageUrl}
					className={styles.shareButton}
					quote={formatPageTitleForShare}
				>
					<Image
						src="/facebookBlueLogo.svg"
						alt="Facebook Company Logo"
						width={20}
						height={20}
					/>
				</FacebookShareButton>

				<LinkedinShareButton
					url={pageUrl}
					title={formatPageTitleForShare}
					source="Amazon Product Research Tools for FBA Sellers| Sellgo"
					className={styles.shareButton}
				>
					<Image
						src="/linkedInBlueLogo.svg"
						alt="Linkedin Company Logo"
						width={20}
						height={20}
					/>
				</LinkedinShareButton>
			</div>
		</section>
	);
};

export default ShareBlogSection;

import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const BottomFooter: React.FC<Props> = () => {
	return (
		<div className={styles.bottomFooter}>
			<ul className={styles.socialLinks}>
				<li>
					<a href="#!" target="_blank" rel="noopener noreferrer">
						<img src="/twitterLogo.svg" alt="Social Media Icon for Twitter" />
					</a>
				</li>

				<li>
					<a href="#!" target="_blank" rel="noopener noreferrer">
						<img src="/facebookLogo.svg" alt="Social Media Icon for Facebook" />
					</a>
				</li>

				<li>
					<a href="#!" target="_blank" rel="noopener noreferrer">
						<img
							src="/instagramLogo.svg"
							alt="Social Media Icon for Instagram"
						/>
					</a>
				</li>

				<li>
					<a href="#!" target="_blank" rel="noopener noreferrer">
						<img src="/youtubeLogo.svg" alt="Social Media Icon for Youtube" />
					</a>
				</li>
			</ul>

			<ul className={styles.publicLinks}>
				<li>
					<Link href="/privacy-center" passHref>
						<a className="public-footer-link">Privacy Center</a>
					</Link>
				</li>
				<li>
					<Link href="/privacy-policy" passHref>
						<a className="public-footer-link">Privacy Policy</a>
					</Link>
				</li>
				<li>
					<Link href="/terms-of-use" passHref>
						<a className="public-footer-link">Terms of Use</a>
					</Link>
				</li>
				<li>
					<p className="copyright">Copyright &copy; Sellgo 2021</p>
				</li>
			</ul>
		</div>
	);
};

export default BottomFooter;

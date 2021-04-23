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
					<Link href="/" passHref>
						<a>
							<img src="/twitterLogo.svg" alt="Social Media Icon for Twitter" />
						</a>
					</Link>
				</li>

				<li>
					<Link href="/" passHref>
						<a>
							<img
								src="/facebookLogo.svg"
								alt="Social Media Icon for Facebook"
							/>
						</a>
					</Link>
				</li>

				<li>
					<Link href="/" passHref>
						<a>
							<img
								src="/instagramLogo.svg"
								alt="Social Media Icon for Instagram"
							/>
						</a>
					</Link>
				</li>

				<li>
					<Link href="/" passHref>
						<a>
							<img src="/youtubeLogo.svg" alt="Social Media Icon for Youtube" />
						</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.publicLinks}>
				<li>
					<Link href="/" passHref>
						<a className="public-footer-link">Privacy Policy</a>
					</Link>
				</li>
				<li>
					<Link href="/" passHref>
						<a className="public-footer-link">Privacy Policy</a>
					</Link>
				</li>
				<li>
					<Link href="/" passHref>
						<a className="public-footer-link">Terms of Use</a>
					</Link>
				</li>
				<li>
					<p className="copyright">Copyright &copy; Sellgo 2019</p>
				</li>
			</ul>
		</div>
	);
};

export default BottomFooter;

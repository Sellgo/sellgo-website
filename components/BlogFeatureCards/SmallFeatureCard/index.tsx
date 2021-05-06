import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const SmallFeatureCard: React.FC<Props> = () => {
	return (
		<Link passHref href="/">
			<a>
				<article className={styles.smallFeatureCard}>
					<div className={styles.bgImage}></div>
					<div className={styles.blogText}>
						<h2>The Company Guide To LifeCycle Marketing</h2>

						<p>Marketing | 15 mins read</p>
					</div>
				</article>
			</a>
		</Link>
	);
};

export default SmallFeatureCard;

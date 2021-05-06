import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const BigFeatureCard: React.FC<Props> = () => {
	return (
		<Link href="/" passHref>
			<a>
				<article className={styles.bigFeatureCard}>
					<div className={styles.bgImage}></div>
					<div className={styles.blogText}>
						<h1>
							How to Write a Blog Post: A Step-by-Step guide [+ Free Blog Post
							Template]
						</h1>
						<p>Marketing | 25 Min read</p>
					</div>
				</article>
			</a>
		</Link>
	);
};

export default BigFeatureCard;

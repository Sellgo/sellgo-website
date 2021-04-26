import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const RecommendationCard: React.FC<Props> = () => {
	return (
		<Link href="/" passHref>
			<a>
				<div className={styles.recomCard}></div>
			</a>
		</Link>
	);
};

export default RecommendationCard;

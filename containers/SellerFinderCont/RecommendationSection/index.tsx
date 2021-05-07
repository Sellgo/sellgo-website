import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import RecommendationCard from '../../../components/RecommendationCard';

interface Props {}

const RecommendationSection: React.FC<Props> = () => {
	return (
		<section className={styles.recomSectionWrapper}>
			<div className={`page-container ${styles.recomSection}`}>
				<h2>You May Also Like ...</h2>
				<p>
					The Seller Finder tool is just one part of Sellgo&apos;s toolbox to
					help your business grow. While each product is amazing on their own,
					they work best when used alongside one another.
				</p>

				<div className={styles.recomCardsWrapper}>
					<RecommendationCard />
					<RecommendationCard />
					<RecommendationCard />
				</div>
			</div>
		</section>
	);
};

export default RecommendationSection;

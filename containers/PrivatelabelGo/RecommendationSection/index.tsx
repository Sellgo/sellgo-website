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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore
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

import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { reviewData } from './data';

const ReviewSection = () => {
	return (
		<section className={`${styles.reviewSectionWrapper}`}>
			{reviewData.map((review, index) => (
				<div key={index} className={styles.reviewSectionContainer}>
					<h1>{review.title}</h1>
					<p>{review.description}</p>

					<div className={styles.reviewContainer}>
						<p className={styles.review}>"{review.review}"</p>

						<p className={styles.reviewer}>
							{review.reviewer}, {review.position}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default ReviewSection;

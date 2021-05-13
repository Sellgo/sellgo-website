import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const TestimonialsSection: React.FC<Props> = () => {
	return (
		<section className={styles.testimonialsSection}>
			<div className={`page-container ${styles.testimonialsSectionWrapper}`}>
				<h2>
					Our <span>Success</span> Stories
				</h2>

				<div className={styles.testimonialVideo}>
					<div className={styles.videoWrapper}>
						<video src=""></video>
					</div>
					<small>
						{`"I like that their profit margin and ROI are more accurate than any
							other tools I've used before."`}
					</small>
					<p>David W.</p>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;

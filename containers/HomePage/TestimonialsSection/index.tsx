import React from 'react';

/* Styling */
import styles from './index.module.scss';
import Carousel from '../../../components/Carousel';

interface Props {}

const TestimonialsSection: React.FC<Props> = () => {
	const videos = [
		(
			<div className={styles.testimonialVideo}>
				<div className={styles.videoWrapper}>
					<video controls>
						<track kind="captions" />
						<source src="Testimonial_David_W.mp4" type="video/mp4" />
						<source src="movie.ogg" type="video/ogg" />
						Your browser does not support the video tag.
					</video>
				</div>
			<small>
				{`"I like that their profit margin and ROI are more accurate than any
					other tools I've used before."`}
			</small>
			<p>David W.</p>
		</div>
		),
		(
			<div className={styles.testimonialVideo}>
			<div className={styles.videoWrapper}>
				<video controls>
					<track kind="captions" />
					<source src="Testimonial_David_W.mp4" type="video/mp4" />
					<source src="movie.ogg" type="video/ogg" />
					Your browser does not support the video tag.
				</video>
			</div>
			<small>
				{`"Video 2."`}
			</small>
			<p>David W.</p>
		</div>
		),
		(
			<div className={styles.testimonialVideo}>
			<div className={styles.videoWrapper}>
				<video controls>
					<track kind="captions" />
					<source src="Testimonial_David_W.mp4" type="video/mp4" />
					<source src="movie.ogg" type="video/ogg" />
					Your browser does not support the video tag.
				</video>
			</div>
			<small>
				{`"Video 3."`}
			</small>
			<p>David W.</p>
		</div>
		)
	]
	return (
		<section className={styles.testimonialsSection}>
			<div className={`page-container ${styles.testimonialsSectionWrapper}`}>
				<h2>
					Our <span>Success</span> Stories
				</h2>

				<Carousel items={videos} />
			</div>
		</section>
	);
};

export default TestimonialsSection;

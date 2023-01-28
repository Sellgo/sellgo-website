import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const TestimonialsSection: React.FC<Props> = () => {
	const testimonials = [
		{
			review: `We have very aggressive revenue growth targets. We knew that we needed Sellgo seller database that 
			would enable us to scale, and help us to deliver on our goals.`,
			author: 'Justin Willhite',
			position: 'CEO',
			company: 'Amazon Product Content Creator',
			image: 'justin.png'
		}
	];

	return (
		<section className={styles.testimonialsSection}>
			<h2>You’ll Be Up And Running In Minutes With AiStock</h2>
			<div className={`page container ${styles.testimonialsWrapper}`}>
				{testimonials.map((testimonial) => (
					<div className={styles.testimonialContainer}>
						<p>{testimonial.review}</p>
						<div className={styles.reviewerContainer}>
							<div className={styles.authorContainer}>
								<img src={`/${testimonial.image}`} alt="author" />
								<div>
									<div className={styles.author}>{testimonial.author}</div>
									<div className={styles.info}>
										{testimonial.position} of {testimonial.company}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialsSection;

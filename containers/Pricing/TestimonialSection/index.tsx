import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const TestimonialsSection: React.FC<Props> = () => {
	const testimonials = [
		{
			review: `AiStock really helped me to avoid stockout,
      when to plan my next order and forecast my sales with seasonality -
      simply been impossible with any other software or Spreadsheets.`,
			author: 'Andrew Erickson',
			position: 'CEO',
			company: 'Some Brand',
			image: 'andrewErickson.png'
		},
		{
			review: `AiStock really helped me to avoid stockout,
      when to plan my next order and forecast my sales with seasonality -
      simply been impossible with any other software or Spreadsheets.`,
			author: 'Andrew Erickson',
			position: 'CEO',
			company: 'Some Brand',
			image: 'andrewErickson.png'
		},
		{
			review: `AiStock really helped me to avoid stockout,
      when to plan my next order and forecast my sales with seasonality -
      simply been impossible with any other software or Spreadsheets.`,
			author: 'Andrew Erickson',
			position: 'CEO',
			company: 'Some Brand',
			image: 'andrewErickson.png'
		},
		{
			review: `AiStock really helped me to avoid stockout,
      when to plan my next order and forecast my sales with seasonality -
      simply been impossible with any other software or Spreadsheets.`,
			author: 'Andrew Erickson',
			position: 'CEO',
			company: 'Some Brand',
			image: 'andrewErickson.png'
		},
		{
			review: `AiStock really helped me to avoid stockout,
      when to plan my next order and forecast my sales with seasonality -
      simply been impossible with any other software or Spreadsheets.`,
			author: 'Andrew Erickson',
			position: 'CEO',
			company: 'Some Brand',
			image: 'andrewErickson.png'
		},
		{
			review: `AiStock really helped me to avoid stockout,
      when to plan my next order and forecast my sales with seasonality -
      simply been impossible with any other software or Spreadsheets.`,
			author: 'Andrew Erickson',
			position: 'CEO',
			company: 'Some Brand',
			image: 'andrewErickson.png'
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

import React from 'react';

/* Styling */
import Image from 'next/image';
import styles from './index.module.scss';
import Carousel from '../../../components/Carousel';

interface Props {}

const TestimonialsSection: React.FC<Props> = () => {
	const testimonials = [
		<div className={styles.testimonialTextWrapper}>
			<p>
				AiStock really helped me to avoid stockout, when to plan my next order
				and forecast my sales with seasonality - simply been impossible with any
				other software or Spreadsheets.
			</p>

			<div className={styles.testimonialAuthor}>
				<img src="andrewErickson.png" alt="author" />
				<div className={styles.authorDetails}>
					<span className={styles.name}>Andrew Erickson</span>
					<span className={styles.title}>CEO of Private Label Brand, Titan leader</span>
					<a
						className={styles.email}
						href="andrewknowsamazon.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						andrewknowsamazon.com
					</a>
				</div>
			</div>
		</div>
	];
	// const videos = [
	// 	<div className={styles.testimonialVideo}>
	// 		<div className={styles.videoWrapper}>
	// 			<video controls>
	// 				<track kind="captions" />
	// 				<source src="Testimonial_David_W.mp4" type="video/mp4" />
	// 				<source src="movie.ogg" type="video/ogg" />
	// 				Your browser does not support the video tag.
	// 			</video>
	// 		</div>
	// 		<small>
	// 			{`"I like that their profit margin and ROI are more accurate than any
	// 				other tools I've used before."`}
	// 		</small>
	// 		<p>David W.</p>
	// 	</div>
	// ];
	return (
		<section className={styles.testimonialsSection}>
			<div className={`page-container ${styles.testimonialsSectionWrapper}`}>
				<div className={styles.leadingBrands}>
					<h2>
						Take control your supply chain
						<br />
						Like these leading brands
					</h2>
					<div className={styles.socialProofIcons}>
						<Image
							src={'/TenFactorLogo.png'}
							alt="TenFactorLogo"
							width={100}
							height={100}
						/>
						<Image
							src={'/MetkixLogo.png'}
							alt="MetkixLogo"
							width={70}
							height={30}
						/>
						<Image
							src={'/LuxeLogo.png'}
							alt="LuxeLogo"
							width={100}
							height={52}
						/>
						<Image
							src={'/SkopeLogo.png'}
							alt="SkopeLogo"
							width={100}
							height={100}
						/>
						<Image src={'/BBLogo.png'} alt="BBLogo" width={100} height={17} />
						<Image src={'/BFLogo.png'} alt="BFLogo" width={100} height={50} />
					</div>
				</div>

				<Carousel items={testimonials} className={styles.carousel} />
			</div>
		</section>
	);
};

export default TestimonialsSection;

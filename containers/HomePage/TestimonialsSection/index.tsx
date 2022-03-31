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
						href="https://zonconpodcast.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						zonconpodcast.com
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
							<Image src={'/Poshmark.png'} alt="PoshmarkLogo" width={100} height={46} />
							<Image src={'/Corpay.png'} alt="CorpayLogo" width={100} height={28} />
							<Image src={'/Joom.png'} alt="JoomLogo" width={100} height={24} />
							<Image src={'/Clearbank.png'} alt="ClearbankLogo" width={100} height={18} />
							<Image src={'/Nest.png'} alt="NestLogo" width={100} height={38} />
							<Image src={'/Blackstone.png'} alt="BlackstoneLogo" width={100} height={24} />
							<Image src={'/Fitchbrew.png'} alt="FitchbrewLogo" width={100} height={34} />							<Image src={'/MetkixLogo.png'} alt="MetkixLogo" width={70} height={30} />
							<Image src={'/LuxeLogo.png'} alt="LuxeLogo" width={100} height={52}/>
							<Image src={'/Skopenow.png'} alt="SkopeLogo" width={100} height={19} />
							<Image src={'/BBLogo.png'} alt="BBLogo" width={100} height={17} />
							<Image src={'/Aspire.png'} alt="AspireLogo" width={100} height={29} />
					</div>
				</div>

				<Carousel items={testimonials} className={styles.carousel} />
			</div>
		</section>
	);
};

export default TestimonialsSection;

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
				We used Sellgo database to contact the top 5% of Amazon sellers. We sent
				personalized outreach letters and kept selling until we got a response.
				A lot of sellers were happy to see us, and we also acquired several
				long-term partners from the list for our business.
			</p>

			<div className={styles.testimonialAuthor}>
				{/* <img src="andrewErickson.png" alt="author" /> */}
				<div className={styles.authorDetails}>
					<span className={styles.name}>Dustin J.</span>
					<span className={styles.title}>Amazon brand agency</span>
					{/* <a
						className={styles.email}
						href="https://zonconpodcast.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						zonconpodcast.com
					</a> */}
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
			<h1>Your success fuels ours</h1>
			<div className={`page-container ${styles.testimonialsSectionWrapper}`}>
				<div className={styles.leadingBrands}>
					<h2>Trusted by 7,000+ businesses including</h2>
					<div className={styles.socialProofIcons}>
						<Image
							src={'/Poshmark.png'}
							alt="PoshmarkLogo"
							width={100}
							height={46}
						/>
						<Image
							src={'/Corpay.png'}
							alt="CorpayLogo"
							width={100}
							height={28}
						/>
						<Image src={'/Joom.png'} alt="JoomLogo" width={100} height={24} />
						<Image
							src={'/Clearbank.png'}
							alt="ClearbankLogo"
							width={100}
							height={18}
						/>
						<Image src={'/Nest.png'} alt="NestLogo" width={100} height={38} />
						<Image
							src={'/Blackstone.png'}
							alt="BlackstoneLogo"
							width={100}
							height={24}
						/>
						<Image
							src={'/Fitchbrew.png'}
							alt="FitchbrewLogo"
							width={100}
							height={34}
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
						{/* <Image
							src={'/Skopenow.png'}
							alt="SkopeLogo"
							width={100}
							height={19}
						/>
						<Image src={'/BBLogo.png'} alt="BBLogo" width={100} height={17} />
						<Image
							src={'/Aspire.png'}
							alt="AspireLogo"
							width={100}
							height={29}
						/> */}
					</div>
				</div>

				<Carousel items={testimonials} className={styles.carousel} />
			</div>
		</section>
	);
};

export default TestimonialsSection;

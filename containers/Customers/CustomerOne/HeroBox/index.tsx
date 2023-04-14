import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

const HeroBox = () => {
	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={styles.textColumn}>
					<h2 className={styles.animatedText}>
						Calling All Goal-hungry, Big-thinking Agencies
					</h2>
					<p className={`${styles.tagline}`}>
						Drip gives you the unbridled ability to dig into the details of how
						your clients’ customers are browsing, shopping, and engaging. Take
						that intel and build marketing strategies that fire off personalized
						journeys and messages automatically at any time. Possibilities are
						endless (just like your clients’ revenue).
					</p>

					<div className={styles.increaseInSalesContainer}>
						<div className={styles.increaseInSales}>
							<h3>90%</h3>
							<p>YoY increase in sales</p>
						</div>

						<div className={styles.increaseInSales}>
							<h3>90%</h3>
							<p>YoY increase in sales</p>
						</div>

						<div className={styles.increaseInSales}>
							<h3>90%</h3>
							<p>YoY increase in sales</p>
						</div>
					</div>
				</div>
				<div className={styles.imageColumn}>
					<div className={styles.heroImagewWrapper}>
						<Image
							src="/homepage_main_image.png"
							width={500}
							height={700}
							alt="alt"
							className={styles.heroImage}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

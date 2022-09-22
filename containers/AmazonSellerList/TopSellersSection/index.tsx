import React from 'react';

/* Styling */
import styles from './index.module.scss';
import Stepper from './Stepper';

const sellerData = [
	{
		title: 'United States',
		icon: 'sellerDatabase',
		country: 'UNITED STATES'
	},
	{
		title: 'Canada',
		icon: 'sellerDatabase',
		country: 'CANADA'
	},
	{
		title: 'United Kingdom',
		icon: 'sellerDatabase',
		country: 'UNITED KINGDOM'
	}
];

const HeroBox = () => {
	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<h2 className={styles.heading}>Instant Download</h2>

				<p className={styles.tagline}>
					As a web scraping agency, we scrape Amazon data every month. If you
					don't need a custom scraper though, you can download one of our
					off-the-shelf datasets below and save yourself time and money
					(scraping one list from scratch takes 3-4 weeks and over $3k).
				</p>

				<Stepper steps={sellerData} />
			</div>
		</section>
	);
};

export default HeroBox;

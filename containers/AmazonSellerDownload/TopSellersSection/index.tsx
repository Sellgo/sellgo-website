import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

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

				<div className={styles.topSellersContainer}>
					<div className={styles.left}>
						<p>UNITED STATES</p>
						<h2>Amazon.com Top Sellers</h2>

						<p>
							A dataset of the top active sellers from the Amazon US
							marketplace.
						</p>

						<div>
							Number of sellers: <span className={styles.value}>205,428</span>{' '}
							(includes 136,762 FBA sellers)
						</div>

						<div>
							Number of physical addresses:
							<span className={styles.value}>202,380</span>
						</div>

						<div>
							Number of emails: <span className={styles.value}>25,450</span>
						</div>

						<div>
							Number of websites: <span className={styles.value}>57,716</span>
						</div>

						<div>
							Number of phone numbers: 47,961 Last update: May 2022 Data points:
							Amazon URL, seller ID, FBA seller or no, business name, business
							address, seller country, state/region, zip code, email, website,
							phone number, store name, main category, store rating, last 30
							days seller ratings, last 90 days seller ratings, last 12 months
							seller ratings, lifetime seller ratings, number of products,
							brands sold, number of brands sold
						</div>

						<div>File format: Excel, CSV, JSON</div>

						<div>Instant download</div>

						<button className={styles.secondaryButton}>
							Open sample in Google Sheets
						</button>

						<div className={styles.buttonContainer}>
							<button className={styles.primaryButton}>
								Download database $895
							</button>

							<button className={styles.secondaryButton}>
								Need a custom seller list?
							</button>
						</div>
					</div>

					<div className={styles.right}>
						<Image src="/top-sellers.png" width={700} height={419} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

const HeroBox = () => {
	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={styles.textColumn}>
					<div className={styles.starContainer}>
						<Image src="/star-yellow.png" width={15} height={15} />
						<Image src="/star-yellow.png" width={15} height={15} />
						<Image src="/star-yellow.png" width={15} height={15} />
						<Image src="/star-yellow.png" width={15} height={15} />
						<Image src="/star-yellow.png" width={15} height={15} />
					</div>

					<p className={`${styles.tagline}`}>
						"Excellent customer service and EXCELLENT results!"
					</p>

					<h1 className={`${styles.heading}`}>Amazon Seller Download</h1>

					<p className={`${styles.tagline}`}>
						Get instant access to Amazon seller database. Updated regularly.
					</p>

					<div className={styles.ctaBox}>
						<button className={styles.availableSellerButton}>
							View available sellers
						</button>
						<button className={styles.requestDataButton}>
							Request specific data
						</button>
					</div>

					<h2 className={styles.subHeading}>
						These leading brands are growing their business with Sellgo
					</h2>
					<img src="/brands.png" width="100%" alt="brands" />
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

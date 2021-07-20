import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const GlobalSellersBannerSection: React.FC<Props> = () => {
	return (
		<section className={styles.globalSellersBannerWrapper}>
			<div className={styles.globalSellersBannerBG} />
			<div className={`page-container ${styles.globalSellersBanner}`}>
				<h2 className="secondary-heading">
					Sellgo helps Amazon sellers all over the world
				</h2>
				<div className={styles.statsRow}>
					<div className={styles.globalSellersStatCard}>
						<h3 className={styles.statsCount}>
							100M <span>+</span>
						</h3>
						<p className={styles.statsMessage}>Amazon Products</p>
					</div>
					<div className={styles.globalSellersStatCard}>
						<h3 className={styles.statsCount}>
							1M <span>+</span>
						</h3>
						<p className={styles.statsMessage}>Amazon Sellers</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GlobalSellersBannerSection;

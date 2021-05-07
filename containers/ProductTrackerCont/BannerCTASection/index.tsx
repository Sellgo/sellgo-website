import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const BannerCTASection: React.FC<Props> = () => {
	return (
		<section className={styles.bannerCTASectionWrapper}>
			<div className={styles.background} />

			<div className={`page-container ${styles.bannerCTASection}`}>
				<div className={styles.capsule} />

				<h2>Lorem ipsum dolor sit amet</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod
				</p>

				<div className={styles.ctaBannerCardsWrapper}>
					<div className={styles.ctaBannerCard}></div>
					<div className={styles.ctaBannerCard}></div>
					<div className={styles.ctaBannerCard}></div>
				</div>
			</div>
		</section>
	);
};

export default BannerCTASection;

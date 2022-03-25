import React from 'react';

import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={styles.infoSectionWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<div className={styles.infoSection__Text}>
					<h2>The Best Sales Projection with Seasonality Adjustor</h2>
					<p>
					Inventories come and go fast when your product is on demand. Accurate demand forecasting 
					is a critical factor in determining your business&apos; financial opportunities. We 
					calculate future sales using historical statistical approach, seasonality and fulfillable
					inventory data.
					</p>
					<p></p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image
						src="/product_rank_tracker_2.png"
						width={600}
						height={360}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

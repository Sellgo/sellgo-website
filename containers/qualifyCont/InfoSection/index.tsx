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
					<h2>Seamless operations</h2>
					<p>
						Reduce friction and inefficiency in your business with a unified
						platform. Track pricing, minimum order quantities, and production
						lead time across every supplier. See your entire multi-channel
						landscape with one dashboard for all your channels.
					</p>
					<p></p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image src="/extension_2.png" width={600} height={360} alt="" />
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

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
					<h2>The best tracking tool with Zapier integration.</h2>
					<p>
						Not ranking as high as you&apos;d wish on Amazon and Walmart can break a
						brand. Keyword Rank Tracker helps you to find out exactly what you
						need to do to boost your products&apos; ranking and gain visibility
						for your brand.
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

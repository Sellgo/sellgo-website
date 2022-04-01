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
					<h2>Find a supplier first, then go after the products</h2>
					<p>
						The Profit Finder calculates your profits for each product on the
						fly. It compares all the products in Amazon&apos;s catalog including
						product variations and multipacks. Hand-pick the winning products to
						begin sourcing and build your profits.
					</p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image src="/profit_finder_2.png" width={600} height={360} alt="" />
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

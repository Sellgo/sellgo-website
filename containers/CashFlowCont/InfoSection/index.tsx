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
					<h2>#1 pain killer for all ecommerce business</h2>
					<p>
						Project Your Actual Business Cash Flow - Monthly and Yearly!
						Calculate and Project Cashflow Instantly projecting out EVERY bit of
						income and expense you expect to have in the coming years: inventory
						payments, Amazon fees, PPC, freight, 3PL, launch, salaries, etc.
						Spend less time with spreadsheets and more time running your
						business, using all profits to grow.
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

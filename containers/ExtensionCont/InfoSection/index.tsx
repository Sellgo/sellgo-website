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
					<h2>The First Step to Selling on Amazon</h2>
					<p>
						Sellgo&apos;s Chrome Extension is definitely the first important
						step in your Amazon selling workflow. Get a bird&apos;s-eye view of
						a market when you browse through Amazon, it&apos;s easy, quick, and
						practical. Start your business growth from the browser extension.
					</p>
					<p></p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image src="/pfSection_600x360.png" width={600} height={360} alt="" />
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

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
					<h2>The Perfect Seller Locator</h2>
					<p>
						Whether you&apos;re looking for new products to sell or you&apos;re
						an agency that provides services to Amazon sellers, locate thousands
						of sellers across the planet. The Seller Map shows you a global map
						and narrows down where sellers are located.
					</p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image src="/pfSection_600x360.png" width={600} height={360} alt="" />
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

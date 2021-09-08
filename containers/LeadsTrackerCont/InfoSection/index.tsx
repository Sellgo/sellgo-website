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
					<h2>Wholesale Sourcing Has Never Been So Easy</h2>
					<p>
						Welcome to a better sourcing experience. The intelligent bulk
						calculator, Leads Tracker, calculates profit in the background
						for each product based on your supplier price.
					</p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image
						src="/searchmanagement_infosection.png"
						width={450}
						height={230}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

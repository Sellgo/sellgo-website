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
					<h2>Wholesale Sourcing Made Easy</h2>
					<p>
						Prioritize the suppliers you&apos;re wanting to reach out to, by
						quickly viewing the profit rate and product availability on Amazon..
					</p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image
						src="/search_management_2.png"
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

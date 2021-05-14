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
					<h2>The Ultimate Amazon Espionage Tool</h2>
					<p>
						As Amazon selling becomes more and more popular, there has been an
						emergence of sellers joining Amazon FBA bringing along a bounty of
						replenishable, profitable products. What if you could use a tool to
						spy on competitive sellers and take their products to grow your own
						catalog? Now you can.
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

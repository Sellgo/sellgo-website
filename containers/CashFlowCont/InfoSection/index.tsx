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
					<h2>Pain killer for all ecommerce business</h2>
					<p>
						Inventory is the lifeblood for any successful retail business. Being able to accurately 
						assess and replenish inventory is mission-critical for your business. So what if you didn’t 
						have to do any “guesstimations” or rely on hunches for filling up your inventory? You don’t.
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

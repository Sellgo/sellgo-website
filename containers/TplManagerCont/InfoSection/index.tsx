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
					<h2>Fast track your Amazon FBA &apos; 3PL inventory</h2>
					<p>
						With the power of AI and machine learning, AiStock analyzes your
						inventory levels, selling velocity and seasonality trends to
						automate your best-seller reordering needs: know when to restock,
						what to transfer, how much stock to buy from suppliers, how much
						stock to send from FBA to FBM (and vice versa), and get detailed
						reports that show progress over time, from factory lead time to
						domestics last leg.
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

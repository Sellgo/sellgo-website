import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.infoSection}`}>
			<div className={styles.infoSection__Text}>
				<h2>Expedite the Product Research Process</h2>
				<p>
				Products come and go, and so do profits. The Product Tracker tool empowers any seller to monitor their products and sales performances over time. Spot high demand products and new trends that can shape your Amazon strategy and success.
				</p>
				<p>
					
				</p>
			</div>
			<div className={styles.infoSection__Image}></div>
		</section>
	);
};

export default InfoSection;

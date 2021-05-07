import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.infoSection}`}>
			<div className={styles.infoSection__Text}>
				<h2>The Search Management Tool Makes Product Sourcing Easy</h2>
				<p>
					Simply upload catalogs files to our Search Management tool then sort
					and filter millions of products. Find winning products that will take
					your business to the next level.
				</p>
				<p></p>
			</div>
			<div className={styles.infoSection__Image}></div>
		</section>
	);
};

export default InfoSection;

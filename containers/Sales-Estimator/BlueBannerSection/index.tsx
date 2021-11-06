import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const BlackBannerSection: React.FC<Props> = () => {
	return (
		<section className={styles.globalSellersBannerWrapper}>
			<div className="page-container">
				<h1 className="secondary-heading">Amazon Sales Estimator</h1>
				<p>
					Use Sellgo Free Estimator Tool to check sales numbers for your
					competitors in a specific category on Amazon,
					{<br />}
					or any product in a specific category. This will give a more realistic
					sales estimates of a product launch based on historical sales data.
					{<br />}
					Check <a href="/extension"> Chrome Extension plan</a> so you can get
					the most out of the Estimator Tool!
				</p>
			</div>
		</section>
	);
};

export default BlackBannerSection;

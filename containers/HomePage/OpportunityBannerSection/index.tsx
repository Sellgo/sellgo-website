import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const OpportunityBannerSection: React.FC<Props> = () => {
	return (
		<section className={styles.globalSellersBannerWrapper}>
			<div className="page-container">
				<h2 className="secondary-heading">hi</h2>
			</div>
		</section>
	);
};

export default OpportunityBannerSection;

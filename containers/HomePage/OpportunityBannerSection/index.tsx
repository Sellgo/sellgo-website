import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const OpportunityBannerSection: React.FC<Props> = () => {
	return (
		<section className={styles.globalSellersBannerWrapper}>
			<h2 className="secondary-heading">
				The Amazon Opportunity Finder Your Business Will Love
			</h2>
		</section>
	);
};

export default OpportunityBannerSection;

import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import InfoCard from '../../../components/InfoCard';

/* Data */
import { featureSectionList } from './data';

interface Props {}

const OpportunityBannerSection: React.FC<Props> = () => {
	return (
		<section className={styles.opportunityBannerWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<h1> Boo </h1>
			</div>
		</section>
	);
};

export default OpportunityBannerSection;

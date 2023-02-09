import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import WhyWorkHereCard from '../WhyWorkHereCard';

/* Data */
import { commonFeaturesList } from './data';

interface Props {}

const WhyWorkHereSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.commonFeaturesSection}`}>
			<h2 className="secondary-heading">Why we love working here</h2>

			<div className={styles.featuresCardWrapper}>
				{commonFeaturesList.map((commonFeatureDetails: any) => {
					return <WhyWorkHereCard key={uuid()} {...commonFeatureDetails} />;
				})}
			</div>
		</section>
	);
};

export default WhyWorkHereSection;

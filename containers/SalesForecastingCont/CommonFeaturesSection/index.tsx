import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CommonFeatureCard from '../../../components/CommonFeatureCard';

/* Data */
import { commonFeaturesList } from './data';

interface Props {}

const CommonFeaturesSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.commonFeaturesSection}`}>
			<h2 className="secondary-heading">Track Your Keywords with Confidence</h2>
			<h3>
				Ensure your high-volume search keywords are boosting your product
				ranking. Don&apos;t miss out!
			</h3>

			<div className={styles.featuresCardWrapper}>
				{commonFeaturesList.map((commonFeatureDetails: any) => {
					return <CommonFeatureCard key={uuid()} {...commonFeatureDetails} />;
				})}
			</div>
		</section>
	);
};

export default CommonFeaturesSection;

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
			<h2 className="secondary-heading">Inventory replenishment made easy</h2>
			<h3>
			It’s easy to sell more when you have the right fulfillable inventory levels.
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

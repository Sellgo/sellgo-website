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
			<h2 className="secondary-heading">Manage your cash flow easily</h2>
			<h3>
			Instantly find into what products your cash should be invested in <br/>
			with year-end cashflow analytics of your inventory.
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

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
			<h2 className="secondary-heading">
				Sellgo is the tool you&apos;ll need for selling on Amazon
			</h2>
			<h3>
				Whether you are doing Wholesale, Brands, or Private Labels,
				<br />
				we help you build and grow your Amazon business.
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

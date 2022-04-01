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
				Sellgo&apos;s keyword finder comes in handy
			</h2>
			<h3>
				With just a of couple clicks, it will bring up the same keywords that
				your competitors are using, and you can use them in your listing!
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

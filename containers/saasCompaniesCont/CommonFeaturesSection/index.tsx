import React from 'react';
import { v4 as uuid } from 'uuid';
import RainbowText from '../../../components/RainbowText';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CommonFeatureCard from '../../../components/CommonFeatureCard';

/* Data */
import { commonFeaturesList } from './data';

interface Props {}

const CommonFeaturesSection: React.FC<Props> = () => {
	return (
		<section className={styles.commonFeaturesSectionWrapper}>
			<div className={`page-container ${styles.commonFeaturesSection}`}>
				<h2>
					<RainbowText type="pink_purple_blue_gradient">
						Discover how inventory planning is your secret weapon when it comes
						to scaling.
					</RainbowText>
				</h2>
				<h3>
					Whether you are doing brands, or private labels, we help you build and
					grow your Amazon business.
				</h3>

				<div className={styles.featuresCardWrapper}>
					{commonFeaturesList.map((commonFeatureDetails: any) => {
						return <CommonFeatureCard key={uuid()} {...commonFeatureDetails} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default CommonFeaturesSection;

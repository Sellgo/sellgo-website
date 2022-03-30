import React from 'react';
import RainbowText from '../../../components/RainbowText';

/* Styling */
import styles from './index.module.scss';

import { features } from './data';

interface Props {}

const FeaturesSection: React.FC<Props> = () => {
	return (
		<section className={styles.featuresSectionWrapper}>
			<div className={`page-container ${styles.featuresSection}`}>
				<h2 className={styles.featuresSectionTitle}>
					<RainbowText type="pink_purple_blue_gradient">
						The top 6 Amazon inventory pain points
					</RainbowText>
				</h2>
				<div className={styles.featuresWrapper}>
					{features.map((feature, index) => {
						return (
							<div className={styles.feature} key={index}>
								<div className={styles.title}>
									<img src={feature.icon} alt={feature.title} />
									{feature.title}
								</div>
								<p className={styles.subTitle}>{feature.subTitle}</p>
								<p className={styles.description}>{feature.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;

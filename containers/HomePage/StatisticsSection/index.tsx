import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';
import RainbowText from '../../../components/RainbowText';

/* Components */
import StatsCard from '../../../components/StatsCard';

/* Data */
import { statisticsData } from './data';

interface Props {}

const StatisticsSection: React.FC<Props> = () => {
	return (
		<section className={styles.statisticsSection}>
			<div className={`page-container ${styles.featuresSection}`}>
				<h2 className={styles.featuresSectionTitle}>
					<RainbowText type="pink_purple_blue_gradient">
						Approach the right decision maker at the right timing, and close
						more sales
					</RainbowText>
				</h2>
				<div className={`page-container ${styles.statisticsWrapper}`}>
					<div className={styles.statisticsGrid}>
						{statisticsData.map((statistics: any, index: number) => {
							return (
								<StatsCard
									key={uuid()}
									{...statistics}
									bottomStats={index > 3}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatisticsSection;

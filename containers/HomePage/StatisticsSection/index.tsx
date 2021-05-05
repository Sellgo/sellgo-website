import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import StatsCard from '../../../components/StatsCard';

/* Data */
import { statisticsData } from './data';

interface Props {}

const StatisticsSection: React.FC<Props> = () => {
	return (
		<section className={styles.statisticsSection}>
			<div className={`page-container ${styles.statisticsWrapper}`}>
				<h2 className="secondary-heading">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint
				</p>

				<div className={styles.statisticsGrid}>
					{statisticsData.map((statistics: any, index: number) => {
						return (
							<StatsCard key={uuid()} {...statistics} bottomStats={index > 3} />
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default StatisticsSection;

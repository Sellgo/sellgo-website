import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import StatsCard from '../../../components/StatsCard';

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
					<StatsCard
						statsCount={100}
						statsLabel="Popular Features"
						bottomStats={false}
					/>
					<StatsCard
						statsCount={100}
						statsLabel="Popular Features"
						bottomStats={false}
					/>
					<StatsCard
						statsCount={100}
						statsLabel="Popular Features"
						bottomStats={false}
					/>
					<StatsCard
						statsCount={100}
						statsLabel="Popular Features"
						bottomStats={false}
					/>
					<StatsCard
						statsCount={100}
						statsLabel="Popular Features"
						bottomStats
					/>
					<StatsCard
						statsCount={100}
						statsLabel="Popular Features"
						bottomStats
					/>
					<StatsCard
						statsCount={100}
						statsLabel="Popular Features"
						bottomStats
					/>
					<StatsCard
						statsCount={100}
						statsLabel="Popular Features"
						bottomStats
					/>
				</div>
			</div>
		</section>
	);
};

export default StatisticsSection;

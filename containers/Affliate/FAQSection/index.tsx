import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import StatsCard from '../../../components/StatsCard';

/* Data */
import { statisticsData } from './data';

interface Props {}

const FAQSection: React.FC<Props> = () => {
	return (
		// <div className={styles.firstCTASectionWrapper}>
			<div className={`${styles.statisticsSection}`}>
				<div className={styles.statisticsGrid}>
					{statisticsData.map((statistics: any, index: number) => {
						return (
							<StatsCard key={uuid()} {...statistics} bottomStats={index > 3} />
						);
					})}
				</div>
			</div>
		// </div>
	);
};

export default FAQSection;

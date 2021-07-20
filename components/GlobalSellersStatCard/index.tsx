import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	statsCount: string;
	statsLabel: string;
}

const GlobalSellersStatCard: React.FC<Props> = (props) => {
	const { statsCount, statsLabel } = props;

	return (
		<div className={styles.globalSellersStatCard}>
			<h3 className={styles.statsCount}>
				{statsCount} <span>+</span>
			</h3>
			<p className={styles.statsMessage}>{statsLabel}</p>
		</div>
	);
};

export default GlobalSellersStatCard;

import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	statsCount: string;
	statsLabel: string;
	bottomStats: boolean;
	iconImageLink: string;
}

const StatsCard: React.FC<Props> = (props) => {
	const { statsCount, statsLabel, bottomStats, iconImageLink } = props;

	const statsCardClassName = `${styles.statsCard} ${
		bottomStats ? styles.statsCard__bottom : ''
	}`;
	return (
		<div className={statsCardClassName}>
			<Image
				src={iconImageLink}
				alt={`${statsCount}+ ${statsLabel}`}
				width={35}
				height={35}
			/>
			<h3 className={styles.statsCount}>
				{statsCount} <span>+</span>
			</h3>
			<p className={styles.statsMessage}>{statsLabel}</p>
		</div>
	);
};

export default StatsCard;

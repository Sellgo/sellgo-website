import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	statsCount: number;
	statsLabel: string;
	bottomStats: boolean;
}

const StatsCard: React.FC<Props> = (props) => {
	const { statsCount, statsLabel, bottomStats } = props;

	const statsCardClassName = `${styles.statsCard} ${
		bottomStats ? styles.statsCard__bottom : ''
	}`;
	return (
		<div className={statsCardClassName}>
			<Image
				src="/medalIcon.svg"
				alt="Medl icon representing the successful statistics"
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

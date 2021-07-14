import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	description: string;
	bottomStats: boolean;
	iconImageLink: string;
}

const StatsCard: React.FC<Props> = (props) => {
	const { title, description, bottomStats, iconImageLink } = props;

	const statsCardClassName = `${styles.benefitCard} ${
		bottomStats ? styles.benefitCard__topCard : ''
	}`;
	return (
		<div className={statsCardClassName}>
			<Image src={iconImageLink} alt={`${title}`} width={35} height={35} />
			<p className={styles.benefitTitle}>{title}</p>
			<p className={styles.benefitDescription}>{description}</p>
		</div>
	);
};

export default StatsCard;

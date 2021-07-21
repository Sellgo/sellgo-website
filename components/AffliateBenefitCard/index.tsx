import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	description: string;
	bottomStats: boolean;
	iconImageLink: string;
}

const AffliateBenefitCard: React.FC<Props> = (props) => {
	const { title, description, bottomStats, iconImageLink } = props;
	const affliateBenefitCardClassName = classNames(`${styles.benefitCard}`, {
		[styles.benefitCard__topCard]: bottomStats
	});

	return (
		<div className={affliateBenefitCardClassName}>
			<Image src={iconImageLink} alt={`${title}`} width={35} height={35} />
			<h3 className={styles.benefitTitle}>{title}</h3>
			<p className={styles.benefitDescription}>{description}</p>
		</div>
	);
};

export default AffliateBenefitCard;

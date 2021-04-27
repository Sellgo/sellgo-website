import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	benefitsList: string[];
}

const FreeTrialBenefitsCard: React.FC<Props> = (props) => {
	const { title, benefitsList } = props;

	return (
		<div className={styles.benefitsCard}>
			<h3>{title}</h3>
			<ul className={styles.benefitsList}>
				{benefitsList.map((benefits: string) => {
					return (
						<li key={uuid()}>
							<Image
								src="/checkMark.svg"
								alt="The benefits is included"
								width={10}
								height={8}
							/>
							<span>{benefits}</span>
						</li>
					);
				})}
			</ul>

			<button className={styles.seeAllFeatures}>See all features</button>
		</div>
	);
};

export default FreeTrialBenefitsCard;

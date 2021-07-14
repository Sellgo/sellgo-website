import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import AffliateBenefitCard from '../../../components/AffliateBenefitCard';

/* Data */
import { benefitsData } from './data';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<div className={`${styles.benefitsSection}`}>
			<div className={styles.benefitsGrid}>
				{benefitsData.map((benefit: any, index: number) => {
					return (
						<AffliateBenefitCard
							key={uuid()}
							{...benefit}
							bottomStats={index < 2}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default BenefitsSection;

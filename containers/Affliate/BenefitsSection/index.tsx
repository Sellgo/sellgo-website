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
		<section className={`${styles.benefitsSection}`}>
			<div className={`page-container ${styles.benefitsGrid}`}>
				{benefitsData.map((benefit: any) => {
					return <AffliateBenefitCard key={uuid()} {...benefit} />;
				})}
			</div>
		</section>
	);
};

export default BenefitsSection;

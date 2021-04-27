import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FreeTrialBenefitsCard from '../../../components/FreeTrialBenefitsCard';

/* Data */
import { benefitsData } from './data';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<section className={`big-page-container ${styles.benefitsSection}`}>
			<h2 className="secondary-heading">Plus:</h2>

			<div className={styles.benefitsCardWrapper}>
				{benefitsData.map((benefits: any) => {
					return <FreeTrialBenefitsCard key={uuid()} {...benefits} />;
				})}
			</div>
		</section>
	);
};

export default BenefitsSection;

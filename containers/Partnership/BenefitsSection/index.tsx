import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PartnershipBenefitCard from '../../../components/PartnershipBenefitCard';

/* Data */
import { benefitsData } from './data';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<section className={`${styles.benefitsSection}`}>
			<h2 className="secondary-heading"> Why partner with us? </h2>
			<div className={`page-container ${styles.benefitsGrid}`}>
				{benefitsData.map((benefit: any) => {
					return <PartnershipBenefitCard key={uuid()} {...benefit} />;
				})}
			</div>
		</section>
	);
};

export default BenefitsSection;

import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import AffliateApprovalCard from '../../../components/AffliateApprovalCard';
import CTAButton from '../../../components/CTAButton';


/* Data */
import { approvalSteps } from './data';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<div className={`${styles.approvalSection}`}>
			<h2>Simple Approval Process</h2>
			<p>Most applicants are approved within 24 hours.</p>
			<div className={styles.approvalGrid}>
				{approvalSteps.map((approvalStep: any, index: number) => {
					return (
						<AffliateApprovalCard key={uuid()} {...approvalStep} index={index+1} 
							isLastCard={index === approvalSteps.length - 1} />
					);
				})}
			</div>
			<CTAButton
						type="primary"
						size="medium"
						navigateTo="/"
						className={`${styles.ctaButton}`}
					>
						Start Earning
			</CTAButton>
		</div>
	);
};

export default BenefitsSection;

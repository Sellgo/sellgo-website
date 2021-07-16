import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	description: string;
	isLastStep: boolean;
	index: number;
}

const AffliateApprovalCard: React.FC<Props> = (props) => {
	const { title, description, isLastStep, index } = props;
	return (
		<div className={styles.approvalCardWrapper}>
			<div className={styles.approvalCard}>
				<p className={styles.stepNumber}>{index}</p>
				<h3 className={styles.stepTitle}>{title}</h3>
				<p className={styles.stepDescription}>{description}</p>
			</div>
			{!isLastStep ? <div className={styles.line} /> : <div />}
		</div>
	);
};

export default AffliateApprovalCard;

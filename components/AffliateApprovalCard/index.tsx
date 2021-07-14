import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	description: string[];
	isLastStep: boolean;
	index: number;
}

const AffliateApprovalCard: React.FC<Props> = (props) => {
	const { title, description, isLastStep, index } = props;

	const approvalCardClassName = `${styles.approvalCard} ${
		isLastStep ? styles.approvalCard__topCard : ''
	}`;
	return (
		<div className={approvalCardClassName}>
			<h2 className={styles.stepNumber}>{index}</h2>
			<p className={styles.stepTitle}>
				{title}
			</p>

			{description.map((desc: String) => {
					return (
						<p className={styles.stepDescription}>{desc}</p>
					);
				})}
		</div>
	);
};

export default AffliateApprovalCard;

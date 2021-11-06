import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	customerCount: number;
}

const BetaPopupModal: React.FC<Props> = (props: Props) => {
	const { customerCount } = props;

	return (
		<div className={styles.betaPopupModal}>
			<h2> Welcome to our Beta program. </h2>
			<p className={styles.betaDescription}> 
				Enjoy 50% off 1st month or 1st year for the first 1,000 Beta users.
			</p>
			<p className={styles.purpleText}>
				<Image 
					src="/glassIcon.svg"
					width={100}
					height={80}
				/>
				&nbsp;{1000 - customerCount} seats left.
			</p>
			<p className={styles.betaTerms}>
				7-day money back guarantee too, no questions asked.
			</p>
		</div>
	);
};

export default BetaPopupModal;

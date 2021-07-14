import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const ClosingCTASection: React.FC<Props> = () => {
	return (
		<div className={`${styles.closingCTASectionBox}`}>
			<h1>Join the Sellgo Affiliate Community</h1>
			<p>
				Join the Sellgo Affiliate Partner Program and Earn 25% for Every
				Referral*
			</p>
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

export default ClosingCTASection;

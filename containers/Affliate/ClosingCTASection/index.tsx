import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const ClosingCTASection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.closingCTASectionBox}`}>
			<h2 className={styles.closingCTATitle}>
				Join the Sellgo Affiliate Community
			</h2>
			<p className={styles.closingCTAContent}>
				Join the Sellgo Affiliate Partner Program and Earn 25% for Every
				Referral*
			</p>
			<CTAButton
				type="primary"
				size="medium"
				navigateTo="/affiliates-signup"
				className={`${styles.ctaButton}`}
				asExternal
				newTarget
			>
				Start Earning
			</CTAButton>
		</section>
	);
};

export default ClosingCTASection;

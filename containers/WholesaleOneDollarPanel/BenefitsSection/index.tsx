import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import Apple from '../../../components/Icons/Apple';

/* Utils */
import { createFreeTrialLink } from '../../../utils/Referral';

const freeTrialLink = createFreeTrialLink();

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<section className={styles.benefitsSectionWrapper}>
			<div className={styles.bgCircle}></div>

			<div className={`big-page-container ${styles.benefitsSection}`}>
				<h2 className="secondary-heading">If you need ...</h2>

				<div className={styles.benefitsCardWrapper}>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Full Team Delegation</h3>
						<p>Delegate tasks and collaborate with team members.</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Scale at Your Pace</h3>
						<p>Start small with low commitment and scale up later.</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Billions of Data Points</h3>
						<p>Access tons of data at your fingertips.</p>
						<p></p>
					</div>
				</div>

				<div className={styles.benefitsCTAWrapper}>
					<CTAButton
						type="secondary"
						size="medium"
						navigateTo={'/pricing?type=monthly-and-annual-plans'}
						className={styles.benefitsCTA}
					>
						Check Our Premium Plan
					</CTAButton>
					<p>Pay only $1 for the first month of starter membership</p>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;

import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<section className={styles.benefitsSectionWrapper}>
			<div className={styles.bgCircle}></div>

			<div className={`big-page-container ${styles.benefitsSection}`}>
				<h2 className="secondary-heading">You may also like ...</h2>

				<div className={styles.benefitsCardWrapper}>
					<div className={styles.benefitsCard}>
						<Image
							src="/pricing-benefits-delegation.svg"
							width={50}
							height={35}
						/>
						<h3>Full Team Delegation</h3>
						<p>Delegate tasks and collaborate with team members.</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Image src="/pricing-benefits-scale.svg" width={50} height={45} />
						<h3>Scale at Your Pace</h3>
						<p>Start small with low commitment and scale up later.</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Image src="/pricing-benefits-data.svg" width={50} height={35} />
						<h3>Billions of Data Points</h3>
						<p>Access tons of data at your fingertips.</p>
						<p></p>
					</div>
				</div>

				<div className={styles.benefitsCTAWrapper}>
					<CTAButton
						type="secondary"
						variant="purplePinkRainbow"
						size="medium"
						navigateTo={'/pricing?type=monthly-and-annual-plans'}
						className={styles.benefitsCTA}
					>
						Check Our Premium Plans
					</CTAButton>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;

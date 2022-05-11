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
			<div className={`big-page-container ${styles.benefitsSection}`}>
				<h2 className="secondary-heading">You May Also Like ...</h2>

				<div className={styles.benefitsCardWrapper}>
					<div className={styles.benefitsCard}>
						<Image src="/dusIcon.svg" width={50} height={35} />
						<h3>Out of stock?</h3>
						<p>Am I currently at risk of stockout?</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Image src="/gantttrackIcon.svg" width={50} height={35} />
						<h3>Next order?</h3>
						<p>When can I place my next inventory order?</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Image src="/analyzeIcon.svg" width={50} height={35} />
						<h3>Sales?</h3>
						<p>How is my sales projection like?</p>
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
						Check our premium solution
					</CTAButton>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;

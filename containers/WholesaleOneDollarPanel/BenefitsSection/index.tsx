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
				<h2 className="secondary-heading">
					Get premium apps for more profitable conversations
				</h2>

				<div className={styles.benefitsCardWrapper}>
					<div className={styles.benefitsCard}>
						<Image src="/products-chorus.svg" width={50} height={35} />
						<h3>Chorus</h3>
						<p>Make every data insight count with statistical intelligence.</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Image src="/products-analyze.svg" width={50} height={35} />
						<h3>Analyze</h3>
						<p>Increase conversion with data-powered seller insight.</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Image src="/products-engage.svg" width={50} height={35} />
						<h3>Engage</h3>
						<p>
							Reach more sellers with insight-driven phone and address
							automation.
						</p>
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

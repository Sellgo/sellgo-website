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
				<h2 className="secondary-heading">Also Comes With...</h2>

				<div className={styles.benefitsCardWrapper}>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>1M+ Amazon Sellers</h3>
						<p>
							View a seller&apos;s entire inventory and discover new sellers
							with the same products.
						</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>450K+ U.S. Amazon Sellers</h3>
						<p>
							Analyze the amount of competition in your zip code to see if your
							business is viable.
						</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>700K+ Wholesale Sellers + 100K Private Label Sellers</h3>
						<p>
							For service providers looking to find new clientele, the Seller
							Map provides sellers that match your exact needs.
						</p>
						<p></p>
					</div>
				</div>

				<div className={styles.benefitsCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						navigateTo={freeTrialLink}
						className={styles.benefitsCTA}
						asExternal
						newTarget
					>
						Get Started
					</CTAButton>
					<p>Pay less on software, invest more in your business.</p>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;

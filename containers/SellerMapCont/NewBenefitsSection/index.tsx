import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ProductCard from '../../../components/ProductCard';
import CTAButton from '../../../components/CTAButton';
import { createFreeTrialLink } from '../../../utils/Referral';

/* Data */
import { newBenefitsData } from './data';

interface Props {}

const NewBenefitsSection: React.FC<Props> = () => {
	return (
		<section className={styles.newBenefitsSection} id="showCtaNavBar">
			<div className={`page-container ${styles.benefitsWrapper}`}>
				<h2 className="secondary-heading">
					Build relationships with local Amazon businesses
				</h2>

				<div className={styles.benefitsCardsWrapper}>
					{newBenefitsData.map((benefitsData: any, index: number) => {
						return (
							<ProductCard
								key={uuid()}
								{...benefitsData}
								reversed={(index + 1) % 2 === 0}
							/>
						);
					})}
				</div>

				<h2 className="secondary-heading-small">
					Discover sellers across the globe that match your needs with the
					Seller Map.
				</h2>
				<CTAButton
					type="primary"
					size="medium"
					variant="rainbow"
					navigateTo="/"
					asExternal
					newTarget
					className={styles.newBenefitsCTA}
				>
					Analyze sellers with free account
				</CTAButton>
				<p>Free forever. No credit card required. Instant access.</p>
			</div>
		</section>
	);
};

export default NewBenefitsSection;

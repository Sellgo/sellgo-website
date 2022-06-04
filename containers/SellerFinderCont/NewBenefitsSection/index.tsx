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
					A scope into the competitive landscape
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
					Scout out million of sellers and find profitable products and brands
					to build your catalog.
				</h2>
				<CTAButton
					type="primary"
					variant="rainbow"
					size="medium"
					navigateTo={createFreeTrialLink()}
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

import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ProductCard from '../../../components/ProductCard';
import CTAButton from '../../../components/CTAButton';

/* Data */
import { newBenefitsData } from './data';

interface Props {}

const NewBenefitsSection: React.FC<Props> = () => {
	return (
		<section className={styles.newBenefitsSection} id="showCtaNavBar">
			<div className={`page-container ${styles.benefitsWrapper}`}>
				<h2 className="secondary-heading">
					Where all your suppliers and products meet
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
					Manage dozens of suppliers and evaluate thousands <br />
					of potential products quickly and easily.
				</h2>
				<CTAButton
					type="secondary"
					size="small"
					variant="rainbow"
					navigateTo="/pricing?type=monthly-and-annual-plans"
					className={styles.newBenefitsCTA}
				>
					Start sourcing with Sellgo today
				</CTAButton>
			</div>
		</section>
	);
};

export default NewBenefitsSection;

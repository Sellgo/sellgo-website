import React, { useState } from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ContactInfo from '../../components/ContactInfo';
import CTAButton from '../../components/CTAButton';
import PricePlanToggleButton from '../../components/PricePlanToggleButton';
import Check from '../../components/Icons/Check';
import PricingPlansCardHead from '../../components/PricingPlansCard/PricingPlansCardHead';

/* Containers */
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';

/* Pricing Data */
import { sellerScoutGoPlanDetails } from '../Pricing/ProductsPanel/data';

/* Utils */
import { createCheckoutLink } from '../../utils/Referral';

interface Props {}

const SellerScoutProPanel: React.FC<Props> = () => {
	const [isMonthly, setIsMonthly] = useState(false);
	const dollarPlanLink = createCheckoutLink(
		isMonthly ? 'monthly' : 'yearly',
		'sellerscoutpro'
	);

	/* Handle price change */
	const handleChange = () => {
		setIsMonthly((prevState) => !prevState);
	};

	return (
		<>
			<section className={`big-page-container ${styles.sellerScoutSection}`}>
				<h2 className="secondary-heading">Seller Scout Pro Plan</h2>

				<p className={styles.info}>
					Discover 1M+ Amazon sellers at your fingertips
				</p>

				<PricePlanToggleButton
					isMonthly={isMonthly}
					handleChange={handleChange}
					className={styles.priceToggleButton}
				/>
			</section>

			{/* Modified free trial info box (needs refactoring later into compoistion if possible ) */}
			<section className="big-page-container">
				<div className={styles.featuresBox}>
					{/* Left Side */}
					<div className={styles.featuresBoxLeft}>
						<div className={styles.featuresBoxLeft__Desc}>
							<h2>{sellerScoutGoPlanDetails.title}</h2>
							<p>{sellerScoutGoPlanDetails.description}</p>
						</div>
						<ul className={styles.detailsListWrapper}>
							{sellerScoutGoPlanDetails.productsList.map(
								(product: string, index: number) => {
									return (
										<li className={styles.detailsList} key={index}>
											<span>
												<Check fill="#3b4557" width={10} height={8} />
											</span>
											{product}
										</li>
									);
								}
							)}
						</ul>
					</div>
					{/* Right Side */}
					<div className={styles.featuresBoxRight}>
						<div className={styles.sellerScoutPriceCardWrapper}>
							<PricingPlansCardHead
								// product details
								name={'Seller Scout Pro'}
								monthlyPrice={sellerScoutGoPlanDetails.monthlyPrice}
								annualPrice={sellerScoutGoPlanDetails.annualPrice}
								desc={''}
								// plan details
								isMonthly={isMonthly}
								// // optional props for comparision table cards
								withToggle
								className={styles.sellerScoutPriceCard}
								handleChange={handleChange}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Featuires Section */}
			<FeaturesSection />

			{/* Benefits Section */}
			<BenefitsSection dollarPlanLink={dollarPlanLink} />

			{/* Contact Info Section  */}
			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="" />
			</section>

			{/* Other Info Section  */}
			<section className={`big-page-container ${styles.otherInfoSection}`}>
				<h2 className="secondary-heading">
					Only pay less than a dime for each Amazon sellers you can find in
					Sellgo&apos;s 1M Seller Database!
				</h2>

				<div className={styles.otherInfoCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						navigateTo={dollarPlanLink}
						className={styles.otherInfoCTA}
						asExternal
						newTarget
					>
						Get started
					</CTAButton>
					<p>Pay less on software, invest more in your business.</p>
				</div>
			</section>
		</>
	);
};

export default SellerScoutProPanel;

import React, { useState } from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricingInfoAlert from '../../components/PricingInfoAlert';
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
import { createFreeTrialLink } from '../../utils/Referral';

const freeTrialLink = createFreeTrialLink();

interface Props {}

const SellerScoutProPanel: React.FC<Props> = () => {
	const [isMonthly, setIsMothly] = useState(false);

	/* Handle price change */
	const handleChange = () => {
		setIsMothly((prevState) => !prevState);
	};

	return (
		<>
			<section className={`big-page-container ${styles.sellerScoutSection}`}>
				<h2 className="secondary-heading">Seller Scout Pro Plan</h2>

				<p className={styles.info}>
					Access all of Sellgo&apos;s free trial Amazon tools and integrate them
					into your Amazon business.
				</p>

				<PricePlanToggleButton
					isMonthly={isMonthly}
					handleChange={handleChange}
					className={styles.priceToggleButton}
				/>

				<PricingInfoAlert
					className={styles.freeTrialInfoAlert}
					navigateTo="/pricing?type=monthly-and-annual-plans"
					navigateLabel="Learn More"
					head={`Pay only $1 for your first month when you sign-up for a yearly subscription!`}
					desc={``}
					background="#F2EFE4"
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
								id={0}
								name={'Seller Scout Pro'}
								productsDatabase={sellerScoutGoPlanDetails.productsDatabase}
								salesEstimateCount={sellerScoutGoPlanDetails.salesEstimate}
								monthlyPrice={sellerScoutGoPlanDetails.monthlyPrice}
								annualPrice={sellerScoutGoPlanDetails.annualPrice}
								desc={''}
								// plan details
								isMonthly={isMonthly}
								planName={'Seller Scout Pro'}
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
			<BenefitsSection />

			{/* Contact Info Section  */}
			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="" />
			</section>

			{/* Other Info Section  */}
			<section className={`big-page-container ${styles.otherInfoSection}`}>
				<h2 className="secondary-heading">
					Maximize Your Profits with Sellgo&apos;s Free Tools!
				</h2>

				<div className={styles.otherInfoCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						navigateTo={freeTrialLink}
						className={styles.otherInfoCTA}
						asExternal
						newTarget
					>
						Try Now 7-day Free Trial
					</CTAButton>
					<p>We offer a 7-day free trial with no credit card required.</p>
				</div>
			</section>
		</>
	);
};

export default SellerScoutProPanel;

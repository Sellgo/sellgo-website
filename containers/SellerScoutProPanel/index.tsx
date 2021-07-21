import React, { useState } from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricingInfoAlert from '../../components/PricingInfoAlert';
import ContactInfo from '../../components/ContactInfo';
import CTAButton from '../../components/CTAButton';
import PricePlanToggleButton from '../../components/PricePlanToggleButton';
import Check from '../../components/Icons/Check';

/* Containers */
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';

/* Config */
import AppConfig from '../../config';

/* Pricing Data */
// import { sellerScoutGoPlanDetails } from '../Pricing/ProductsPanel/data';
import PricingPlansCardHead from '../../components/PricingPlansCard/PricingPlansCardHead';

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

			{/* Modified free trial info box (needs refactoring later ) */}
			<section className="big-page-container">
				<div className={styles.featuresBox}>
					<div className={styles.featuresBoxLeft}>
						<div className={styles.featuresBoxLeft__Desc}>
							<h2>Free Trial</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
						</div>
						<ul className={styles.detailsListWrapper}>
							<li className={styles.detailsList}>
								<span>
									<Check fill="#3b4557" width={10} height={8} />
								</span>
								Browser Extension
							</li>

							<li className={styles.detailsList}>
								<span>
									<Check fill="#3b4557" width={10} height={8} />
								</span>
								Search Management
							</li>

							<li className={styles.detailsList}>
								<span>
									<Check fill="#3b4557" width={10} height={8} />
								</span>
								Profit Finder
							</li>

							<li className={styles.detailsList}>
								<span>
									<Check fill="#3b4557" width={10} height={8} />
								</span>
								Product Tracker
							</li>

							<li className={styles.detailsList}>
								<span>
									<Check fill="#3b4557" width={10} height={8} />
								</span>
								Seller Finder
							</li>
						</ul>
					</div>
					<div className={styles.featuresBoxRight}>
						<div className={styles.sellerScoutPriceCardWrapper}>
							<PricingPlansCardHead
								// product details
								id={0}
								name={'Seller Scout Pro'}
								productsDatabase={1000}
								salesEstimateCount={1000}
								monthlyPrice={49}
								annualPrice={348}
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

			<FeaturesSection />
			<BenefitsSection />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="" />
			</section>

			<section className={`big-page-container ${styles.otherInfoSection}`}>
				<h2 className="secondary-heading">
					Maximize Your Profits with Sellgo&apos;s Free Tools!
				</h2>

				<div className={styles.otherInfoCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						navigateTo={`${AppConfig.APP_URL}/signup?type=free`}
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

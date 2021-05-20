import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Element } from 'react-scroll';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricingInfoAlert from '../../../components/PricingInfoAlert';
import PricingPlansCard from '../../../components/PricingPlansCard';
import FreeTrialCTABox from '../../../components/FreeTrialCTABox';
import AllfeaturesTable from '../../../components/AllFeaturesTable';
import PricePlanToggleButton from '../../../components/PricePlanToggleButton';
import ContactInfo from '../../../components/ContactInfo';
import PricingPlansCardHead from '../../../components/PricingPlansCard/PricingPlansCardHead';

/* Containers */
import FAQSection from '../FAQSection';

/* Constants */
import { getAllFeaturesForPlans } from '../../../data/Pricing';

/* Types */
import { FAQDetails } from '../../../interfaces/FAQ';

interface Props {
	planName: string;
	productsIncluded: any;
	selectedPlanType: number;
	faqData: FAQDetails;
}

const PricingPlansSection: React.FC<Props> = (props) => {
	const { planName, productsIncluded, selectedPlanType, faqData } = props;

	const [isMonthly, setIsMonthly] = useState(false);

	const allPlanFeatures = getAllFeaturesForPlans(planName);

	return (
		<>
			<section className={styles.pricingPlansSectionWrapper}>
				<div className={`big-page-container ${styles.pricingPlansSection}`}>
					<div className={styles.planName}>
						<span></span>
						<h2>{planName}</h2>
					</div>

					<div className={styles.planShortSummary}>
						<p> Try Our Premium Tools and Access Real-Data for $1!</p>
					</div>

					{/* Show only for Pay $1 plan */}
					{selectedPlanType === 1 && (
						<PricingInfoAlert
							navigateTo="/"
							navigateLabel="Learn More"
							head={`Start selling on Amazon today with Sellgo's free tools`}
							desc={`Want to try our advanced Amazon tools? Review our FBA tools and pricing 
							packages.Our premium tools empower you to track and research more products 
							to optimize your Amazon business.`}
							background="#F2EFE4"
						/>
					)}

					{/* Show for all expect pay as you go */}
					{/* revert back to 1 when new plan is added */}
					{selectedPlanType !== 2 && (
						<PricePlanToggleButton
							isMonthly={isMonthly}
							handleChange={() => setIsMonthly(!isMonthly)}
							className={styles.paymentModeToggle}
						/>
					)}

					{/* Show for $1 1st month */}
					{selectedPlanType === 2 && (
						<PricingInfoAlert
							navigateTo="/"
							navigateLabel="Learn More"
							head={`Pay only $1 for your first month when you sign-up for a yearly subscription!`}
							desc={` `}
							background="#F2EFE4"
							className={styles.extraPricingInfo}
						/>
					)}
				</div>
			</section>

			<section
				className={`big-page-container ${styles.pricingPlansCardWrapper}`}
			>
				{productsIncluded.map((product: any) => {
					return (
						<PricingPlansCard
							key={uuid()}
							{...product}
							planName={planName}
							isMonthly={isMonthly}
						/>
					);
				})}
			</section>

			<section className={`big-page-container ${styles.allFeaturesSection}`}>
				<Element name="featuresTable">
					{allPlanFeatures.map((feature: any) => {
						return (
							<AllfeaturesTable
								header={feature.header}
								body={feature.body}
								key={uuid()}
							/>
						);
					})}
				</Element>

				<div className={styles.priceSummaryWrapper}>
					{productsIncluded.map((product: any) => {
						return (
							<div className={styles.priceSummaryCard} key={uuid()}>
								<PricingPlansCardHead
									{...product}
									isMonthly={isMonthly}
									className={styles.tablePricingSummary}
									planName={planName}
									withToggle
									handleChange={() => setIsMonthly(!isMonthly)}
								/>
							</div>
						);
					})}
				</div>
			</section>

			<FreeTrialCTABox className={styles.freeTrialBox} />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="Lorem ipsum dolor sit Lorem ipsum dolor sit" />
			</section>

			{faqData.data.length > 0 && <FAQSection faqData={faqData.data} />}
		</>
	);
};

export default PricingPlansSection;

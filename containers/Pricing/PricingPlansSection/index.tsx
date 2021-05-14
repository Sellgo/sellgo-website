import React, { useState } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricingInfoAlert from '../../../components/PricingInfoAlert';
import PricingPlansCard from '../../../components/PricingPlansCard';
import FreeTrialCTABox from '../../../components/FreeTrialCTABox';
import AllfeaturesTable from '../../../components/AllFeaturesTable';
import PricePlanToggleButton from '../../../components/PricePlanToggleButton';

// import ContactInfo from '../../../components/ContactInfo';

/* Containers */
// import MarketplaceSection from '../MarketplaceSection';
// import RecommendedBundlesSection from '../RecommendedBundlesSection';
// import CalculateYourPriceSection from '../CalculateYourPriceSection';
// import ExtraInfoSection from '../ExtraInfoSection';
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

	const [isMonthly, setIsMonthly] = useState(true);

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

						<a href="#calculatePrice" className="anchor">
							Calculate your price
							<Image
								src="/downArrow.svg"
								alt="Select the arrow to move to calculate your price section"
								width={10}
								height={10}
								priority
							/>
						</a>
					</div>

					{/* Show only for Pay as you go plans */}
					{selectedPlanType === 1 && (
						<PricingInfoAlert navigateTo="/" navigateLabel="Learn More" />
					)}

					{/* Show for all expect pay as you go */}
					{selectedPlanType !== 1 && (
						<PricePlanToggleButton
							isMonthly={isMonthly}
							handleChange={() => setIsMonthly(!isMonthly)}
							className={styles.paymentModeToggle}
						/>
					)}
				</div>
			</section>

			<section
				className={`big-page-container ${styles.pricingPlansCardWrapper}`}
			>
				{/* Show for all other plans except pay as you go */}

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
				{allPlanFeatures.map((feature: any) => {
					return (
						<AllfeaturesTable
							header={feature.header}
							body={feature.body}
							key={uuid()}
						/>
					);
				})}
			</section>

			<FreeTrialCTABox className={styles.freeTrialBox} />

			{/* Remove section for now */}

			{/* <MarketplaceSection /> */}
			{/* <RecommendedBundlesSection /> */}

			{/* <section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo />
			</section> */}

			{/* <CalculateYourPriceSection selectedPlanType={selectedPlanType} /> */}
			{/* <ExtraInfoSection /> */}
			{faqData.data.length > 0 && <FAQSection faqData={faqData.data} />}
		</>
	);
};

export default PricingPlansSection;

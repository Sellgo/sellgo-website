import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricingInfoAlert from '../../../components/PricingInfoAlert';
import PricingPlansCard from '../../../components/PricingPlansCard';
import FreeTrialCTABox from '../../../components/FreeTrialCTABox';
import AllfeaturesTable from '../../../components/AllFeaturesTable';
// import ContactInfo from '../../../components/ContactInfo';

/* Containers */
// import MarketplaceSection from '../MarketplaceSection';
// import RecommendedBundlesSection from '../RecommendedBundlesSection';
// import CalculateYourPriceSection from '../CalculateYourPriceSection';
// import ExtraInfoSection from '../ExtraInfoSection';
import FAQSection from '../FAQSection';

/* Constants */
import { getAllFeaturesForPlans } from '../../../data/Pricing';

interface Props {
	planName: string;
	productsIncluded: any;
	selectedPlanType: number;
}

const PricingPlansSection: React.FC<Props> = (props) => {
	const { planName, productsIncluded, selectedPlanType } = props;

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
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

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
					{selectedPlanType === 1 && <PricingInfoAlert />}
				</div>

				<div className={`big-page-container ${styles.pricingPlansCardWrapper}`}>
					{/* Show for all other plans except pay as you go */}

					{productsIncluded.map((product: any) => {
						return (
							<PricingPlansCard key={uuid()} {...product} planName={planName} />
						);
					})}
				</div>
			</section>

			<section className={`big-page-container ${styles.allFeaturesSection}`}>
				{allPlanFeatures.map((feature: any) => {
					return (
						<AllfeaturesTable header={feature.header} body={feature.body} />
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
			<FAQSection />
		</>
	);
};

export default PricingPlansSection;

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
	infoAlertMessage: any;
	subscriptionDetails: any;
}

const PricingPlansSection: React.FC<Props> = (props) => {
	const {
		planName,
		productsIncluded,
		infoAlertMessage,
		selectedPlanType,
		faqData,
		subscriptionDetails
	} = props;

	const [isMonthly, setIsMonthly] = useState(false);

	const nonEnterprisePlans = subscriptionDetails.filter(
		(plan: any) => plan.id !== 3
	);

	const getComparisionStats = nonEnterprisePlans.reduce(
		(acc: any, plan: any) => {
			return {
				...acc,
				[plan.name.toLocaleLowerCase()]: {
					productTracker: plan.track_limit,
					salesEstimateLimit: plan.sales_estimation_limit,
					profitFinder: plan.synthesis_limit,
					leadsTracker: plan.leads_track_limit,
					trackHistory: Math.round(plan.track_history_limit / 30)
				}
			};
		},
		{}
	);

	const allPlanFeatures = getAllFeaturesForPlans(planName, getComparisionStats);

	const infoAlertDetails = isMonthly
		? infoAlertMessage.monthly
		: infoAlertMessage.yearly;

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

					{/* Show for all expect pay as you go */}
					{/* revert back to 1 when new plan is added */}
					{selectedPlanType !== 2 && (
						<PricePlanToggleButton
							isMonthly={isMonthly}
							handleChange={() => setIsMonthly(!isMonthly)}
							className={styles.paymentModeToggle}
						/>
					)}

					{selectedPlanType === 1 && (
						<PricingInfoAlert {...infoAlertDetails} background="#F2EFE4" />
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
							id={product.id}
							name={product.name}
							desc={product.desc}
							featureSubName={product.featureSubName}
							featuresLists={product.featuresLists}
							planName={planName}
							isMonthly={isMonthly}
							subscriptionDetails={subscriptionDetails}
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
									id={product.id}
									name={product.name}
									desc={product.desc}
									isMonthly={isMonthly}
									className={styles.tablePricingSummary}
									planName={planName}
									withToggle
									handleChange={() => setIsMonthly(!isMonthly)}
									subscriptionDetails={subscriptionDetails}
								/>
							</div>
						);
					})}
				</div>
			</section>

			<FreeTrialCTABox className={styles.freeTrialBox} />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="" />
			</section>

			{faqData.data.length > 0 && <FAQSection faqData={faqData.data} />}
		</>
	);
};

export default PricingPlansSection;

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

/* Constants */
import { getAllFeaturesForPlans } from '../../../data/Pricing';

interface Props {
	planName: string;
	summary: string;
	infoAlertMessage: any;
	productsIncluded: any;
	selectedPlanType: number;
}

const PricingPlansSection: React.FC<Props> = (props) => {
	const { planName, summary, productsIncluded, infoAlertMessage } = props;

	const [isMonthly, setIsMonthly] = useState(false);

	/* Get all features based on plan names */
	const allPlanFeatures = getAllFeaturesForPlans(planName);

	/* Select the message alert message based on mode */
	const infoAlertDetails = isMonthly
		? infoAlertMessage.monthly
		: infoAlertMessage.yearly;

	return (
		<>
			<section className={styles.pricingPlansSectionWrapper}>
				<div className={`big-page-container ${styles.pricingPlansSection}`}>
					<div className={styles.planName}>
						<h2>{planName}</h2>
					</div>

					<div className={styles.planShortSummary}>
						<p>{summary}</p>
					</div>

					<PricePlanToggleButton
						isMonthly={isMonthly}
						handleChange={() => setIsMonthly(!isMonthly)}
						className={styles.paymentModeToggle}
					/>

					<PricingInfoAlert
						{...infoAlertDetails}
						background="#F2EFE4"
						className={styles.singleLineAlert}
					/>
				</div>
			</section>

			{/*  Main pricing cards section */}
			<section
				className={`big-page-container ${styles.pricingPlansCardWrapper}`}
			>
				{productsIncluded.map((product: any) => {
					return (
						<PricingPlansCard
							key={uuid()}
							id={product.id}
							name={product.name}
							productsDatabase={product.productsDatabase}
							salesEstimateCount={product.salesEstimateCount}
							monthlyPrice={product.monthlyPrice}
							annualPrice={product.annualPrice}
							desc={product.desc}
							featureSubName={product.featureSubName}
							featuresLists={product.featuresLists}
							// Plan details
							planName={planName}
							isMonthly={isMonthly}
						/>
					);
				})}
			</section>

			{/*  Main pricing table comparision section section */}
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

				{/* Summary pricing card head below table  */}
				<div className={styles.priceSummaryWrapper}>
					{productsIncluded.map((product: any) => {
						return (
							<div className={styles.priceSummaryCard} key={uuid()}>
								<PricingPlansCardHead
									// product details
									id={product.id}
									name={product.name}
									productsDatabase={product.productsDatabase}
									salesEstimateCount={product.salesEstimateCount}
									monthlyPrice={product.monthlyPrice}
									annualPrice={product.annualPrice}
									desc={product.desc}
									// plan details
									isMonthly={isMonthly}
									planName={planName}
									// optional props for comparision table cards
									withToggle
									className={styles.tablePricingSummary}
									handleChange={() => setIsMonthly(!isMonthly)}
								/>
							</div>
						);
					})}
				</div>
			</section>

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="" />
			</section>

			{/*<FreeTrialCTABox className={styles.freeTrialBox} />*/}
		</>
	);
};

export default PricingPlansSection;

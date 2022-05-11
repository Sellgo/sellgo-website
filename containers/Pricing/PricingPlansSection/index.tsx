import React, { useState } from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import { Element } from 'react-scroll';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricingPlansCard from '../../../components/PricingPlansCard';
import AllfeaturesTable from '../../../components/AllFeaturesTable';
import PricePlanToggleButton from '../../../components/PricePlanToggleButton';
import ContactInfo from '../../../components/ContactInfo';
import PricingPlansCardHead from '../../../components/PricingPlansCard/PricingPlansCardHead';

/* Constants */
import { getAllFeaturesForPlans } from '../../../data/Pricing';
import FreePlanCtaBox from '../../../components/FreePlanCtaBox';

interface Props {
	planName: string;
	summary: string;
	productsIncluded: any;
	showOnlyGeneralPlanDetails?: boolean;
}

const PricingPlansSection: React.FC<Props> = (props) => {
	const {
		planName,
		summary,
		productsIncluded,
		showOnlyGeneralPlanDetails
	} = props;

	const [isMonthly, setIsMonthly] = useState(false);

	/* Get all features based on plan names */
	const allPlanFeatures = getAllFeaturesForPlans(planName);

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
					<div className={styles.paymentModeToggle}>
						<PricePlanToggleButton
							isMonthly={isMonthly}
							handleChange={() => setIsMonthly(!isMonthly)}
							className={styles.paymentModeToggleButton}
						/>
						<div className={styles.paymentToggleTextWrapper}>
							<Image
								width={25}
								height={21}
								src="/handPointIcon.svg"
								alt="handpointicon"
							/>
							<p className={styles.paymentToggleText}>Up to 5 months free.</p>
						</div>
					</div>
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
							name={product.name}
							isNew={product.isNew}
							monthlyPrice={product.monthlyPrice}
							annualPrice={product.annualPrice}
							desc={product.desc}
							featureSubName={product.featureSubName}
							featuresLists={product.featuresLists}
							setIsMonthly={setIsMonthly}
							// Plan details
							isMonthly={isMonthly}
						/>
					);
				})}
			</section>

			{/*  Main pricing table comparision section section */}
			{!showOnlyGeneralPlanDetails && (
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
										name={product.name}
										monthlyPrice={product.monthlyPrice}
										setIsMonthly={setIsMonthly}
										annualPrice={product.annualPrice}
										desc={product.desc}
										isNew={product.isNew}
										// plan details
										isMonthly={isMonthly}
										// optional props for comparision table cards
										withToggle
										className={styles.tablePricingSummary}
										handleChange={() => setIsMonthly(!isMonthly)}
										isSmall
									/>
								</div>
							);
						})}
					</div>
				</section>
			)}

			{!showOnlyGeneralPlanDetails && (
				<section className={`big-page-container ${styles.contactInfoSection}`}>
					<ContactInfo />
				</section>
			)}
			{!showOnlyGeneralPlanDetails && (
				<FreePlanCtaBox
					className={styles.dollarPlanCTABox}
					isPrimary
					planName="free"
				/>
			)}
		</>
	);
};

PricingPlansSection.defaultProps = {
	showOnlyGeneralPlanDetails: false
};

export default PricingPlansSection;

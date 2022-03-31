import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { features, plans, competitors } from './data';

import CTAButton from '../../../components/CTAButton';

interface Props {}

const FeatureComparisonTable: React.FC<Props> = () => {
	const [showAllFeatures, setShowAllFeatures] = React.useState<boolean>(false);
	return (
		<section className={styles.featureComparisonWrapper}>
			<div className={`page-container ${styles.featureComparisonSection}`}>
				<h2 className={styles.title}>Why AiStock is Better</h2>

				<div className={styles.featureRow}>
					<p className={`${styles.headerText} ${styles.headerText__plan}`}>
						{' '}
						Launching{' '}
					</p>
					<p className={`${styles.headerText} ${styles.headerText__plan}`}>
						{' '}
						Supply Chain{' '}
					</p>
					<p className={styles.headerText}> </p>
					<p className={`${styles.headerText} ${styles.headerText__sellgo}`}>
						{' '}
						AiStock
					</p>
					<p className={styles.headerText}> Spreadsheet</p>
					<p className={styles.headerText}> Amazon Seller Central</p>
					<p className={styles.headerText}> Other Software</p>
				</div>
				<div className={styles.featureComparisonGrid}>
					{features.map((feature: any, index: number) => {
						/* Dont show the feature table is unexpanded and feature is not shown on default */
						if (!showAllFeatures && !feature.showOnDefault) {
							return null;
						}

						return (
							<div className={styles.featureRow} key={index}>
								<div
									className={`${styles.checkboxCell} ${styles.checkboxCell__plan}`}
								>
									{feature.featureAvailableInPlans.includes(
										plans.LAUNCHING
									) && (
										<Image
											src="/checkSquare.svg"
											width={15}
											height={15}
											alt="check-square"
										/>
									)}
								</div>
								<div
									className={`${styles.checkboxCell} ${styles.checkboxCell__plan}`}
								>
									{feature.featureAvailableInPlans.includes(
										plans.SUPPLY_CHAIN
									) && (
										<Image
											src="/checkSquare.svg"
											width={15}
											height={15}
											alt="check-square"
										/>
									)}
								</div>
								<div className={styles.featureNameCell}>
									<span className={styles.featureNameCellContent}>
										{feature.name}
										{feature.isNew && (
											<div className={styles.newLabel}> New </div>
										)}
									</span>
								</div>
								<div className={styles.checkboxCell}>
									{feature.featureAvailableInCompetitors.includes(
										competitors.AISTOCK
									) && (
										<Image
											src="/checkSquareBlue.svg"
											width={15}
											height={15}
											alt="check-square"
										/>
									)}
								</div>
								<div className={styles.checkboxCell}>
									{feature.featureAvailableInCompetitors.includes(
										competitors.SPREADSHEET
									) && (
										<Image
											src="/checkSquare.svg"
											width={15}
											height={15}
											alt="check-square"
										/>
									)}
								</div>
								<div className={styles.checkboxCell}>
									{feature.featureAvailableInCompetitors.includes(
										competitors.AMAZON_SELLER_CENTRAL
									) && (
										<Image
											src="/checkSquare.svg"
											width={15}
											height={15}
											alt="check-square"
										/>
									)}
								</div>
								<div
									className={`${styles.checkboxCell} ${styles.checkboxCell__last}`}
								>
									{feature.featureAvailableInCompetitors.includes(
										competitors.OTHER_SOFTWARE
									) && (
										<Image
											src="/checkSquare.svg"
											width={15}
											height={15}
											alt="check-square"
										/>
									)}
								</div>
							</div>
						);
					})}
				</div>
				<button
					className={styles.viewAllFeatures}
					onClick={() => setShowAllFeatures(!showAllFeatures)}
				>
					{showAllFeatures ? 'View less >' : 'View all comparisons >'}
				</button>
				<CTAButton
					type="primary"
					variant="white"
					size="medium"
					navigateTo="/pricing"
					className={styles.pricingButton}
				>
					Check our pricing
				</CTAButton>
			</div>
		</section>
	);
};

export default FeatureComparisonTable;

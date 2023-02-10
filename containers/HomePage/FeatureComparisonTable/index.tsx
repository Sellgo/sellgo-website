import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { features, plans, competitors } from './data';

import CTAButton from '../../../components/CTAButton';

/* Utils */
import { createFreeTrialLink } from '../../../utils/Referral';

interface Props {}

const FeatureComparisonTable: React.FC<Props> = () => {
	const [showAllFeatures, setShowAllFeatures] = React.useState<boolean>(false);

	return (
		<section className={styles.featureComparisonWrapper}>
			<div className={`page-container ${styles.featureComparisonSection}`}>
				<h2 className={styles.title}>Why Sellgo?</h2>

				<div className={styles.featureRow}>
					<p className={`${styles.headerText} ${styles.headerText__plan}`}>
						{' '}
						Self-serve/ usage-based{' '}
					</p>
					<p className={`${styles.headerText} ${styles.headerText__plan}`}>
						{' '}
						Enterprise/ account-based{' '}
					</p>
					<p className={styles.headerText}> </p>
					<p className={`${styles.headerText} ${styles.headerText__sellgo}`}>
						{' '}
						Sellgo webapp
					</p>
					<p className={styles.headerText}> Other list download</p>
					<p className={styles.headerText}> Other ABM software</p>
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
										plans.SELFSERVE
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
										plans.ENTERPRISE
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
										competitors.SELLGO
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
										competitors.LIST
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
										competitors.OTHER
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
					navigateTo={createFreeTrialLink()}
					asExternal
					newTarget
					className={styles.pricingButton}
				>
					Try for FREE
				</CTAButton>
			</div>
		</section>
	);
};

export default FeatureComparisonTable;

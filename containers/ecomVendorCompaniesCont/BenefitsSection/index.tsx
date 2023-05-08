import React from 'react';
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import BenefitsPanel from '../../../components/BenefitsPanel';

/* Data */
import { benefitsData } from './data';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	resetIdCounter();

	return (
		<section className={styles.benefitsSectionWrapper}>
			<div className={`page-container ${styles.benefitsSection}`}>
				<h2>Optimize your supply chain</h2>

				<Tabs
					className={styles.benefitsTabsWrapper}
					selectedTabClassName={styles.benefitsTab__Selected}
				>
					<TabList className={styles.benefitsTabList}>
						{benefitsData.map((benefitDetails: any) => {
							return (
								<Tab key={uuid()} className={styles.benefitsTab}>
									{benefitDetails.title}
								</Tab>
							);
						})}
					</TabList>

					{benefitsData.map((benefitsDetails: any) => {
						const {
							benefitSummary,
							popularFeaturesList,
							details,
							imageUrl,
							imageWidth,
							imageHeight
						} = benefitsDetails;
						return (
							<TabPanel key={uuid()} className={styles.benefitsTabPanel}>
								<BenefitsPanel
									benefitSummary={benefitSummary}
									popularFeaturesList={popularFeaturesList}
									details={details}
									imageUrl={imageUrl}
									imageWidth={imageWidth}
									imageHeight={imageHeight}
								/>
							</TabPanel>
						);
					})}
				</Tabs>
			</div>
		</section>
	);
};

export default BenefitsSection;

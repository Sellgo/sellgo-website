import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';

/* Data */
import {
	wholesaleFeatures,
	privateLabelFeatures,
	serviceProviderFeatures
} from './data';

/* Components */
import Stepper from '../../../components/Stepper';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const StepperInfoSection: React.FC<Props> = () => {
	const [selectedPlanType, setSelectedPlanType] = useState<number>(0);
	resetIdCounter();

	return (
		<section
			className={`page-container ${styles.stepperInfoSectionWrapper}`}
			id="stepperSection"
		>
			<h2 className={styles.stepperTitle}>How Sellgo Works For</h2>
			<Tabs
				selectedTabClassName={styles.stepperTab__selected}
				onSelect={setSelectedPlanType}
				selectedIndex={selectedPlanType}
			>
				<TabList className={styles.tabListWrapper}>
					<Tab key={uuid()} className={styles.stepperTab}>
						WHOLESALE
						<div className={styles.underline} />
					</Tab>
					<Tab key={uuid()} className={styles.stepperTab}>
						PRIVATE LABEL
						<div className={styles.underline} />
					</Tab>
					<Tab key={uuid()} className={styles.stepperTab}>
						SERVICE PROVIDER
						<div className={styles.underline} />
					</Tab>
				</TabList>
				<TabPanel key={uuid()}>
					<Stepper steps={wholesaleFeatures} />
				</TabPanel>
				<TabPanel key={uuid()}>
					<Stepper steps={privateLabelFeatures} />
				</TabPanel>
				<TabPanel key={uuid()}>
					<Stepper steps={serviceProviderFeatures} />
				</TabPanel>
			</Tabs>
		</section>
	);
};

export default StepperInfoSection;

import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

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
					<Tab className={styles.stepperTab}>WHOLESALE<div className={styles.underline}/></Tab>
					<Tab className={styles.stepperTab}>PRIVATE LABEL<div className={styles.underline}/></Tab>
					<Tab className={styles.stepperTab}>SERVICE PROVIDER<div className={styles.underline}/></Tab>
				</TabList>
				<TabPanel>
					<Stepper steps={wholesaleFeatures} />
				</TabPanel>
				<TabPanel>
					<Stepper steps={privateLabelFeatures} />
				</TabPanel>
				<TabPanel>
					<Stepper steps={serviceProviderFeatures} />
				</TabPanel>
			</Tabs>
		</section>
	);
};

export default StepperInfoSection;

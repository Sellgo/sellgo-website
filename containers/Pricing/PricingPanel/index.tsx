import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const PricingPanel: React.FC<Props> = () => {
	return (
		<Tabs selectedTabClassName={styles.pricingPanelTab__Selected}>
			<TabList className={styles.pricingPanelTabList}>
				<Tab className={styles.pricingPanelTab}>Free Trial</Tab>
				<Tab className={styles.pricingPanelTab}>Pay As You Go</Tab>
				<Tab className={styles.pricingPanelTab}>Wholesale</Tab>
				<Tab className={styles.pricingPanelTab}>Private Label</Tab>
			</TabList>

			<TabPanel>Free Trial Plan Details</TabPanel>
			<TabPanel>This is for the pay as you go</TabPanel>
			<TabPanel>Wholesale</TabPanel>
			<TabPanel>Private label</TabPanel>
		</Tabs>
	);
};

export default PricingPanel;

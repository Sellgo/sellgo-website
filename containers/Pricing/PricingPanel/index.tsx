import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const PricingPanel: React.FC<Props> = () => {
	return (
		<Tabs
			className={styles.pricingPanelTabsWrapper}
			selectedTabClassName={styles.pricingPanelTab__Selected}
		>
			<TabList className={styles.pricingPanelTabList}>
				<Tab className={styles.pricingPanelTab}>Free Trial</Tab>
				<Tab className={styles.pricingPanelTab}>Pay As You Go</Tab>
				<Tab className={styles.pricingPanelTab}>Wholesale</Tab>
				<Tab className={styles.pricingPanelTab}>Private Label</Tab>
			</TabList>

			<TabPanel style={{ minHeight: '70vh' }}></TabPanel>
		</Tabs>
	);
};

export default PricingPanel;

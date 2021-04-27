import React from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';

/* Styling */
import styles from './index.module.scss';

/* Conatiners */
import PricingPlansSection from '../PricingPlansSection';

interface Props {}

const ProductsPanel: React.FC<Props> = () => {
	// Only for server side isomorphic apps
	resetIdCounter();

	return (
		<Tabs selectedTabClassName={styles.pricingPanelTab__Selected}>
			<TabList className={styles.pricingPanelTabList}>
				<Tab className={styles.pricingPanelTab}>Free Trial</Tab>
				<Tab className={styles.pricingPanelTab}>Pay As You Go</Tab>
				<Tab className={styles.pricingPanelTab}>Wholesale</Tab>
				<Tab className={styles.pricingPanelTab}>Private Label</Tab>
			</TabList>

			<TabPanel>
				<PricingPlansSection />
			</TabPanel>

			<TabPanel>
				<PricingPlansSection />
			</TabPanel>

			<TabPanel>
				<PricingPlansSection />
			</TabPanel>

			<TabPanel>
				<PricingPlansSection />
			</TabPanel>
		</Tabs>
	);
};

export default ProductsPanel;

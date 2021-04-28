import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Conatiners */
import PricingPlansSection from '../PricingPlansSection';
import FreeTrialPanel from '../../FreeTrialPanel';

/* Data */
import { planTypes, plansAndProductsDetails } from './data';

interface Props {}

const ProductsPanel: React.FC<Props> = () => {
	// Only for server side isomorphic apps
	resetIdCounter();

	const [selectedPlanType, setSelectedPlanType] = useState<number>(0);

	const handlePlanSelectChange = (index: number, lastIndex: number) => {
		// [0,1,2,3,4]=['Free Trial','Pay As You Go',WholeSale','Private Label','Seller Scout Pro']

		if (!index) {
			setSelectedPlanType(lastIndex);
		} else {
			setSelectedPlanType(index);
		}
	};

	return (
		<Tabs
			selectedTabClassName={styles.pricingPanelTab__Selected}
			onSelect={handlePlanSelectChange}
		>
			<TabList className={styles.pricingPanelTabList}>
				{planTypes.map((planType: any) => {
					return (
						<Tab key={uuid()} className={styles.pricingPanelTab}>
							{planType.name}
							{planType.isNew && <span className={styles.newBadge}>New</span>}
						</Tab>
					);
				})}
			</TabList>

			{/* Seperation of concern for free trial tab */}
			<TabPanel>
				<FreeTrialPanel />
			</TabPanel>
			{plansAndProductsDetails.map((plan: any) => {
				return (
					<TabPanel key={uuid()}>
						<PricingPlansSection
							{...plan}
							selectedPlanType={selectedPlanType}
						/>
					</TabPanel>
				);
			})}
		</Tabs>
	);
};

export default ProductsPanel;

import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';

/* Styling */
import styles from './index.module.scss';

/* Conatiners */
import PricingPlansSection from '../PricingPlansSection';
import FreeTrialPanel from '../../FreeTrialPanel';

/* Data */
import { planTypes, plansAndProductsDetails } from './data';

/* Types */
import { FAQDetails } from '../../../interfaces/FAQ';

/* Utils */
import {
	generateQueryFromTabIndex,
	generateTabIndexFromQuery
} from '../../../utils/Pricing';

interface Props {
	faqDetails: FAQDetails[];
}

const ProductsPanel: React.FC<Props> = (props) => {
	// Only for server side isomorphic apps
	resetIdCounter();

	const { faqDetails } = props;
	const router = useRouter();

	const queryCollection = router.query || {};

	const tabIndex = generateTabIndexFromQuery(queryCollection.type);

	const [selectedPlanType, setSelectedPlanType] = useState<number>(tabIndex);

	useEffect(() => {
		const tabIndex = generateTabIndexFromQuery(queryCollection.type);
		setSelectedPlanType(tabIndex);
	}, [router]);

	const handlePlanSelectChange = (index: number, lastIndex: number) => {
		// [0,1,2,3,4]=['Free Trial', 'Monthly and Annual Plans']

		if (index === undefined || index === null) {
			setSelectedPlanType(lastIndex);
			router.push({
				pathname: '/pricing',
				query: {
					type: generateQueryFromTabIndex(1)
				}
			});
		} else {
			router.push({
				pathname: '/pricing',
				query: {
					type: generateQueryFromTabIndex(index)
				}
			});
			setSelectedPlanType(index);
		}
	};

	return (
		<Tabs
			selectedTabClassName={styles.pricingPanelTab__Selected}
			onSelect={handlePlanSelectChange}
			// defaultIndex={2}
			selectedIndex={selectedPlanType}
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
				<FreeTrialPanel faqData={faqDetails[0]} />
			</TabPanel>

			{plansAndProductsDetails.map((plan: any) => {
				return (
					<TabPanel key={uuid()}>
						<PricingPlansSection
							planName={plan.planName}
							summary={plan.summary}
							infoAlertMessage={plan.infoAlertMessage}
							productsIncluded={plan.productsIncluded}
							selectedPlanType={selectedPlanType}
							faqData={faqDetails[selectedPlanType]}
						/>
					</TabPanel>
				);
			})}
		</Tabs>
	);
};

export default ProductsPanel;

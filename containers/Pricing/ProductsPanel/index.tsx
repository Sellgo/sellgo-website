import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';

/* Styling */
import styles from './index.module.scss';

/* Conatiners */
import PricingPlansSection from '../PricingPlansSection';
import WholesaleOneDollarPanel from '../../WholesaleOneDollarPanel';
import PrivateLabelOneDollar from '../../PrivateLabelOneDollar';

/* Data */
import { planTypes, plansAndProductsDetails } from './data';

/* Utils */
import {
	DEFAULT_TAB_VALUE,
	generateQueryFromTabIndex,
	generateTabIndexFromQuery
} from '../../../utils/Pricing';

/* Types */
import { FAQDetails } from '../../../interfaces/FAQ';
import FAQSection from '../FAQSection';

interface Props {
	productsPanelFaqList: FAQDetails[];
}

const ProductsPanel: React.FC<Props> = (props) => {
	// Only for server side isomorphic apps
	resetIdCounter();

	const { productsPanelFaqList } = props;

	const router = useRouter();

	const queryCollection = router.query || {};

	const tabIndex = generateTabIndexFromQuery(queryCollection.type);

	const [selectedPlanType, setSelectedPlanType] = useState<number>(tabIndex);

	useEffect(() => {
		const tabIndex = generateTabIndexFromQuery(queryCollection.type);
		setSelectedPlanType(tabIndex);
	}, [router]);

	/* Handle Plan slection Change */
	const handlePlanSelectChange = (index: number, lastIndex: number) => {
		// [0,1,2,3,4]=[Wholesale $1, 'Private Label $1, Monthly and Annual Plans]

		if (index === undefined || index === null) {
			// perform shallow routing on pricing to prevent new data fetch on get static props
			setSelectedPlanType(lastIndex);
			router.push(
				`/pricing?type=${generateQueryFromTabIndex(DEFAULT_TAB_VALUE)}`,
				undefined,
				{
					shallow: true
				}
			);
		} else {
			router.push(
				`/pricing?type=${generateQueryFromTabIndex(index)}`,
				undefined,
				{
					shallow: true
				}
			);
			setSelectedPlanType(index);
		}
	};

	return (
		<>
			<Tabs
				selectedTabClassName={styles.pricingPanelTab__Selected}
				onSelect={handlePlanSelectChange}
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
					<WholesaleOneDollarPanel />
				</TabPanel>

				<TabPanel>
					<PrivateLabelOneDollar />
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
							/>
						</TabPanel>
					);
				})}
			</Tabs>

			{/* FAQ Section */}
			<FAQSection faqData={productsPanelFaqList[selectedPlanType].data} />
		</>
	);
};

export default ProductsPanel;

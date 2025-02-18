import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';

/* Styling */
import Image from 'next/image';
import styles from './index.module.scss';

/* Conatiners */
import PricingPlansSection from '../PricingPlansSection';
import FAQSection from '../FAQSection';
// import EnterprisePanel from '../EnterprisePanel';

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
				<div className={styles.tabsContainer}>
					{/* <div className={styles.tabsHeading}>Pricing and Plans</div> */}
					<TabList className={styles.pricingPanelTabList}>
						{planTypes.map((planType: any) => {
							/*
							Hiding private label tab
							Search "HIDING-PRIVATE-LABEL" to see where other changes were made
						*/
							if (planType.name !== 'Private Label $1') {
								return (
									<Tab key={uuid()} className={styles.pricingPanelTab}>
										<div className={styles.headingContainer}>
											<Image
												src={`/${planType.img}`}
												width="25px"
												height="auto"
											/>
											<h2>
												{planType.name}
												{planType.isNew && (
													<span className={styles.newBadge}>New</span>
												)}
											</h2>
										</div>
										<p>{planType.content}</p>
									</Tab>
								);
							} else {
								return <span key={uuid()} />;
							}
						})}
					</TabList>
				</div>

				{/* HIDING-PRIVATE-LABEL */}
				{/* <TabPanel>
					<PrivateLabelOneDollar />
				</TabPanel> */}

				{/* Generic pricing plans section	 */}
				{plansAndProductsDetails.map((plan: any) => {
					return (
						<TabPanel key={uuid()}>
							<PricingPlansSection
								planName={plan.planName}
								summary={plan.summary}
								productsIncluded={plan.productsIncluded}
							/>
						</TabPanel>
					);
				})}

				{/* <TabPanel key={uuid()}>
					<EnterprisePanel />
				</TabPanel> */}
			</Tabs>

			{/* FAQ Section */}
			<FAQSection faqData={productsPanelFaqList[selectedPlanType].data} />
		</>
	);
};

export default ProductsPanel;

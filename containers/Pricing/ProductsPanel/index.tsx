import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';

/* Styling */
import styles from './index.module.scss';

/* Conatiners */
import PricingPlansSection from '../PricingPlansSection';
import FAQSection from '../FAQSection';
import WholesaleOneDollarPanel from '../../WholesaleOneDollarPanel';

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
import CalculateYourPriceSection from '../CalculateYourPriceSection';
import ProductCard from '../../../components/ProductCard';

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
						/* 
							Hiding private label tab 
							Search "HIDING-PRIVATE-LABEL" to see where other changes were made
						*/
						if (planType.name !== 'Private Label $1') {
							return (
								<Tab key={uuid()} className={styles.pricingPanelTab}>
									<span>
										{planType.name}
										{planType.isNew && (
											<span className={styles.newBadge}>New</span>
										)}
									</span>
									<div className={styles.rainbowLine} />
								</Tab>
							);
						} else {
							return <span key={uuid()} />;
						}
					})}
				</TabList>

				{/* Seperation of concern for wholesale and private label */}
				<TabPanel>
					<WholesaleOneDollarPanel />
				</TabPanel>

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
			</Tabs>
			<CalculateYourPriceSection />
			<div className="page-container">
				<ProductCard
					title={'CUSTOMER SUCCESS'}
					subTitle={'Sellgo is more than just software.'}
					description={`You don't have to do it alone. Sellgo customer 
				success and training teams are here to answer your questions, 
				help you master the inbound methodology, and make sure you're getting
				the most out of your tools. All that — plus our detailed help documentation,
				educational resources, and training programs — means you'll never feel 
				left out in the cold.`}
					linkLabel={''}
					navigateTo={''}
					imageUrl={'/successImage.png'}
					imageWidth={1080}
					imageHeight={810}
					reversed
				/>
			</div>
			{/* FAQ Section */}
			<FAQSection faqData={productsPanelFaqList[selectedPlanType].data} />
		</>
	);
};

export default ProductsPanel;

import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../../components/FormInput';

/* Utils */
import {stringToFloat, formatPrice, formatPercent} from '../../../../utils/Format';

interface Props {}

const FbaCalculator: React.FC<Props> = () => {
	/* ------------------------------------------------------------------------------------------ */
	/* -------------------------- Fulfilment by Merchant calculator  ------------------------------ */
	/* ------------------------------------------------------------------------------------------ */
	/* User inputted fields */
	const [merchantItemPrice, setMerchantItemPrice] = React.useState<string>(''); // User inputted
	const [merchantShippingCost, setMerchantShippingCost] = React.useState<string>(''); // User inputted
	const [merchantSellerFulfillmentCost, setMerchantSellerFulfillmentCost] = React.useState<string>('');
	const [merchantStorageCost, setMerchantStorageCost] = React.useState<string>(''); // User inputted
	const [merchantAvgInventoryUnits, setMerchantAvgInventoryUnits] = React.useState<string>('');
	const [merchantProductCost, setMerchantProductCost] = React.useState<string>(''); // User inputted
	const [merchantEstimatedSales, setMerchantEstimatedSales] = React.useState<string>('');
	
	/* Calculated fields */
	const [merchantTotalRevenue, setMerchantTotalRevenue] = React.useState<number>(0); // Calculated
	const [merchantTotalFulfilmentCost, setMerchantTotalFulfilmentCost] = React.useState<number>(0); // Calculated
	const [merchantTotalStorageCost, setMerchantTotalStorageCost] = React.useState<number>(0); // Calculated
	const [merchantSellerProceeds, setMerchantSellerProceeds] = React.useState<number>(0); // Calculated
	const [merchantNetProfit, setMerchantNetProfit] = React.useState<number>(0); // Calculated
	const [merchantNetMargin, setMerchantNetMargin] = React.useState<number>(0); // Calculated
	const [merchantROI, setMerchantROI] = React.useState<number>(0); // Calculated
	
	/* Obtained from Amazon fields */
	const [merchantAmazonSellingFees, setMerchantAmazonSellingFees] = React.useState<number>(0); // From Amazon
	
	/* ------------------------------------------------------------------------------------------ */
	/* -------------------------- Fulfilment by Amazon calculator  ------------------------------ */
	/* ------------------------------------------------------------------------------------------ */
	/* User inputted fields */
	const [amazonItemPrice, setAmazonItemPrice] = React.useState<string>(''); // User inputted
	const [amazonShipToAmazonCost, setAmazonShipToAmazonCost] = React.useState<string>(''); // User inputted
	const [amazonAvgInventoryUnits, setAmazonAvgInventoryUnits] = React.useState<string>(''); // User inputted
	const [amazonProductCost, setAmazonProductCost] = React.useState<string>(''); // User inputted
	const [amazonEstimatedSales, setAmazonEstimatedSales] = React.useState<string>('');

	/* Calculated fields */
	const [amazonTotalRevenue, setAmazonTotalRevenue] = React.useState<number>(0); // Calculated
	const [amazonTotalFulfilmentCost, setAmazonTotalFulfilmentCost] = React.useState<number>(0); // Calculated
	const [amazonTotalStorageCost, setAmazonTotalStorageCost] = React.useState<number>(0); // Calculated
	const [amazonSellerProceeds, setAmazonSellerProceeds] = React.useState<number>(0); // Calculated
	const [amazonNetProfit, setAmazonNetProfit] = React.useState<number>(0); // Calculated
	const [amazonNetMargin, setAmazonNetMargin] = React.useState<number>(0); // Calculated
	const [amazonROI, setAmazonROI] = React.useState<number>(0); // Calculated

	/* Obtained from Amazon fields */
	const [amazonShippingCost, setAmazonShippingCost] = React.useState<number>(0); // From Amazon
	const [amazonSellingFees, setAmazonSellingFees] = React.useState<number>(0); // From Amazon
	const [amazonFbaFee, setAmazonFbaFee] = React.useState<number>(0); // From Amazon
	const [amazonStorageCost, setAmazonStorageCost] = React.useState<number>(0); // From amazon


	const [annualRevenue, setAnnualRevenue] = React.useState<number>(0); // Calculated
	
	
	const handleCalculate = () => {
		console.log('Run');
	};

	React.useEffect(() => {
		/* Placeholder to set amazon values */
		setMerchantAmazonSellingFees(0);
		setAmazonShippingCost(0);
		setAmazonSellingFees(0);
		setAmazonFbaFee(0);
		setAmazonStorageCost(0);
	}, [])

	React.useEffect(() => {
		/* Merchant Calculations */
		const merchantTotalRevenue = stringToFloat(merchantItemPrice) + stringToFloat(merchantShippingCost);
		const merchantTotalFulfilmentCost = stringToFloat(merchantSellerFulfillmentCost);
		const merchantTotalStorageCost = (stringToFloat(merchantStorageCost) 
			* stringToFloat(merchantAvgInventoryUnits)) / stringToFloat(merchantEstimatedSales, 1);
		const merchantSellerProceeds = merchantTotalRevenue 
			- merchantAmazonSellingFees - merchantTotalFulfilmentCost - merchantTotalStorageCost;
		const merchantNetProfit = merchantSellerProceeds - stringToFloat(merchantProductCost);
		const merchantNetMargin = (merchantNetProfit / merchantTotalRevenue) * 100;
		const merchantROI = (merchantSellerProceeds / stringToFloat(merchantProductCost, 1));
		
		setMerchantTotalRevenue(merchantTotalRevenue);
		setMerchantTotalFulfilmentCost(merchantTotalFulfilmentCost);
		setMerchantTotalStorageCost(merchantTotalStorageCost);
		setMerchantSellerProceeds(merchantSellerProceeds);
		setMerchantNetProfit(merchantNetProfit);
		setMerchantNetMargin(merchantNetMargin);
		setMerchantROI(merchantROI);

		/* Amazon calculations */
		const amazonTotalRevenue = stringToFloat(amazonItemPrice) + amazonShippingCost;
		const amazonTotalFulfilmentCost = amazonFbaFee + stringToFloat(amazonShipToAmazonCost);
		const amazonTotalStorageCost = (amazonStorageCost * stringToFloat(amazonAvgInventoryUnits)) 
			/ stringToFloat(amazonEstimatedSales, 1);
		const amazonSellerProceeds = amazonTotalRevenue 
			- amazonSellingFees - amazonTotalFulfilmentCost - amazonTotalStorageCost;
		const amazonNetProfit = amazonSellerProceeds - stringToFloat(amazonProductCost);
		const amazonNetMargin = (amazonNetProfit / amazonTotalRevenue) * 100;
		const amazonROI = (amazonSellerProceeds / stringToFloat(amazonProductCost, 1)) * 100;
		
		setAmazonTotalRevenue(amazonTotalRevenue);
		setAmazonTotalFulfilmentCost(amazonTotalFulfilmentCost);
		setAmazonTotalStorageCost(amazonTotalStorageCost);
		setAmazonSellerProceeds(amazonSellerProceeds);
		setAmazonNetProfit(amazonNetProfit);
		setAmazonNetMargin(amazonNetMargin);
		setAmazonROI(amazonROI);

		/* General calculations */
		const annualRevenue = (amazonTotalRevenue * stringToFloat(amazonEstimatedSales))
			+ (merchantTotalRevenue * stringToFloat(merchantEstimatedSales));
		setAnnualRevenue(annualRevenue);
	}, [
		merchantItemPrice,
		merchantShippingCost,
		merchantSellerFulfillmentCost,
		merchantStorageCost,
		merchantAvgInventoryUnits,
		merchantProductCost,
		merchantEstimatedSales,

		amazonItemPrice,
		amazonShipToAmazonCost,
		amazonAvgInventoryUnits,
		amazonProductCost,
		amazonEstimatedSales
	])

	return (
		<section className={styles.fbaCalculatorWrapper}>
			<div className="page-container">
				<div className={styles.fbaCalculatorGrid}>
					<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__mainHeader}`}> 
						FBM/ Fulfillment by Merchant 
					</p>
					<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__mainHeader2}`}>
						FBA/ Fulfillment by Amazon 
					</p>
				</div>

				{/* Revenue */}
				<div className={styles.calculatorGroup}>
					<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}>Revenue </p>
					<div className={styles.fbaCalculatorGrid}>
						{/* Item price row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> Item price </p>
						<FormInput
							label="$"
							id="merchantItemPrice"
							type="number"
							name="merchantItemPrice"
							onChange={(e:any) => setMerchantItemPrice(e.target.value)}
							value={merchantItemPrice.toString()}
							className={styles.formInput}
							placeholder="Item price"
						/>
						<FormInput
							label="$"
							id="amazonItemPrice"
							type="number"
							name="amazonItemPrice"
							onChange={(e:any) => setAmazonItemPrice(e.target.value)}
							value={amazonItemPrice.toString()}
							className={styles.formInput}
							placeholder="Item price"
						/>

						{/* Shipping cost row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> 
							Shipping Cost 
						</p>
						<FormInput
							label="$"
							id="merchantShippingCost"
							type="number"
							name="merchantShippingCost"
							onChange={(e:any) => setMerchantShippingCost(e.target.value)}
							value={merchantShippingCost.toString()}
							className={styles.formInput}
							placeholder="Shipping cost"
						/>
						<p className={styles.calculatedValues}> {formatPrice(amazonShippingCost)} </p>

						{/* Total Revenue row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__totalLabel}`}> 
							Total Revenue 
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}> 
							{formatPrice(merchantTotalRevenue)} 
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}>
							{formatPrice(amazonTotalRevenue)} 
						</p>
					</div>
				</div>

				{/* Selling on Amazon Fees */}
				<div className={styles.calculatorGroup}>
					<div className={styles.fbaCalculatorGrid}>
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}>
							Selling on Amazon fees 
						</p>
						<p className={styles.calculatedValues}> {formatPrice(merchantAmazonSellingFees)} </p>
						<p className={styles.calculatedValues}> {formatPrice(amazonSellingFees)} </p>
					</div>
				</div>

				{/* Fulfilment cost */}
				<div className={styles.calculatorGroup}>
					<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}>
						Fulfilment cost
					</p>
					<div className={styles.fbaCalculatorGrid}>
						{/* Seller fulfilment cost row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> 
							Seller fulfillment cost
						</p>
						<FormInput
							label="$"
							id="merchantSellerFulfillmentCost"
							type="number"
							name="merchantSellerFulfillmentCost"
							onChange={(e:any) => setMerchantSellerFulfillmentCost(e.target.value)}
							value={merchantSellerFulfillmentCost}
							className={styles.formInput}
							placeholder="Fulfilment cost"
						/>
						<p className={styles.calculatedValues}> N/A </p>

						{/* Amazon FBA fee row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}>
							Amazon FBA fee 
						</p>
						<p className={styles.calculatedValues}> N/A </p>
						<p className={styles.calculatedValues}> {formatPrice(amazonFbaFee)} </p>

						{/* Ship to Amazon row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}>
							Ship to Amazon
						</p>
						<p className={styles.calculatedValues}> N/A </p>
						<FormInput
							label="$"
							id="amazonShipToAmazonCost"
							type="number"
							name="amazonShipToAmazonCost"
							onChange={(e:any) => setAmazonShipToAmazonCost(e.target.value)}
							value={amazonShipToAmazonCost}
							className={styles.formInput}
							placeholder="Shipping cost"
						/>

						{/* Total fulfillment cost row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__totalLabel}`}> 
							Total fulfillment cost
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}>
							{formatPrice(merchantTotalFulfilmentCost)}
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}>
							{formatPrice(amazonTotalFulfilmentCost)}
						</p>
					</div>
				</div>

				{/* Estimated sales */}
				<div className={styles.calculatorGroup}>
					<div className={styles.fbaCalculatorGrid}>
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}>
							Estimated Sales
						</p>
						<FormInput
							label=""
							id="merchantEstimatedSales"
							type="number"
							name="merchantEstimatedSales"
							onChange={(e:any) => setMerchantEstimatedSales(e.target.value)}
							value={merchantEstimatedSales}
							className={styles.formInput}
							placeholder="Units sold /mo"
						/>
						<FormInput
							label=""
							id="amazonEstimatedSales"
							type="number"
							name="amazonEstimatedSales"
							onChange={(e:any) => setAmazonEstimatedSales(e.target.value)}
							value={amazonEstimatedSales}
							className={styles.formInput}
							placeholder="Units sold /mo"
						/>
					</div>
				</div>

				{/* Storage cost */}
				<div className={styles.calculatorGroup}>
					<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}>Storage cost </p>
					<div className={styles.fbaCalculatorGrid}>
						{/* Monthly storage cost per unit row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> 
							Monthly storage cost per unit
						</p>
						<FormInput
							label="$"
							id="merchantStorageCost"
							type="number"
							name="merchantStorageCost"
							onChange={(e:any) => setMerchantStorageCost(e.target.value)}
							value={merchantStorageCost}
							className={styles.formInput}
							placeholder="Storage cost"
						/>
						<p className={styles.calculatedValues}> {formatPrice(amazonStorageCost)} </p>

						{/* Average inventory units stored row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}>
							Average inventory units stored
						</p>
						<FormInput
							label=""
							id="merchantAvgInventoryUnits"
							type="number"
							name="merchantAvgInventoryUnits"
							onChange={(e:any) => setMerchantAvgInventoryUnits(e.target.value)}
							value={merchantAvgInventoryUnits}
							className={styles.formInput}
							placeholder="Avg stored"
						/>
						<FormInput
							label=""
							id="amazonAvgInventoryUnits"
							type="number"
							name="amazonAvgInventoryUnits"
							onChange={(e:any) => setAmazonAvgInventoryUnits(e.target.value)}
							value={amazonAvgInventoryUnits}
							className={styles.formInput}
							placeholder="Avg stored"
						/>

						{/* Total Storage cost per unit sold cost row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__totalLabel}`}> 
							Storage cost per unit sold
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}>
							{formatPrice(merchantTotalStorageCost)} 
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}>
							{formatPrice(amazonTotalStorageCost)} 
						</p>
					</div>
				</div>

				<div className={styles.divider}/>

				{/* Seller proceeds */}
				<div className={styles.calculatorGroup}>
					<div className={styles.fbaCalculatorGrid}>
						{/* Seller proceeds row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}>
							Seller proceeds
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}>
							{formatPrice(merchantSellerProceeds)} 
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}>
							{formatPrice(amazonSellerProceeds)}
						</p>

						{/* Cost of product row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> 
							Cost of product 
						</p>
						<FormInput
							label="$"
							id="merchantProductCost"
							type="number"
							name="merchantProductCost"
							onChange={(e:any) => setMerchantProductCost(e.target.value)}
							value={merchantProductCost}
							className={styles.formInput}
							placeholder="Cost"
						/>
						<FormInput
							label="$"
							id="amazonProductCost"
							type="number"
							name="amazonProductCost"
							onChange={(e:any) => setAmazonProductCost(e.target.value)}
							value={amazonProductCost}
							className={styles.formInput}
							placeholder="Cost"
						/>
					</div>
				</div>

				<div className={styles.divider}/>

				{/* Net Profit */}
				<div className={styles.calculatorGroup}>
					<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}>
						Net Profitability
					</p>
					<div className={styles.fbaCalculatorGrid}>
						{/* Net Profitability row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> 
							Net Profit
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__large}`}> 
							{formatPrice(merchantNetProfit)}
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__largeBold}`}>
							{formatPrice(amazonNetProfit)}
						</p>

						{/* Net margin row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> 
							Net margin
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__large}`}>
						{formatPercent(merchantNetMargin)}
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__largeBold}`}>
						{formatPercent(amazonNetMargin)}
						</p>

						{/* Net ROI/ Return On Investment row */}
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> 
							Net ROI/ Return On Investment
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__large}`}>
							{formatPercent(merchantROI)}
						</p>
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__largeBold}`}>
							{formatPercent(amazonROI)}
						</p>
					</div>
				</div>


				<div className={styles.buttonsRow}>
					<button 
						className={styles.calculateButton}
						onClick={handleCalculate}
					>
						Calculate
					</button>
				</div>

				<div className={styles.calculatorGroup}>
					{/* Estimated Revenue Group Header */}
					<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}>
						Estimated Revenue
					</p>

					{/* Estimated Annual Revenue */}
					<div className={styles.fbaCalculatorGrid}>
						<p className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}> 
							Estimated Annual Revenue
						</p>
						<p/> {/* Empty p tag to act as an empty cell in the grid */}
						<p className={`${styles.calculatedValues} ${styles.calculatedValues__largeBold}`}>
							{formatPrice(annualRevenue)}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FbaCalculator;

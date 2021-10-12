import React from 'react';

/* Styling */
import axios from 'axios';
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../../components/FormInput';

/* Utils */
import {
	stringToFloat,
	formatPrice,
	formatPercent,
} from '../../../../utils/Format';
import AppConfig from '../../../../config';

interface Props {
	productDetails: any;
	productIdentifierType: string;
	productIdentifier: string;
}

const FbaCalculator: React.FC<Props> = (props: Props) => {
	const { productDetails, productIdentifier, productIdentifierType } = props;
	const [loading, setLoading] = React.useState<boolean>(false);
	const [errorMessage, setErrorMessage] = React.useState<string>('');
	/* ------------------------------------------------------------------------------------------ */
	/* -------------------------- Fulfilment by Merchant calculator  ------------------------------ */
	/* ------------------------------------------------------------------------------------------ */
	/* User inputted fields */
	const [merchantItemPrice, setMerchantItemPrice] = React.useState<string>(''); // User inputted
	const [
		merchantShippingCost,
		setMerchantShippingCost
	] = React.useState<string>(''); // User inputted
	const [
		merchantSellerFulfillmentCost,
		setMerchantSellerFulfillmentCost
	] = React.useState<string>('');
	const [merchantStorageCost, setMerchantStorageCost] = React.useState<string>(
		''
	); // User inputted
	const [
		merchantAvgInventoryUnits,
		setMerchantAvgInventoryUnits
	] = React.useState<string>('');
	const [merchantProductCost, setMerchantProductCost] = React.useState<string>(
		''
	); // User inputted

	/* Calculated fields */
	const [
		merchantTotalRevenue,
		setMerchantTotalRevenue
	] = React.useState<number>(0); // Calculated
	const [
		merchantTotalFulfilmentCost,
		setMerchantTotalFulfilmentCost
	] = React.useState<number>(0); // Calculated
	const [
		merchantTotalStorageCost,
		setMerchantTotalStorageCost
	] = React.useState<number>(0); // Calculated
	const [
		merchantSellerProceeds,
		setMerchantSellerProceeds
	] = React.useState<number>(0); // Calculated
	const [merchantNetProfit, setMerchantNetProfit] = React.useState<number>(0); // Calculated
	const [merchantNetMargin, setMerchantNetMargin] = React.useState<number>(0); // Calculated
	const [merchantROI, setMerchantROI] = React.useState<number>(0); // Calculated

	/* Obtained from Amazon fields */
	const [
		merchantAmazonSellingFees,
		setMerchantAmazonSellingFees
	] = React.useState<number>(0); // From Amazon
	const merchantEstimatedSales = productDetails.sales || 1;

	/* ------------------------------------------------------------------------------------------ */
	/* -------------------------- Fulfilment by Amazon calculator  ------------------------------ */
	/* ------------------------------------------------------------------------------------------ */
	/* User inputted fields */
	const [amazonItemPrice, setAmazonItemPrice] = React.useState<string>(''); // User inputted
	const [
		amazonShipToAmazonCost,
		setAmazonShipToAmazonCost
	] = React.useState<string>(''); // User inputted
	const [
		amazonAvgInventoryUnits,
		setAmazonAvgInventoryUnits
	] = React.useState<string>(''); // User inputted
	const [amazonProductCost, setAmazonProductCost] = React.useState<string>(''); // User inputted

	/* Calculated fields */
	const [amazonTotalRevenue, setAmazonTotalRevenue] = React.useState<number>(0); // Calculated
	const [
		amazonTotalFulfilmentCost,
		setAmazonTotalFulfilmentCost
	] = React.useState<number>(0); // Calculated
	const [
		amazonTotalStorageCost,
		setAmazonTotalStorageCost
	] = React.useState<number>(0); // Calculated
	const [
		amazonSellerProceeds,
		setAmazonSellerProceeds
	] = React.useState<number>(0); // Calculated
	const [amazonNetProfit, setAmazonNetProfit] = React.useState<number>(0); // Calculated
	const [amazonNetMargin, setAmazonNetMargin] = React.useState<number>(0); // Calculated
	const [amazonROI, setAmazonROI] = React.useState<number>(0); // Calculated

	/* Obtained from Amazon fields */
	const [amazonSellingFees, setAmazonSellingFees] = React.useState<number>(0); // From Amazon
	const [amazonFbaFee, setAmazonFbaFee] = React.useState<number>(0); // From Amazon
	const amazonShippingCost = 0;
	const [amazonStorageCost, setAmazonStorageCost] = React.useState<number>(0); // From Amazon
	const amazonEstimatedSales = productDetails.sales || 1;

	const [annualRevenue, setAnnualRevenue] = React.useState<number>(0); // Calculated

	React.useEffect(() => {
		/* Placeholder to set amazon values */
		setMerchantAmazonSellingFees(0);
		setAmazonSellingFees(0);
		setAmazonFbaFee(0);
	}, []);

	const handleCalculate = () => {
		const calculate = async () => {
			setLoading(true);
			setErrorMessage("");
			
			if (productIdentifier.length === 0 || productIdentifierType.length === 0) {
				setErrorMessage("Please enter a valid ASIN");
			}
			/* Validating available sales estimate or product identifier */
			let amazonFbaFee = 0;
			let amazonSellingFees = 0;
			let merchantAmazonSellingFees = 0;
			try {
				const URL = `${AppConfig.API_URL}/freemium/fees-estimate/${productIdentifierType}/
					${productIdentifier}/${stringToFloat(amazonItemPrice)}/${stringToFloat(
					merchantItemPrice
				)}`;
				const response = await axios.get(URL);
				if (response.status === 200) {
					const { data } = response;
					setAmazonStorageCost(data.amazon_storage_cost);
					setMerchantAmazonSellingFees(data.fbm_amazon_fees);
					merchantAmazonSellingFees = data.fbm_amazon_fees;
					setAmazonSellingFees(data.fba_amazon_fees);
					amazonSellingFees = data.fba_amazon_fees;
					setAmazonFbaFee(data.fba_fulfillment_fees);
					amazonFbaFee = data.fba_fulfillment_fees;
				}
			} catch (err: any) {
				setMerchantAmazonSellingFees(0);
				setAmazonSellingFees(0);
				setAmazonFbaFee(0);
				console.error(err);
			}

			if (amazonAvgInventoryUnits === '') {
				setAmazonAvgInventoryUnits('1');
			}

			if (merchantAvgInventoryUnits === '') {
				setMerchantAvgInventoryUnits('1');
			}

			/* Merchant Calculations */
			const merchantTotalRevenue =
				stringToFloat(merchantItemPrice) + stringToFloat(merchantShippingCost);
			const merchantTotalFulfilmentCost = stringToFloat(
				merchantSellerFulfillmentCost
			);
			const merchantTotalStorageCost =
				(stringToFloat(merchantStorageCost) *
					stringToFloat(merchantAvgInventoryUnits, 1)) /
				Math.max(merchantEstimatedSales, 1);
			const merchantSellerProceeds =
				merchantTotalRevenue -
				merchantAmazonSellingFees -
				merchantTotalFulfilmentCost -
				merchantTotalStorageCost;
			const merchantNetProfit =
				merchantSellerProceeds - stringToFloat(merchantProductCost);
			const merchantNetMargin =
				merchantTotalRevenue !== 0
					? (merchantNetProfit / merchantTotalRevenue) * 100
					: 0;
			const merchantROI =
				(merchantSellerProceeds /
					Math.max(stringToFloat(merchantProductCost), 1)) *
				100;

			setMerchantTotalRevenue(merchantTotalRevenue);
			setMerchantTotalFulfilmentCost(merchantTotalFulfilmentCost);
			setMerchantTotalStorageCost(merchantTotalStorageCost);
			setMerchantSellerProceeds(merchantSellerProceeds);
			setMerchantNetProfit(merchantNetProfit);
			setMerchantNetMargin(merchantNetMargin);
			setMerchantROI(merchantROI);

			/* Amazon calculations */
			const amazonTotalRevenue =
				stringToFloat(amazonItemPrice) + amazonShippingCost;
			const amazonTotalFulfilmentCost =
				amazonFbaFee + stringToFloat(amazonShipToAmazonCost);
			const amazonTotalStorageCost =
				(amazonStorageCost * stringToFloat(amazonAvgInventoryUnits, 1)) /
				Math.max(amazonEstimatedSales, 1);
			const amazonSellerProceeds =
				amazonTotalRevenue -
				amazonSellingFees -
				amazonTotalFulfilmentCost -
				amazonTotalStorageCost;
			const amazonNetProfit =
				amazonSellerProceeds - stringToFloat(amazonProductCost);
			const amazonNetMargin =
				amazonTotalRevenue !== 0
					? (amazonNetProfit / amazonTotalRevenue) * 100
					: 0;
			const amazonROI =
				(amazonSellerProceeds / Math.max(stringToFloat(amazonProductCost), 1)) *
				100;

			setAmazonTotalRevenue(amazonTotalRevenue);
			setAmazonTotalFulfilmentCost(amazonTotalFulfilmentCost);
			setAmazonTotalStorageCost(amazonTotalStorageCost);
			setAmazonSellerProceeds(amazonSellerProceeds);
			setAmazonNetProfit(amazonNetProfit);
			setAmazonNetMargin(amazonNetMargin);
			setAmazonROI(amazonROI);

			/* General calculations */
			const annualRevenue =
				amazonTotalRevenue * amazonEstimatedSales * 12 +
				merchantTotalRevenue * merchantEstimatedSales * 12;

			setAnnualRevenue(annualRevenue);
			setLoading(false);
		};
		calculate();
	};

	return (
		<section className={styles.fbaCalculatorWrapper}>
			<div className={styles.fbaCalculator}>
				<div className={styles.fbaCalculatorGrid}>
					<div
						className={`${styles.fbaCalculatorInputGrid} ${styles.fbaCalculatorInputGrid__header}`}
					>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__mainHeader}`}
						>
							FBM/ Fulfillment by Merchant
						</p>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__mainHeader2}`}
						>
							FBA/ Fulfillment by Amazon
						</p>
					</div>
				</div>

				{/* Revenue */}
				<div className={styles.calculatorGroup}>
					<p
						className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}
					>
						Revenue{' '}
					</p>
					<div className={styles.fbaCalculatorGrid}>
						{/* Item price row */}
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							{' '}
							Item price{' '}
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<FormInput
								label="$"
								id="merchantItemPrice"
								type="number"
								name="merchantItemPrice"
								onChange={(e: any) => setMerchantItemPrice(e.target.value)}
								value={merchantItemPrice.toString()}
								className={styles.formInput}
								placeholder="Item price"
							/>
							<FormInput
								label="$"
								id="amazonItemPrice"
								type="number"
								name="amazonItemPrice"
								onChange={(e: any) => setAmazonItemPrice(e.target.value)}
								value={amazonItemPrice.toString()}
								className={styles.formInput}
								placeholder="Item price"
							/>
						</div>
					</div>

					{/* Shipping cost row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Shipping Cost
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<FormInput
								label="$"
								id="merchantShippingCost"
								type="number"
								name="merchantShippingCost"
								onChange={(e: any) => setMerchantShippingCost(e.target.value)}
								value={merchantShippingCost.toString()}
								className={styles.formInput}
								placeholder="Shipping cost"
							/>
							<p className={styles.calculatedValues}>
								{' '}
								{formatPrice(amazonShippingCost)}{' '}
							</p>
						</div>
					</div>

					{/* Total Revenue row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__totalLabel}`}
						>
							Total Revenue
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}
							>
								{formatPrice(merchantTotalRevenue)}
							</p>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}
							>
								{formatPrice(amazonTotalRevenue)}
							</p>
						</div>
					</div>
				</div>

				{/* Selling on Amazon Fees */}
				<div className={styles.calculatorGroup}>
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}
						>
							Selling on Amazon fees
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p className={styles.calculatedValues}>
								{' '}
								{formatPrice(merchantAmazonSellingFees)}{' '}
							</p>
							<p className={styles.calculatedValues}>
								{' '}
								{formatPrice(amazonSellingFees)}{' '}
							</p>
						</div>
					</div>
				</div>

				{/* Fulfilment cost */}
				<div className={styles.calculatorGroup}>
					<p
						className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}
					>
						Fulfilment cost
					</p>
					{/* Seller fulfilment cost row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Seller fulfillment cost
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<FormInput
								label="$"
								id="merchantSellerFulfillmentCost"
								type="number"
								name="merchantSellerFulfillmentCost"
								onChange={(e: any) =>
									setMerchantSellerFulfillmentCost(e.target.value)
								}
								value={merchantSellerFulfillmentCost}
								className={styles.formInput}
								placeholder="Fulfilment cost"
							/>
							<p className={styles.calculatedValues}> N/A </p>
						</div>
					</div>

					{/* Amazon FBA fee row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Amazon FBA fee
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p className={styles.calculatedValues}> N/A </p>
							<p className={styles.calculatedValues}>
								{' '}
								{formatPrice(amazonFbaFee)}{' '}
							</p>
						</div>
					</div>

					{/* Ship to Amazon row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Ship to Amazon
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p className={styles.calculatedValues}> N/A </p>
							<FormInput
								label="$"
								id="amazonShipToAmazonCost"
								type="number"
								name="amazonShipToAmazonCost"
								onChange={(e: any) => setAmazonShipToAmazonCost(e.target.value)}
								value={amazonShipToAmazonCost}
								className={styles.formInput}
								placeholder="Shipping cost"
							/>
						</div>
					</div>

					{/* Total fulfillment cost row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__totalLabel}`}
						>
							Total fulfillment cost
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}
							>
								{formatPrice(merchantTotalFulfilmentCost)}
							</p>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}
							>
								{formatPrice(amazonTotalFulfilmentCost)}
							</p>
						</div>
					</div>
				</div>

				{/* Storage cost */}
				<div className={styles.calculatorGroup}>
					<p
						className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}
					>
						Storage cost{' '}
					</p>
					{/* Monthly storage cost per unit row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Monthly storage cost per unit
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<FormInput
								label="$"
								id="merchantStorageCost"
								type="number"
								name="merchantStorageCost"
								onChange={(e: any) => setMerchantStorageCost(e.target.value)}
								value={merchantStorageCost}
								className={styles.formInput}
								placeholder="Storage cost"
							/>
							<p className={styles.calculatedValues}>
								{' '}
								{formatPrice(amazonStorageCost)}{' '}
							</p>
						</div>
					</div>

					{/* Average inventory units stored row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Average inventory units stored
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<FormInput
								label=""
								id="merchantAvgInventoryUnits"
								type="number"
								name="merchantAvgInventoryUnits"
								onChange={(e: any) =>
									setMerchantAvgInventoryUnits(e.target.value)
								}
								value={merchantAvgInventoryUnits}
								className={styles.formInput}
								placeholder="Avg stored"
							/>
							<FormInput
								label=""
								id="amazonAvgInventoryUnits"
								type="number"
								name="amazonAvgInventoryUnits"
								onChange={(e: any) =>
									setAmazonAvgInventoryUnits(e.target.value)
								}
								value={amazonAvgInventoryUnits}
								className={styles.formInput}
								placeholder="Avg stored"
								disabled={!productDetails.sales}
							/>
						</div>
					</div>

					{/* Total Storage cost per unit sold cost row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__totalLabel}`}
						>
							Storage cost per unit sold
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}
							>
								{formatPrice(merchantTotalStorageCost)}
							</p>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}
							>
								{formatPrice(amazonTotalStorageCost)}
							</p>
						</div>
					</div>
				</div>

				<div className={styles.divider} />

				{/* Seller proceeds */}
				<div className={styles.calculatorGroup}>
					{/* Seller proceeds row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}
						>
							Seller proceeds
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}
							>
								{formatPrice(merchantSellerProceeds)}
							</p>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__totalValue}`}
							>
								{formatPrice(amazonSellerProceeds)}
							</p>
						</div>
					</div>

					{/* Cost of product row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Cost of product
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<FormInput
								label="$"
								id="merchantProductCost"
								type="number"
								name="merchantProductCost"
								onChange={(e: any) => setMerchantProductCost(e.target.value)}
								value={merchantProductCost}
								className={styles.formInput}
								placeholder="Cost"
							/>
							<FormInput
								label="$"
								id="amazonProductCost"
								type="number"
								name="amazonProductCost"
								onChange={(e: any) => setAmazonProductCost(e.target.value)}
								value={amazonProductCost}
								className={styles.formInput}
								placeholder="Cost"
							/>
						</div>
					</div>
				</div>

				<div className={styles.divider} />

				{/* Net Profit */}
				<div className={styles.calculatorGroup}>
					<p
						className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}
					>
						Net Profitability
					</p>

					{/* Net Profitability row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Net Profit
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__large}`}
							>
								{formatPrice(merchantNetProfit)}
							</p>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__largeBold}`}
							>
								{formatPrice(amazonNetProfit)}
							</p>
						</div>
					</div>

					{/* Net margin row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Net margin
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__large}`}
							>
								{formatPercent(merchantNetMargin)}
							</p>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__largeBold}`}
							>
								{formatPercent(amazonNetMargin)}
							</p>
						</div>
					</div>

					{/* Net ROI/ Return On Investment row */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Net ROI/ Return On Investment
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__large}`}
							>
								{formatPercent(merchantROI)}
							</p>
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__largeBold}`}
							>
								{formatPercent(amazonROI)}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.buttonsRow}>
					<button
						className={styles.calculateButton}
						onClick={handleCalculate}
						disabled={loading}
					>
						Calculate
					</button>
				</div>
				<p className={styles.error}>{errorMessage}</p>

				<div className={styles.calculatorGroup}>
					{/* Estimated Revenue Group Header */}
					<p
						className={`${styles.calculatorLabel} ${styles.calculatorLabel__header}`}
					>
						Estimated Revenue
					</p>

					{/* Estimated Annual Revenue */}
					<div className={styles.fbaCalculatorGrid}>
						<p
							className={`${styles.calculatorLabel} ${styles.calculatorLabel__label}`}
						>
							Estimated Annual Revenue
						</p>
						<div className={styles.fbaCalculatorInputGrid}>
							<p /> {/* Empty p tag to act as an empty cell in the grid */}
							<p
								className={`${styles.calculatedValues} ${styles.calculatedValues__largeBold}`}
							>
								{formatPrice(annualRevenue)}
							</p>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
};

export default FbaCalculator;

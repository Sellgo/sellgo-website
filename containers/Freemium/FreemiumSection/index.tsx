import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../components/FormInput';
import FbaCalculator from './FbaCalculator';

/* Constants */
import {
	isValidAsin,
	isValidIsbn,
	parseAsinFromLink
} from '../../../constants/Freemium';

/* Config */
import AppConfig from '../../../config';

/* Utils */
import { formatFloat } from '../../../utils/Format';

const FreemiumSection = () => {
	const [productInput, setProductInput] = React.useState<string>('');
	const [isCalculatorOpen, setCalculatorOpen] = React.useState<boolean>(false);
	const [productIdentifierType, setProductIdentifierType] = React.useState<
		'ASIN' | 'ISBN'
	>('ASIN');
	const [productIdentifier, setProductIdentifier] = React.useState<string>('');
	const [inputError, setInputError] = React.useState<boolean>(false);
	const [productDetails, setProductDetails] = React.useState<any>({});
	const [isProductLoading, setProductLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<string>('');
	const [captcha, setCaptcha] = React.useState<string>('');
	const [isUserWhiteListed, setUserWhiteListed] = React.useState<boolean>(
		false
	);
	const isProductRetrieved = Object.keys(productDetails).length > 0;

	const handleCaptchaChange = (token: any) => {
		if (token.trim().length > 0) {
			setCaptcha(token);
		} else {
			setCaptcha('');
		}
	};

	/* Check if user is whitelisted */
	React.useEffect(() => {
		const checkWhiteListStatus = async () => {
			try {
				const URL = `${AppConfig.API_URL}/freemium/white-list-status`;
				const response = await axios.get(URL);
				if (response.status === 200) {
					const status = response.data.white_list_status;
					setUserWhiteListed(status);
				}
			} catch (err: any) {
				setUserWhiteListed(false);
			}
		};
		checkWhiteListStatus();
	}, []);

	/* Input validation */
	React.useEffect(() => {
		if (productInput.length > 0) {
			/* Asin */
			if (isValidAsin(productInput)) {
				setInputError(false);
				setProductIdentifier(productInput);
				setProductIdentifierType('ASIN');

				/* Isbn */
			} else if (isValidIsbn(productInput)) {
				setInputError(false);
				setProductIdentifier(productInput);
				setProductIdentifierType('ISBN');
			} else {
				const asinFromLink = parseAsinFromLink(productInput);
				/* Amazon link */
				if (asinFromLink) {
					setInputError(false);
					setProductIdentifier(asinFromLink);
					setProductIdentifierType('ASIN');
				} else {
					setInputError(true);
					setProductIdentifier('');
				}
			}
			/* If is link */
		} else {
			setInputError(false);
		}
	}, [productInput]);

	const handleGetSalesEstimate = () => {
		const getSalesEstimate = async () => {
			setError('');
			setProductLoading(true);
			try {
				let URL = `${AppConfig.API_URL}/freemium/sales-estimate/
					${productIdentifierType}/${productIdentifier}`;

				if (captcha) {
					URL = `${URL}?captcha=${captcha}`;
				}
				const response = await axios.get(URL);
				if (response.status === 200) {
					const product = response.data;
					if (!product.sales) {
						product.sales = 'N/A';
					}
					setProductDetails(product);
					setUserWhiteListed(true);
				}
			} catch (err: any) {
				setProductDetails({});
				if (err.response && err.response.status === 429) {
					setError(err.response.data.message);
				} else {
					setError(err.response.data.message);
				}
			}
			setProductLoading(false);
		};
		getSalesEstimate();
	};

	return (
		<section className={styles.freemiumSectionWrapper}>
			<div className="page-container">
				<div className={styles.headingRow}>
					<h3 className={styles.title}>Amazon Sales Estimator</h3>
					<h3 className={styles.counter}>{formatFloat(productDetails.sales) || 0}</h3>
				</div>
				<div>
					<FormInput
						label="Find your product on Amazon"
						id="asin	"
						type="text"
						name="asin"
						onChange={(e: any) => {
							setProductInput(e.target.value);
						}}
						value={productInput}
						className={
							inputError
								? `${styles.formInput} ${styles.formInput__error}`
								: styles.formInput
						}
						placeholder="Enter Amazon Link or ASIN or ISBN"
					/>
					<p className={styles.errorMessage}> {error} </p>
					<div className={styles.buttonsRow}>
						{!isUserWhiteListed && (
							<div className={styles.captchaWrapper}>
								<ReCAPTCHA
									sitekey={String(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)}
									theme="light"
									size="normal"
									onChange={handleCaptchaChange}
								/>
							</div>
						)}
						<button
							className={styles.estimateButton}
							onClick={handleGetSalesEstimate}
							disabled={
								isProductLoading ||
								(!isUserWhiteListed && captcha.length === 0) ||
								inputError
							}
						>
							Search
						</button>
					</div>
					{isProductRetrieved && (
						<div className={styles.productRow}>
							<img
								className={styles.productImage}
								src={productDetails.img}
								alt="product"
							/>
							<div className={styles.productText}>
								<p className={styles.productTitle}> {productDetails.title} </p>
								<div className={styles.productAsin}>
									{
										<img
											className={styles.flagImg}
											src="./usFlag.png"
											alt="us-flag"
										/>
									}
									<a
										className={styles.asinLink}
										href={`https://amazon.com/dp/${productDetails.asin}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{productDetails.asin}
									</a>
								</div>
							</div>
						</div>
					)}
					<button
						className={styles.showCalculatorLink}
						onClick={() => setCalculatorOpen(!isCalculatorOpen)}
						disabled={isProductLoading || !isProductRetrieved}
					>
						{!isCalculatorOpen
							? `Show FBA Opportunity calculator >`
							: `See less >`}
					</button>
					{isCalculatorOpen && (
						<FbaCalculator productDetails={productDetails} />
					)}
				</div>
			</div>
		</section>
	);
};

export default FreemiumSection;

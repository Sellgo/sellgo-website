import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import publicIp from 'public-ip';

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
import { formatNumber } from '../../../utils/Format';

interface Props {
	setShowCTABanner: (showCTABanner: boolean) => void;
}
const FreemiumSection = (props: Props) => {
	const { setShowCTABanner } = props;

	const [productInput, setProductInput] = React.useState<string>('');
	const [isCalculatorOpen, setCalculatorOpen] = React.useState<boolean>(false);
	const [productIdentifierType, setProductIdentifierType] = React.useState<
		'ASIN' | 'isbn'
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
	const productImage = productDetails.img
		? productDetails.img.replace('SL75', 'SL140')
		: './placeholderImage.svg';

	const handleCaptchaChange = (token: any) => {
		if (token.trim().length > 0) {
			setCaptcha(token);
			setUserWhiteListed(true);
		} else {
			setCaptcha('');
		}
	};

	/* Check if user is whitelisted */
	React.useEffect(() => {
		const checkWhiteListStatus = async () => {
			try {
				const ipAddr = await publicIp.v4();
				const URL = `${AppConfig.API_URL}/freemium/white-list-status?ipv4=${ipAddr}`;
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
		const trimmedProductInput = productInput.trim();
		if (trimmedProductInput.length > 0) {
			/* Asin */
			if (isValidAsin(trimmedProductInput)) {
				setInputError(false);
				setProductIdentifier(trimmedProductInput);
				setProductIdentifierType('ASIN');

				/* Isbn */
			} else if (isValidIsbn(trimmedProductInput)) {
				setInputError(false);
				setProductIdentifier(trimmedProductInput);
				setProductIdentifierType('isbn');
			} else {
				const asinFromLink = parseAsinFromLink(trimmedProductInput);
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
			const ipAddr = await publicIp.v4();

			try {
				let URL = `${AppConfig.API_URL}/freemium/sales-estimate/
					${productIdentifierType}/${productIdentifier}?ipv4=${ipAddr}`;

				if (captcha) {
					URL = `${URL}&captcha=${captcha}`;
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
					setShowCTABanner(true);
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
			<div className={`${styles.freemiumSection} page-container`}>
				<div className={styles.headingRow}>
					<h3 className={styles.title}>Estimated Sales per Month</h3>
					<h3 className={styles.counter}>
						{productDetails.sales === 'N/A'
							? 'N/A'
							: formatNumber(productDetails.sales)}
					</h3>
				</div>
				<FormInput
					label="Find your product on Amazon.com"
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
							src={productImage}
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
					disabled={
						/* User has to input an ASIN */
						inputError ||
						productIdentifier.length === 0 ||
						/* User has to verify captcha */
						(!isUserWhiteListed && captcha.length === 0)
					}
				>
					{!isCalculatorOpen
						? `Show FBA Opportunity calculator >`
						: `See less >`}
				</button>
				{isCalculatorOpen && (
					<FbaCalculator
						productIdentifierType={productIdentifierType}
						productIdentifier={productIdentifier}
						productDetails={productDetails}
					/>
				)}
			</div>
		</section>
	);
};

export default FreemiumSection;

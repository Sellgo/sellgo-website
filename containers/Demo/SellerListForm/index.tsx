import React, { useEffect, useState } from 'react';
import validator from 'validator';
import Image from 'next/image';
import axios from 'axios';
import Modal from 'react-modal';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../components/FormInput';
import FormSubmitConfirm from '../../../components/FormSubmitConfirm';
import CheckboxDropdownInput from '../../../components/CheckboxDropdownInput';

/* Data */
import {
	SELLER_BUSINESS_MODEL_OPTIONS,
	SELLER_COUNTRY_OPTIONS,
	SELLER_MARKETPLACE_OPTIONS,
	SELLER_DOMINANT_PRODUCT_CATEGORY_OPTIONS,
	SELLER_DATAPOINT_OPTIONS,
	SELLER_ANNUAL_REVENUE_OPTIONS
} from './data';

/* App Config */
import AppConfig from '../../../config';
import Close from '../../../components/Icons/Close';

interface Props {
	onRequestClose: () => void;
}

const DemoForm: React.FC<Props> = (props: Props) => {
	const { onRequestClose } = props;
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		sellerBusinessModel: [],
		sellerCountryOfOrigin: [],
		sellerAmazonMarketplace: [],
		sellerDominantProduct: [],
		sellerDatapoint: [],
		sellerRevenue: []
	});

	const [formDataError, setFormDataError] = useState({
		firstNameErr: false,
		lastNameErr: false,
		emailErr: false,
		messageErr: false
	});

	const [openSubmitConfirm, setOpenSubmitConfirm] = useState(false);
	const [showDemoForm, setShowDemoForm] = useState(true);

	const handleChange = (e: any) => {
		const { value, name, checked } = e.target;

		if (name === 'isExistingCustomer') {
			setFormData((prevState) => {
				return {
					...prevState,
					[name]: checked
				};
			});
		} else {
			setFormData((prevState) => {
				return {
					...prevState,
					[name]: value
				};
			});
		}
	};

	const {
		firstName,
		lastName,
		email,
		message,
		sellerBusinessModel,
		sellerCountryOfOrigin,
		sellerAmazonMarketplace,
		sellerDominantProduct,
		sellerDatapoint,
		sellerRevenue
	} = formData;

	const { emailErr, firstNameErr, lastNameErr, messageErr } = formDataError;

	/* Mount the react modal */
	useEffect(() => {
		Modal.setAppElement('#formSubmitConfirm');
	}, []);

	/* Effects for Email validation */
	useEffect(() => {
		if (email.trim().length > 0) {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					emailErr: !validator.isEmail(email.trim())
				};
			});
		} else {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					emailErr: false
				};
			});
		}
	}, [email]);

	/* Effect for First Name Validation */
	useEffect(() => {
		if (firstName.trim().length > 0) {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					firstNameErr: !validator.isAlpha(firstName)
				};
			});
		} else {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					firstNameErr: false
				};
			});
		}
	}, [firstName]);

	/* Effect for Last Name Validation */
	useEffect(() => {
		if (lastName.trim().length > 0) {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					lastNameErr: !validator.isAlpha(lastName)
				};
			});
		} else {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					lastNameErr: false
				};
			});
		}
	}, [lastName]);

	/* Clear the form data */
	const clearForm = () => {
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			message: '',
			sellerBusinessModel: [],
			sellerCountryOfOrigin: [],
			sellerAmazonMarketplace: [],
			sellerDominantProduct: [],
			sellerDatapoint: [],
			sellerRevenue: []
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('email', email);
		formData.append('firstname', firstName);
		formData.append('lastname', lastName);
		formData.append(
			'seller_list_business_model',
			sellerBusinessModel.join(',')
		);
		formData.append(
			'seller_list_country_of_origin',
			sellerCountryOfOrigin.join(',')
		);
		formData.append(
			'seller_list_marketplace',
			sellerAmazonMarketplace.join(',')
		);
		formData.append(
			'seller_list_dominant_product_category',
			sellerDominantProduct.join(',')
		);
		formData.append('seller_list_datapoint', sellerDatapoint.join(','));
		formData.append('seller_list_annual_revenue', sellerRevenue.join(','));
		formData.append('seller_list_message', message);
		formData.append('is_sellgo_seller_list_requested', 'true');

		try {
			const URL = `${AppConfig.API_URL}/sellers/create-hubspot`;
			const response = await axios.post(URL, formData);
			if (response.status === 201) {
				clearForm();
				setShowDemoForm(false);
				setOpenSubmitConfirm(true);
			}
		} catch (err) {
			console.error('Error Sending data to hubspot');
			setShowDemoForm(false);
			clearForm();
		}
	};

	return (
		<>
			{showDemoForm && (
				<div className={styles.demoPage}>
					<button
						onClick={() => {
							setOpenSubmitConfirm(false);
							onRequestClose();
						}}
						className={styles.closeButton}
					>
						<Close width={10} height={10} fill="#636d76" />
					</button>
					<form className={styles.demoPageForm} onSubmit={handleSubmit}>
						<h2>Looking for a customized seller list?</h2>
						<p>
							We&apos;re the only source for direct seller contact information
							and advanced list filtering, so you can reach to your leads
							quickly and accurately.
						</p>
						<div className={styles.inputControlWrapper}>
							<FormInput
								className={styles.formInput}
								label=""
								id="firstName"
								type="text"
								name="firstName"
								placeholder="First Name*"
								onChange={handleChange}
								value={firstName}
								autoComplete="off"
								required
								hasError={firstNameErr}
								errorMessage="Invalid First Name"
							/>

							<FormInput
								className={styles.formInput}
								label=""
								placeholder="Last Name*"
								id="lastName"
								type="text"
								name="lastName"
								onChange={handleChange}
								value={lastName}
								autoComplete="off"
								hasError={lastNameErr}
								required
								errorMessage="Invalid Last Name"
							/>

							<FormInput
								className={`
								${styles.formInput}
								${styles.formInput__long}
							`}
								label=""
								placeholder="Business email*"
								id="email"
								type="email"
								name="email"
								onChange={handleChange}
								value={email}
								autoComplete="off"
								required
								hasError={emailErr}
								errorMessage="Invalid Email"
							/>
							<CheckboxDropdownInput
								className={styles.checkboxDropdown}
								label="Seller Business Model"
								placeholder="Business Model"
								filterOptions={SELLER_BUSINESS_MODEL_OPTIONS}
								selectedValues={sellerBusinessModel}
								name="sellerBusinessModel"
								handleChange={handleChange}
							/>
							<CheckboxDropdownInput
								className={styles.checkboxDropdown}
								label="Seller Country Of Origin"
								placeholder="Country of Origin"
								filterOptions={SELLER_COUNTRY_OPTIONS}
								selectedValues={sellerCountryOfOrigin}
								name="sellerCountryOfOrigin"
								handleChange={handleChange}
							/>
							<CheckboxDropdownInput
								className={styles.checkboxDropdown}
								label="Amazon Marketplace"
								placeholder="Marketplace"
								filterOptions={SELLER_MARKETPLACE_OPTIONS}
								selectedValues={sellerAmazonMarketplace}
								name="sellerAmazonMarketplace"
								handleChange={handleChange}
							/>
							<CheckboxDropdownInput
								className={styles.checkboxDropdown}
								label="Dominant Product Category"
								placeholder="Dominant Product Category"
								filterOptions={SELLER_DOMINANT_PRODUCT_CATEGORY_OPTIONS}
								selectedValues={sellerDominantProduct}
								name="sellerDominantProduct"
								handleChange={handleChange}
							/>
							<CheckboxDropdownInput
								className={styles.checkboxDropdown}
								label="Seller Datapoint"
								placeholder="Datapoint"
								filterOptions={SELLER_DATAPOINT_OPTIONS}
								selectedValues={sellerDatapoint}
								name="sellerDatapoint"
								handleChange={handleChange}
							/>
							<CheckboxDropdownInput
								className={styles.checkboxDropdown}
								label="Seller Annual Revenue"
								placeholder="Annual Revenue"
								filterOptions={SELLER_ANNUAL_REVENUE_OPTIONS}
								selectedValues={sellerRevenue}
								name="sellerRevenue"
								handleChange={handleChange}
							/>
							<FormInput
								className={`
								${styles.formInput}
								${styles.formInput__long}
							`}
								label=""
								placeholder="Anything you want to add?*"
								id="Message"
								type="text"
								name="message"
								onChange={handleChange}
								value={message}
								autoComplete="off"
								hasError={messageErr}
								errorMessage=""
								required
							/>
						</div>
						<button
							className={`ctabutton ctabutton--primary ctabutton--medium ${styles.submitButton}`}
							type="submit"
							disabled={firstNameErr || lastNameErr || emailErr}
						>
							Submit
						</button>
						<p className={styles.terms}>
							By subscribing, you agree to our
							<Link href="/privacy-policy" passHref>
								<a> Privacy Policy </a>
							</Link>
							and
							<Link href="/terms-of-use" passHref>
								<a> Terms of Use. </a>
							</Link>
							By clicking submit, you agree to our Terms of Service.
						</p>
					</form>
					<div className={styles.existingBrands}>
						<p>
							Many brands choose Sellgo to achieve their outreach campaign,
							leads engagement and closing the deals.
						</p>
						<div className={styles.socialProofIcons}>
							<Image
								src={'/Poshmark.png'}
								alt="PoshmarkLogo"
								width={100}
								height={46}
							/>
							<Image
								src={'/Corpay.png'}
								alt="CorpayLogo"
								width={100}
								height={28}
							/>
							<Image src={'/Joom.png'} alt="JoomLogo" width={100} height={24} />
							<Image
								src={'/Clearbank.png'}
								alt="ClearbankLogo"
								width={100}
								height={18}
							/>
							<Image src={'/Nest.png'} alt="NestLogo" width={100} height={38} />
							<Image
								src={'/Blackstone.png'}
								alt="BlackstoneLogo"
								width={100}
								height={24}
							/>
							<Image
								src={'/Fitchbrew.png'}
								alt="FitchbrewLogo"
								width={100}
								height={34}
							/>
							<Image
								src={'/MetkixLogo.png'}
								alt="MetkixLogo"
								width={70}
								height={30}
							/>
							<Image
								src={'/LuxeLogo.png'}
								alt="LuxeLogo"
								width={100}
								height={52}
							/>
							<Image
								src={'/Skopenow.png'}
								alt="SkopeLogo"
								width={100}
								height={19}
							/>
							<Image src={'/BBLogo.png'} alt="BBLogo" width={100} height={17} />
							<Image
								src={'/Aspire.png'}
								alt="AspireLogo"
								width={100}
								height={29}
							/>
						</div>
						<p>
							Many brands choose Sellgo to achieve their outreach campaign,
							leads engagement and closing the deals.
						</p>
					</div>
				</div>
			)}

			<div id="formSubmitConfirm"></div>
			<Modal
				isOpen={openSubmitConfirm}
				onRequestClose={() => {
					setOpenSubmitConfirm(false);
					onRequestClose();
				}}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<FormSubmitConfirm
					heading="You're all set"
					body="Your seller list request has been confirmed!."
					ending="Our sales team will be in touch with you soon."
				/>
			</Modal>
		</>
	);
};

export default DemoForm;

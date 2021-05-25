import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import validator from 'validator';
import Image from 'next/image';
import axios from 'axios';
import Select from 'react-select';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Demo/HeroBox';

/* Components */
import FormInput from '../../components/FormInput';
import SEOHead from '../../components/SEOHead';

/* Constants */
import {
	employSizeList,
	defaultPhoneCode,
	countryPhoneCodeList
} from '../../constants';

/* Data */
import { seoData } from '../../data/SEO/demo';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* App Config */
import AppConfig from '../../config';

interface Props {}

const DemoPage: React.FC<Props> = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		countryCode: defaultPhoneCode,
		phoneNumber: '',
		email: '',
		company: '',
		website: '',
		companySize: employSizeList[0].value,
		sellgoBlog: false
	});

	const [formDataError, setFormDataError] = useState({
		firstNameErr: false,
		lastNameErr: false,
		emailErr: false,
		phoneNumberErr: false,
		companyErr: false,
		websiteErr: false
	});

	const handleChange = (e: any) => {
		const { value, name, checked } = e.target;

		if (name === 'sellgoBlog') {
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

	const handleCompanySizeChange = (selectedOption: any) => {
		setFormData((prevState) => {
			return {
				...prevState,
				companySize: selectedOption.value
			};
		});
	};

	const handleCountryCodeChange = (selectedOption: any) => {
		setFormData((prevState) => {
			return {
				...prevState,
				countryCode: selectedOption
			};
		});
	};

	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		company,
		website,
		companySize,
		sellgoBlog,
		countryCode
	} = formData;

	const {
		emailErr,
		firstNameErr,
		lastNameErr,
		phoneNumberErr,
		companyErr,
		websiteErr
	} = formDataError;

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

	/* Effect for Phone Number Validation */
	useEffect(() => {
		if (phoneNumber.trim().length > 0) {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					phoneNumberErr: !validator.isMobilePhone(phoneNumber)
				};
			});
		} else {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					phoneNumberErr: false
				};
			});
		}
	}, [phoneNumber]);

	/* Effect for Company Name Validation */
	useEffect(() => {
		if (company.length > 0) {
			setFormDataError((prevState) => {
				return {
					...prevState,
					companyErr: company.trim().length === 0
				};
			});
		} else {
			setFormDataError((prevState) => {
				return {
					...prevState,
					companyErr: false
				};
			});
		}
	}, [company]);

	/* Effect for Website URL Validation */
	useEffect(() => {
		if (website.length > 0) {
			setFormDataError((prevState) => {
				return {
					...prevState,
					websiteErr: !validator.isURL(website)
				};
			});
		} else {
			setFormDataError((prevState) => {
				return {
					...prevState,
					websiteErr: false
				};
			});
		}
	}, [website]);

	/* Clear the form data */
	const clearForm = () => {
		setFormData({
			firstName: '',
			lastName: '',
			countryCode: defaultPhoneCode,
			phoneNumber: '',
			email: '',
			company: '',
			website: '',
			companySize: employSizeList[0].value,
			sellgoBlog: false
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('email', email);
		formData.append('firstname', firstName);
		formData.append('lastname', lastName);
		formData.append('phone', `${countryCode.value}-${phoneNumber}`);
		formData.append('company', company);
		formData.append('website', website);
		formData.append('numemployees', companySize);
		formData.append('subscribeblog', sellgoBlog ? 'Yes' : 'No');

		try {
			const URL = `${AppConfig.API_URL}/sellers/create-hubspot`;
			const response = await axios.post(URL, formData);
			if (response.status === 201) {
				clearForm();
			}
		} catch (err) {
			console.error('Error Sending data to hubspot');
			clearForm();
		}
	};

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main className={styles.demoPage}>
				<HeroBox />
				<div className={`page-container ${styles.demoPageContent}`}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea.
					</p>
				</div>

				<form className={styles.demoPageForm} onSubmit={handleSubmit}>
					<div className={styles.inputControlWrapper}>
						<FormInput
							className={styles.formInput}
							label="First Name *"
							id="firstName"
							type="text"
							name="firstName"
							onChange={handleChange}
							value={firstName}
							autoComplete="off"
							required
							hasError={firstNameErr}
							errorMessage="Invalid First Name"
						/>

						<FormInput
							className={styles.formInput}
							label="Last Name *"
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

						<div className={styles.dropdownWrapper}>
							<label> Country Code *</label>
							<Select
								defaultValue={defaultPhoneCode}
								options={countryPhoneCodeList}
								className={styles.countrySelect}
								classNamePrefix="dropdown"
								id="dropdown"
								onChange={handleCountryCodeChange}
								value={countryCode}
							/>
						</div>

						<FormInput
							className={styles.formInput}
							label="Phone Number *"
							id="phoneNumber"
							type="text"
							name="phoneNumber"
							onChange={handleChange}
							value={phoneNumber}
							autoComplete="off"
							required
							hasError={phoneNumberErr}
							errorMessage="Invalid Phone Number"
						/>

						<FormInput
							className={styles.formInput}
							label="Email *"
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

						<FormInput
							className={styles.formInput}
							label="Company *"
							id="company"
							type="text"
							name="company"
							onChange={handleChange}
							value={company}
							autoComplete="off"
							required
							hasError={companyErr}
							errorMessage="Please enter company name"
						/>

						<FormInput
							className={styles.formInput}
							label="Website *"
							id="website"
							type="text"
							name="website"
							onChange={handleChange}
							value={website}
							autoComplete="off"
							required
							hasError={websiteErr}
							errorMessage="Please enter valid URL"
						/>

						<div className={styles.formInput}>
							<label># of Employees</label>
							<Dropdown
								options={employSizeList}
								onChange={handleCompanySizeChange}
								className={styles.selectDropdown}
								placeholderClassName={styles.selectDropdown__placeholder}
								controlClassName={styles.selectDropdown__control}
								menuClassName={styles.selectDropdown__menu}
								value={companySize}
								arrowClosed={
									<Image
										src="/dropdownArrow.svg"
										width={10}
										height={10}
										alt="Dropdown Arrow"
									/>
								}
								arrowOpen={
									<Image
										src="/dropdownArrow.svg"
										width={10}
										height={10}
										alt="Dropdown Arrow"
									/>
								}
							/>
						</div>

						<FormInput
							className={styles.selectCheckbox}
							type="checkbox"
							name="sellgoBlog"
							id="sellgoBlog"
							checked={sellgoBlog}
							onChange={handleChange}
							label="Subscribe to Sellgo's blog"
							value={sellgoBlog ? 'on' : 'off'}
							labelLast
						/>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip
					</p>

					<button
						className="ctabutton ctabutton--primary ctabutton--medium"
						type="submit"
						disabled={
							firstNameErr ||
							lastNameErr ||
							emailErr ||
							phoneNumberErr ||
							companyErr ||
							websiteErr
						}
					>
						Get your free demo
					</button>
				</form>
			</main>
		</>
	);
};

export default DemoPage;

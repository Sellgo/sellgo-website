import React, { useEffect, useState } from 'react';
import validator from 'validator';
import Select from 'react-select';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../components/FormInput';

/* Constants */
import {
	// employSizeList,
	defaultPhoneCode,
	countryPhoneCodeList
} from '../../../constants';
import {
	// helpUserOptions,
	// industryOptions,
	// countryOptions,
	noOfEmployeesOptions
} from './data';

/* Utils */
import AppConfig from '../../../config';

interface Props {}

const DemoForm: React.FC<Props> = () => {
	const [step, setStep] = useState(1);

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		countryCode: defaultPhoneCode,
		phoneNumber: '',
		email: '',
		company: '',
		country: '',
		industry: '',
		helpUser: '',
		companySize: noOfEmployeesOptions[0],
		isExistingCustomer: false,
		totalOrders: ''
	});

	const [formDataError, setFormDataError] = useState({
		firstNameErr: false,
		lastNameErr: false,
		emailErr: false,
		phoneNumberErr: false,
		companyErr: false,
		totalOrdersErr: false
	});

	const handleChange = (e: any) => {
		const { value, name } = e.target;

		setFormData((prevState) => {
			return {
				...prevState,
				[name]: value
			};
		});
	};

	const handleDropdownChange = (selectedOption: any, key: string) => {
		setFormData((prevState) => {
			return {
				...prevState,
				[key]: selectedOption
			};
		});
	};

	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		company,
		totalOrders,
		companySize,
		isExistingCustomer,
		country,
		industry,
		helpUser,
		countryCode
	} = formData;

	const {
		emailErr,
		firstNameErr,
		lastNameErr,
		phoneNumberErr,
		companyErr,
		totalOrdersErr
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

	/* Effect forTotal Orders Validation */
	useEffect(() => {
		if (totalOrders.length > 0) {
			setFormDataError((prevState) => {
				return {
					...prevState,
					websiteErr: !validator.isURL(totalOrders)
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
	}, [totalOrders]);

	/* Clear the form data */
	const clearForm = () => {
		setFormData({
			firstName: '',
			lastName: '',
			countryCode: defaultPhoneCode,
			phoneNumber: '',
			totalOrders: '',
			email: '',
			company: '',
			industry: '',
			country: '',
			helpUser: '',
			companySize: noOfEmployeesOptions[0],
			isExistingCustomer: false
		});

		setStep(1);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('email', email);
		formData.append('firstname', firstName);
		formData.append('lastname', lastName);
		formData.append('phone', `${countryCode.value}-${phoneNumber}`);
		formData.append('company', company);
		formData.append('numemployees', companySize.value.toString());
		formData.append(
			'is_existing_customer',
			isExistingCustomer ? 'true' : 'false'
		);
		formData.append('is_sellgo_demo_requested', 'true');
		formData.append('total_orders_per_month', totalOrders);

		try {
			const URL = `${AppConfig.API_URL}/sellers/create-hubspot`;
			const response = await axios.post(URL, formData);
			if (response.status === 201) {
				clearForm();
			}
		} catch (err) {
			console.error('Error Sending data to hubspot');
		}
	};

	const handleNextStep = async (e: any) => {
		e.preventDefault();
		setStep(2);
	};

	return (
		<div className={styles.formContainer}>
			<p className={styles.step}>Step {step} of 2</p>
			<h1>Request a demo</h1>
			<p>
				Leave a few details below and we’ll connect you with a Sellgo expert who
				can show you how Sellgo can help your business.
			</p>

			{step === 1 ? (
				<form className={styles.demoPageForm} onSubmit={handleNextStep}>
					<div className={styles.inputControlWrapper}>
						<FormInput
							className={`
								${styles.formInput}
							`}
							label=""
							placeholder="Email*"
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
					</div>

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
					</div>

					<div className={styles.inputControlWrapper}>
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
					</div>

					<div className={styles.dropdownWrapper}>
						<Select
							placeholder="Country*"
							options={countryPhoneCodeList}
							className={styles.countrySelect}
							classNamePrefix="dropdown"
							id="dropdown"
							onChange={(selected) => handleDropdownChange(selected, 'country')}
							value={country}
						/>
					</div>

					<div className={styles.dropdownWrapper}>
						<Select
							options={countryPhoneCodeList}
							placeholder="How can we help you?*"
							className={styles.countrySelect}
							classNamePrefix="dropdown"
							id="dropdown"
							onChange={(selected) =>
								handleDropdownChange(selected, 'helpUser')
							}
							value={helpUser}
						/>
					</div>

					<button
						className={`ctabutton ctabutton--primary ctabutton--medium ${styles.submitButton}`}
						type="submit"
						disabled={
							firstNameErr ||
							lastNameErr ||
							emailErr ||
							!country ||
							!firstName ||
							!lastName ||
							!email ||
							!helpUser
						}
					>
						Next Step
					</button>
				</form>
			) : (
				<form className={styles.demoPageForm} onSubmit={handleSubmit}>
					<div className={styles.inputControlWrapper}>
						<FormInput
							className={`
								${styles.formInput}
							`}
							label=""
							placeholder="Company*"
							id="company"
							type="text"
							name="company"
							onChange={handleChange}
							value={company}
							autoComplete="off"
							required
							hasError={companyErr}
							errorMessage="Invalid Company"
						/>
					</div>

					<div className={styles.dropdownWrapper}>
						<Select
							defaultValue={null}
							placeholder="Industry*"
							options={countryPhoneCodeList}
							className={styles.countrySelect}
							classNamePrefix="dropdown"
							id="dropdown"
							onChange={(selected) =>
								handleDropdownChange(selected, 'industry')
							}
							value={industry}
						/>
					</div>

					<div className={styles.phoneContainer}>
						<div className={styles.dropdownWrapper}>
							<Select
								defaultValue={defaultPhoneCode}
								options={countryPhoneCodeList}
								className={`${styles.countrySelect} ${styles.countryCodeSelect}`}
								classNamePrefix="dropdown"
								id="dropdown"
								onChange={(selected) =>
									handleDropdownChange(selected, 'countryCode')
								}
								value={countryCode}
							/>
						</div>

						<FormInput
							className={`${styles.formInput} ${styles.phoneInput}`}
							label=""
							id="phoneNumber"
							type="text"
							name="phoneNumber"
							placeholder="Phone Number*"
							onChange={handleChange}
							value={phoneNumber}
							autoComplete="off"
							required
							hasError={phoneNumberErr}
							errorMessage="Invalid Phone Number"
						/>
					</div>

					<div className={styles.dropdownWrapper}>
						<Select
							defaultValue={null}
							placeholder="Number of employees*"
							options={countryPhoneCodeList}
							className={styles.countrySelect}
							classNamePrefix="dropdown"
							id="dropdown"
							onChange={(selected) =>
								handleDropdownChange(selected, 'companySize')
							}
							value={companySize}
						/>
					</div>

					<div className={styles.inputControlWrapper}>
						<FormInput
							className={`
								${styles.formInput}
								${styles.totalOrders}
							`}
							label=""
							placeholder="Monthly customer acquisition spend? in USD$*"
							id="totalOrders"
							type="number"
							name="totalOrders"
							onChange={handleChange}
							value={totalOrders}
							autoComplete="off"
							required
							hasError={totalOrdersErr}
							errorMessage="Please enter in USD numbers"
						/>
					</div>

					<button
						className={`ctabutton ctabutton--primary ctabutton--medium ${styles.submitButton}`}
						type="submit"
						disabled={
							companyErr ||
							!company ||
							!countryCode ||
							!country ||
							!industry ||
							!totalOrders ||
							!companySize ||
							totalOrdersErr
						}
					>
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default DemoForm;

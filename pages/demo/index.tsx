import React, { useEffect, useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import isAlpha from 'validator/es/lib/isAlpha';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import isURL from 'validator/es/lib/isURL';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Demo/HeroBox';

/* Components */
import FormInput from '../../components/FormInput';

interface Props {}

const DemoPage: React.FC<Props> = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		company: '',
		website: '',
		companySize: ''
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
		const { value, name } = e.target;
		setFormData((prevState) => {
			return {
				...prevState,
				[name]: value
			};
		});
	};

	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		company,
		website
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
					emailErr: !isEmail(email)
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
					firstNameErr: !isAlpha(firstName)
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
					lastNameErr: !isAlpha(lastName)
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
					phoneNumberErr: !isMobilePhone(phoneNumber)
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
					websiteErr: !isURL(website)
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

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<main className={styles.demoPage}>
			<HeroBox />
			<div className={`page-container ${styles.demoPageContent}`}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
				</div>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
	);
};

export default DemoPage;

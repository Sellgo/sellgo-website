import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Dropdown from 'react-dropdown';
import validator from 'validator';
import axios from 'axios';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../components/FormInput';
import MultiSelectCheckBoxInput from '../../../components/MultiSelectCheckBoxInput';

/* App Config */
import AppConfig from '../../../config';

/* Data */
import {
	typesOfUsersData,
	businessModelsData,
	audienceConnectionMethodsData,
	familiarityWithSellgoData
} from './data';

interface Props {}

const ScheduleMeeting: React.FC<Props> = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		typeOfUser: typesOfUsersData[0],
		businessModels: '',
		audienceConnectionMethods: '',
		familiarityWithSellgo: familiarityWithSellgoData[0],
		marketingPlan: '',
		urlsToPromoteSellgo: '',
		existingAudience: '',
		easierLifeMessage: '',
		ppcTosAck: '',
		couponMarketingAck: '',
		privacyPolicyAck: ''
	});

	const [formDataError, setFormDataError] = useState({
		firstNameErr: false,
		lastNameErr: false,
		emailErr: false
	});

	/* Handler for event changes */
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevState) => {
			return {
				...prevState,
				[name]: value
			};
		});
	};

	/* Handler for type of user change */
	const handleTypeOfUserChange = (selectedOption: any) => {
		setFormData((prevState) => {
			return {
				...prevState,
				typeOfUser: selectedOption.value
			};
		});
	};

	/* Handler for type of user change */
	const handleFamiliarityWithSellgoChange = (selectedOption: any) => {
		setFormData((prevState) => {
			return {
				...prevState,
				familiarityWithSellgo: selectedOption.value
			};
		});
	};
	const {
		firstName,
		lastName,
		email,
		typeOfUser,
		businessModels,
		audienceConnectionMethods,
		familiarityWithSellgo,
		marketingPlan,
		urlsToPromoteSellgo,
		existingAudience,
		easierLifeMessage,
		ppcTosAck,
		couponMarketingAck,
		privacyPolicyAck
	} = formData;

	const { firstNameErr, lastNameErr, emailErr } = formDataError;

	// mounting for submision confirmation modal
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
			typeOfUser: typesOfUsersData[0],
			businessModels: '',
			audienceConnectionMethods: '',
			familiarityWithSellgo: familiarityWithSellgoData[0],
			marketingPlan: '',
			urlsToPromoteSellgo: '',
			existingAudience: '',
			easierLifeMessage: '',
			ppcTosAck: '',
			couponMarketingAck: '',
			privacyPolicyAck: ''
		});
	};

	/* Handle form submission */
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('firstname', firstName);
		formData.append('lastname', lastName);
		formData.append('email', email);
		formData.append('typeOfUser', typeOfUser);
		formData.append('businessModels', businessModels);
		formData.append('audienceConnectionMethods', audienceConnectionMethods);
		formData.append('familiarityWithSellgo', familiarityWithSellgo);
		formData.append('marketingPlan', marketingPlan);
		formData.append('urlsToPromoteSellgo', urlsToPromoteSellgo);
		formData.append('existingAudience', existingAudience);
		formData.append('easierLifeMessage', easierLifeMessage);
		formData.append('ppcTosAck', ppcTosAck);
		formData.append('couponMarketingAck', couponMarketingAck);
		formData.append('privacyPolicyAck', privacyPolicyAck);

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
			<form
				className={`page-container ${styles.applicationForm}`}
				onSubmit={handleSubmit}
			>
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
					required
					hasError={lastNameErr}
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

				<div className={styles.formInput}>
					<label>Select the best that applies to you * </label>
					<Dropdown
						options={typesOfUsersData}
						onChange={handleTypeOfUserChange}
						className={styles.selectDropdown}
						placeholderClassName={styles.selectDropdown__placeholder}
						controlClassName={styles.selectDropdown__control}
						menuClassName={styles.selectDropdown__menu}
						value={typeOfUser}
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

				<MultiSelectCheckBoxInput
					label="Do you work with any of these business models? *"
					options={businessModelsData}
					onChange={handleChange}
					id={'businessModels'}
					name={'businessModels'}
					className={styles.formInput}
					optionClassName={styles.formInput__checkBox}
				/>

				<MultiSelectCheckBoxInput
					label="How do you connect with your audience? *"
					options={audienceConnectionMethodsData}
					onChange={handleChange}
					id={'audienceConnectionMethods'}
					name={'audienceConnectionMethods'}
					className={styles.formInput}
					optionClassName={styles.formInput__checkBox}
				/>

				<div className={styles.formInput}>
					<label>
						How familiar are you with Sellgo&apos;s product and features? *
					</label>
					<Dropdown
						options={familiarityWithSellgoData}
						onChange={handleFamiliarityWithSellgoChange}
						className={styles.selectDropdown}
						placeholderClassName={styles.selectDropdown__placeholder}
						controlClassName={styles.selectDropdown__control}
						menuClassName={styles.selectDropdown__menu}
						value={familiarityWithSellgo}
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
					className={styles.formInput}
					label="How do you plan to market Sellgo and our tools as an affiliate partner? *"
					id="marketingPlan"
					type="text"
					name="marketingPlan"
					onChange={handleChange}
					value={marketingPlan}
					autoComplete="off"
					required
					errorMessage="Please fill in this field."
				/>

				<FormInput
					className={styles.formInput}
					label={`Please list the URLs of all the websites you intend 
						to use to promote Sellgo (website, Facebook group, YouTube channel, etc.) *`}
					id="urlsToPromoteSellgo"
					type="text"
					name="urlsToPromoteSellgo"
					onChange={handleChange}
					value={urlsToPromoteSellgo}
					autoComplete="off"
					required
					errorMessage="Please fill in this field."
				/>

				<FormInput
					className={styles.formInput}
					label={`If you have an existing audience, how large is it? 
						(Email list, subscribers, students, site traffic, etc.) *`}
					id="existingAudience"
					type="text"
					name="existingAudience"
					onChange={handleChange}
					value={existingAudience}
					autoComplete="off"
					required
					errorMessage="Please fill in this field."
				/>

				<MultiSelectCheckBoxInput
					label={`Please acknowledge our PPC TOS does not allow 
						bidding on our branded search terms. Doing so will result in 
						a ban and your commissions forfeited. *`}
					options={['Yes, I understand.']}
					onChange={handleChange}
					id={'ppcTosAck'}
					name={'ppcTosAck'}
					className={styles.formInput}
					optionClassName={styles.formInput__checkBox}
					required
				/>

				<MultiSelectCheckBoxInput
					label={`Please acknowledge our program does not allow any 
						Coupon Site affiliate marketing. *`}
					options={['Yes, I understand.']}
					onChange={handleChange}
					id={'couponMarketingAck'}
					name={'couponMarketingAck'}
					className={styles.formInput}
					optionClassName={styles.formInput__checkBox}
					required
				/>

				<FormInput
					className={styles.formInput}
					label={`What will make your life easier as our affiliate?`}
					id="easierLifeMessage"
					type="text"
					name="easierLifeMessage"
					onChange={handleChange}
					value={easierLifeMessage}
					autoComplete="off"
					errorMessage="Invalid Email"
				/>

				<MultiSelectCheckBoxInput
					options={[
						`I have read, understand, and agree to the terms 
						and services and privacy policy. *`
					]}
					onChange={handleChange}
					id={'privacyPolicyAck'}
					name={'privacyPolicyAck'}
					className={styles.formInput}
					optionClassName={styles.formInput__checkBox}
					required
				/>

				<button
					type="submit"
					className="ctabutton ctabutton--primary ctabutton--medium"
					disabled={firstNameErr || lastNameErr || emailErr}
				>
					Next
				</button>

				<p className={styles.formSubmitInfo}>
					You&apos;ll be asked to create an account on Rewardful or login to
					your existing account if you have one.
				</p>
			</form>

			<div id="formSubmitConfirm"></div>
		</>
	);
};

export default ScheduleMeeting;

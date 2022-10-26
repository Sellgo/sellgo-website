import React, { useEffect, useState } from 'react';
import validator from 'validator';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../components/FormInput';
import MultiSelectCheckBoxInput from '../../../components/MultiSelectCheckBoxInput';

/* App Config */
import Close from '../../../components/Icons/Close';

interface Props {
	onRequestClose: () => void;
	countriesData: string[];
	defaultEmail?: string;
}

const FreeSampleModal: React.FC<Props> = (props: Props) => {
	const { onRequestClose, countriesData, defaultEmail } = props;
	/* eslint-disable */
	const [showDemoForm, setShowDemoForm] = useState(true);
	/* eslint-enable no-unused-vars */
	const [email, setEmail] = useState(defaultEmail || '');
	const [emailError, setEmailError]: any = useState(false);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		if (defaultEmail) {
			setEmail(defaultEmail);
		}
	}, []);

	/* Effects for Email validation */
	useEffect(() => {
		if (countries.length > 3) {
			setEmailError('Select 3 choices max!');
		} else if (email.length > 0) {
			setEmailError(!validator.isEmail(email.trim()) ? 'Invalid Email' : '');
		} else {
			setEmailError(false);
		}
	}, [email, countries.length]);

	const handleSelectCountry = (e: any) => {
		const _countries = e.target.value ? e.target.value.split(';') : [];
		setCountries(_countries);

		if (_countries.length > 3) {
			setEmailError('Select 3 choices max!');
		}

		if (!_countries.length) {
			setEmailError('Please select at least one country');
		}
	};

	const handleChangeEmail = (e: any) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<>
			{showDemoForm && (
				<div className={styles.demoPage}>
					<button
						onClick={() => {
							onRequestClose();
						}}
						className={styles.closeButton}
					>
						<Close width={10} height={10} fill="#636d76" />
					</button>

					<form className={styles.demoPageForm} onSubmit={handleSubmit}>
						<h2>Get your sample now!</h2>
						<p>
							Plus other neat case studies and exclusive data to unlock your
							growth.
						</p>
						<MultiSelectCheckBoxInput
							options={countriesData}
							onChange={handleSelectCountry}
							id={'countries'}
							name={'countries'}
							className={styles.formInput}
							optionClassName={styles.formInput__checkBox}
						/>

						<div className={styles.formContainer}>
							<FormInput
								className={`
								${styles.formInputEmail}
								${styles.formInputEmail__long}
							`}
								placeholder="email@domain.com"
								id="email"
								type="email"
								name="email"
								onChange={handleChangeEmail}
								value={email}
								required
								autoComplete="off"
								hasError={emailError}
								errorMessage={emailError}
							/>

							<button
								className={styles.primaryButton}
								disabled={emailError || !email || !countries.length}
							>
								Subscribe
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

FreeSampleModal.defaultProps = {
	defaultEmail: ''
};

export default FreeSampleModal;

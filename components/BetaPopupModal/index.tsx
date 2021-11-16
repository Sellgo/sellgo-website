import React from 'react';
import Link from 'next/link';
import validator from 'validator';

/* Styling */
import axios from 'axios';
import styles from './index.module.scss';
import FormInput from '../FormInput';
import AppConfig from '../../config';

interface Props {
	customerCount: number;
	setModalOpen: (open: boolean) => void;
}

const BetaPopupModal: React.FC<Props> = (props: Props) => {
	const { customerCount, setModalOpen } = props;
	const [email, setEmail] = React.useState('');
	const [emailErr, setEmailErr] = React.useState(false);

	/* Effects for Email validation */
	React.useEffect(() => {
		if (email.trim().length > 0) {
			setEmailErr(!validator.isEmail(email.trim()));
		} else {
			setEmailErr(false);
		}
	}, [email]);

	/* Clear the form data */
	const clearForm = () => {
		setEmail('');
		setEmailErr(false);
	};

	const handleChange = (e: any) => {
		const { value } = e.target;
		setEmail(value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('email', email);
		try {
			const URL = `${AppConfig.API_URL}/sellers/create-beta-lead-hubspot`;
			const response = await axios.post(URL, formData);
			if (response.status === 201) {
				clearForm();
				setModalOpen(false);
			}
		} catch (err) {
			console.error('Error Sending data to hubspot');
			clearForm();
		}
	};

	return (
		<div className={styles.betaPopupModal}>
			<h2>Get 50% OFF Limited Offer</h2>
			<p className={styles.betaDescription}>
				1st month or 1st year of&nbsp;
				<span className={styles.seatsLeft}>
					1,000
					<span className={styles.actualSeatsLeft}>
						{1000 - customerCount} seats left.
					</span>
				</span>
				&nbsp;first time member Professional or team plan only.
			</p>
			<FormInput
				className={styles.formInput}
				label=""
				id="email"
				type="email"
				name="email"
				placeholder="youremail@address.com"
				onChange={handleChange}
				value={email}
				autoComplete="off"
				required
				hasError={emailErr}
				errorMessage="Invalid Email"
			/>
			<button className={styles.submitButton} onClick={handleSubmit}>
				<span className={styles.innerButton}>Get My Discount Code Now</span>
			</button>

			<p className={styles.moneybackTerms}>
				7-day money back guarantee too, no questions asked.
			</p>

			<p className={styles.betaTerms}>
				We&apos;re committed to your privacy. Sellgo uses the information you
				provide to us to contact you about our relevant content, products, and
				services. You may unsubscribe from these communications at any time.
			</p>
			<p className={styles.betaTerms}>
				For more information, check out our&nbsp;
				<Link href="/privacy-policy" passHref>
					<a>Privacy Policy</a>
				</Link>
				.
			</p>
		</div>
	);
};

export default BetaPopupModal;

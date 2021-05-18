import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../FormInput';

interface Props {
	closeModal: () => void;
}

const ReCaptchaNewsLetter: React.FC<Props> = (props) => {
	const { closeModal } = props;

	const router = useRouter();

	const [email, setEmail] = useState<string>('');
	const [emailErr, setEmailErr] = useState<boolean>(false);
	const [token, setToken] = useState<string>('');

	const handleChange = (e: any) => {
		const { value } = e.target;
		setEmail(value);
	};

	const handleClick = () => {
		router.push('/privacy-policy');
		closeModal();
	};

	const handleCaptchaChange = (token: any) => {
		if (token.trim().length > 0) {
			setToken(token);
		} else {
			setToken('');
		}
		console.log(token);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!token) {
			return;
		}

		console.log(token);
	};

	/* Effect to validate email */
	useEffect(() => {
		if (email.trim().length > 0) {
			setEmailErr(!validator.isEmail(email));
		} else {
			setEmailErr(false);
		}
	}, [email]);

	return (
		<div className={styles.newsLetter}>
			<h1>Subscribe to Our Newsletter</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

			<form onSubmit={handleSubmit} className={styles.newsLetterForm}>
				<FormInput
					type="text"
					placeholder="youremail@address.com"
					autoComplete="off"
					value={email}
					onChange={handleChange}
					hasError={emailErr}
					errorMessage="Enter valid email"
					id="email"
					className={styles.formInput}
					name="email"
					required
				/>

				<div className={styles.formInput}>
					<ReCAPTCHA
						sitekey={String(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)}
						theme="light"
						size="normal"
						onChange={handleCaptchaChange}
					/>
				</div>

				<button
					className={`ctabutton ctabutton--primary ctabutton--medium ${styles.subscribeCTA}`}
					type="submit"
					disabled={emailErr || !token.trim().length}
				>
					Subscribe
				</button>
			</form>

			<div className={styles.importantNotes}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
					tortor at neque tempus scelerisque non sit amet sapien. Pellentesque
					faucibus, nisl sit.
				</p>
				<p>
					For more information, check out our{' '}
					<a onClick={handleClick} onKeyPress={() => {}}>
						privacy policy
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default ReCaptchaNewsLetter;

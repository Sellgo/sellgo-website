import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import validator from 'validator';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../FormInput';
import AppConfig from '../../config';
import Close from '../Icons/Close';

interface Props {
	closeModal: () => void;
}

const BlogSubscriptionModal: React.FC<Props> = (props) => {
	const { closeModal } = props;

	const [email, setEmail] = useState<string>('');
	const [emailErr, setEmailErr] = useState<boolean>(false);
	const [token, setToken] = useState<string>('');

	const handleChange = (e: any) => {
		const { value } = e.target;
		setEmail(value);
	};

	const clearForm = () => {
		setEmail('');
		setEmailErr(false);
		setToken('');
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		e.stopPropagation();

		if (!token) {
			return;
		}

		try {
			const formData = new FormData();
			formData.append('email', email);
			formData.append('subscribeblog', 'true');
			const response = await axios.post(
				`${AppConfig.API_URL}/sellers/create-hubspot`,
				formData
			);

			if (response && response.status === 201) {
				clearForm();
				closeModal();
			}
		} catch (err) {
			console.error('Error sending data to hubspot', err);
		}
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
			<button
				onClick={() => {
					clearForm();
					closeModal();
				}}
				className={styles.closeButton}
			>
				<Close width={10} height={10} fill="#636d76" />
			</button>
			<Image
				src="/successImage.png"
				width={330}
				height={300}
				alt="Success"
				className={styles.successImage}
			/>
			<div>
				<h1>
					Don&apos;t miss tomorrow&apos;s
					<br />
					Amazon seller news
				</h1>
				<p>
					Let Sellgo free newsletter keep you informed, straight from your
					inbox.
				</p>

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
						By entering your email, you agree to receive marketing email from
						Sellgo, you can unsubscribe at anytime.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BlogSubscriptionModal;

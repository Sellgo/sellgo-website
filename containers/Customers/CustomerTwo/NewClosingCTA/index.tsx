import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import validator from 'validator';

/* Styling */
import styles from './index.module.scss';

/* Components */
import DemoForm from '../../../Demo/DemoForm';
import AppConfig from '../../../../config';
import FormInput from '../../../../components/FormInput';
import { encodeBase64 } from '../../../../utils/Format';

const NewClosingCTASection = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	const [email, setEmail] = React.useState<string>('');
	const [emailErr, setEmailErr] = React.useState(false);
	const [emailErrMsg, setEmailErrMsg] = React.useState('');

	const onSignupClick = () => {
		if (email.trim().length > 0 && validator.isEmail(email.trim())) {
			const url = `${AppConfig.APP_URL}/signup?email=${encodeBase64(email)}`;
			window.open(url, '_blank');
		} else {
			setEmailErr(true);
			setEmailErrMsg('Please enter a valid email address.');
		}
	};

	/* Check when user stops typing email, if email is valid */
	React.useEffect(() => {
		if (email.trim().length > 0 && emailErr) {
			if (validator.isEmail(email.trim())) {
				setEmailErr(false);
				setEmailErrMsg('');
			} else {
				setEmailErr(true);
				setEmailErrMsg('Please enter a valid email address');
			}
		}
	}, [email, emailErr]);

	return (
		<section className={styles.closingCTASection}>
			<div className={`page-container ${styles.closingCTA}`}>
				<div className={styles.closingCTABox}>
					<div className={styles.closingCTABox__left}>
						<h2>
							Drive &nbsp;
							<Image
								src="/moreSales.png"
								width={145}
								height={51}
								alt="moresales"
							/>
							&nbsp; with AiStock today
						</h2>
						<p>
							Start a 14-day free trial of AiStock, no credit card required.
						</p>

						<div className={styles.ctaBox}>
							<div className={styles.emailSignupBox}>
								<FormInput
									id={'Email'}
									type={'text'}
									name={'Email'}
									value={email}
									placeholder="Email address"
									className={styles.formInput}
									onChange={(e) => setEmail(e.target.value)}
									autoComplete="off"
									required
									hasError={emailErr}
									errorMessage={emailErrMsg}
								/>
								<button
									className={styles.submitButton}
									disabled={emailErr}
									onClick={onSignupClick}
								>
									Start your free trial
								</button>
								<span>Premium features. Instant migration. Easy setup.</span>
							</div>
							<button
								className={styles.demoButton}
								onClick={() => setIsDemoFormOpen(true)}
							>
								Book your demo
							</button>
						</div>
					</div>
					<Image src="/closingCtaLaptop.png" width={400} height={250} />
				</div>
			</div>
			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default NewClosingCTASection;

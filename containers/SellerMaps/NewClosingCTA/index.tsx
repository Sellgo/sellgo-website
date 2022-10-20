import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import validator from 'validator';

/* Styling */
import styles from './index.module.scss';

/* Components */
import SellerListForm from '../../Demo/SellerListForm';
import AppConfig from '../../../config';
import FormInput from '../../../components/FormInput';
import { encodeBase64 } from '../../../utils/Format';

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
							Ready to &nbsp;
							<Image src="/own.png" width={62} height={47} alt="own" />
							&nbsp; your market?
						</h2>
						<p>
							Get seller data that revenue teams rely on to deliver business
							growth.
						</p>

						<div className={styles.ctaBox}>
							<div className={styles.emailSignupBox}>
								<FormInput
									id={'Email'}
									type={'text'}
									name={'Email'}
									value={email}
									placeholder="Business email*"
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
									Start your FREE account
								</button>
								<span>
									Free forever. No credit card required. Instant access.
								</span>
							</div>
							<button
								className={styles.demoButton}
								onClick={() => setIsDemoFormOpen(true)}
							>
								Need seller list?
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
				<SellerListForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default NewClosingCTASection;

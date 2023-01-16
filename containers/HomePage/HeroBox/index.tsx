import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import validator from 'validator';

/* Styling */
import styles from './index.module.scss';

/* Components */
import RainbowText from '../../../components/RainbowText';
import SellerListForm from '../../Demo/SellerListForm';
import FormInput from '../../../components/FormInput';
import Tooltip from '../../../components/Tooltip';

/* Utils */
import AppConfig from '../../../config';
import { encodeBase64 } from '../../../utils/Format';

const HeroBox = () => {
	const textList = [
		'agencies.',
		'B2B.',
		'aggregators.',
		'influencers.',
		'reviewers.',
		'competitors.',
		'marketplaces.'
	];
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
	const [isAnimationIncreasing, setAnimationIncreasing] = React.useState(true);
	const [animationIndex, setAnimationIndex] = React.useState(0);
	const [animatedText, setAnimatedText] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [emailErr, setEmailErr] = React.useState(false);
	const [emailErrMsg, setEmailErrMsg] = React.useState('');

	const onSignupClick = () => {
		if (email.trim().length > 0 && validator.isEmail(email.trim())) {
			const url = `${AppConfig.APP_URL}/signup?email=${encodeBase64(email)}`;
			window.open(url, '_blank');
		} else {
			setEmailErr(true);
			setEmailErrMsg('Please enter a valid business email address.');
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

	// Increment to next word
	const incrementToNextWord = () => {
		if (currentWordIndex < textList.length - 1) {
			setCurrentWordIndex(currentWordIndex + 1);
		} else {
			setCurrentWordIndex(0);
		}
	};

	// Animate text character by character
	React.useEffect(() => {
		const timeout = setTimeout(() => {
			const currentText = textList[currentWordIndex];
			// If animation is increasing
			if (animationIndex < currentText.length && isAnimationIncreasing) {
				setAnimatedText(animatedText + currentText[animationIndex]);
				setAnimationIndex(animationIndex + 1);

				// If animation is decreasing
			} else if (animationIndex > 0 && !isAnimationIncreasing) {
				setAnimatedText(animatedText.slice(0, -1));
				setAnimationIndex(animationIndex - 1);

				// If animation reaches a full word
			} else if (
				animationIndex === textList[currentWordIndex].length &&
				isAnimationIncreasing
			) {
				setTimeout(() => {
					setAnimationIncreasing(false);
				}, 1500);

				// If animation reaches 0 letters
			} else if (animationIndex === 0 && !isAnimationIncreasing) {
				incrementToNextWord();
				setAnimationIncreasing(true);
			}
		}, 80);

		return () => {
			clearInterval(timeout);
		};
	}, [animatedText, animationIndex, isAnimationIncreasing, currentWordIndex]);

	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={styles.textColumn}>
					<h1 className={`${styles.heading}`}>Amazon seller database for</h1>
					<h2 className={styles.animatedText}>
						<RainbowText type="purple_blue_gradient">
							{animatedText}
						</RainbowText>
					</h2>
					<p className={`${styles.tagline}`}>
						Search, connect and convert over millions of verified contacts at
						<br />
						1M+ Amazon seller companies with Sellgo leads intelligence platform.
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
							<Tooltip
								text="We are experiencing outage currently"
								trigger={
									<button
										disabled
										className={styles.submitButton}
										// disabled={emailErr}
										onClick={onSignupClick}
									>
										Create free account
									</button>
								}
							/>
							<span>
								Free forever. No credit card required. Instant access.
							</span>
						</div>
						<button
							className={styles.demoButton}
							onClick={() => setIsDemoFormOpen(true)}
						>
							Need seller lists?
						</button>
					</div>
				</div>
				<div className={styles.imageColumn}>
					<Image
						src="/homeImage.png"
						width={750}
						height={500}
						alt="alt"
						className={styles.heroImage}
					/>
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

export default HeroBox;

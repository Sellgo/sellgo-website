import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import validator from 'validator';

/* Styling */
import styles from './index.module.scss';

/* Components */
import RainbowText from '../../../components/RainbowText';
import DemoForm from '../../Demo/DemoForm';
import FormInput from '../../../components/FormInput';

/* Utils */
// import { createFreeTrialLink } from '../../../utils/Referral';
import AppConfig from '../../../config';
import { encodeBase64 } from '../../../utils/Format';

const HeroBox = () => {
	const textList = [
		'B2B agencies.',
		'Saas companies.',
		'aggregators.',
		'marketing services.',
		'outreach services.',
		'ads services.',
		'content creators.'
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
			setEmailErrMsg('Please enter a valid business email.');
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
				setEmailErrMsg('Please enter a valid business email.');
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
						Within seconds, Sellgo can reveal access to Amazon seller:
					</p>
					<p className={`${styles.tagbenefit}`}>
						<br />
						- verified email addresses
						<br />
						- verified direct phone numbers
						<br />- verified social media links
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
								Free trial
							</button>
							<span>
								Free forever. No credit card required. Instant access.
							</span>
						</div>
						<button
							className={styles.demoButton}
							onClick={() => setIsDemoFormOpen(true)}
						>
							Book a demo
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

			<div className={styles.brandsContainer}>
				<h2>Trusted by 7,000+ businesses.</h2>
				{/* <img src="/brands.png" alt="brands" /> */}
				<img src="/brands1.png" alt="brands" />
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

export default HeroBox;

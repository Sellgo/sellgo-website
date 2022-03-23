import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import RainbowText from '../../../components/RainbowText';
import BetaPopupConfirmation from '../../../components/BetaPopupModal/BetaPopupConfirmation';


const HeroBox = () => {
	const textList = [
		'No More Stockouts.',
		'More Sales.',
		'Higher Cash Flow.',
		'Faster Growth.',
		'Better Business.',
		'Accurate Planning.',
		'Easier Delegation to VAs.'
	];
	const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
	const [isAnimationIncreasing, setAnimationIncreasing] = React.useState(true);
	const [animationIndex, setAnimationIndex] = React.useState(0);
	const [animatedText, setAnimatedText] = React.useState<string>('');
	const [isSuccessModalOpen, setSuccessModalOpen] = React.useState(false);

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
					<h1 className={`${styles.heading}`}>Always In-Stock</h1>
					<h2 className={styles.animatedText}>
						<RainbowText type="purple_blue_gradient">
							{animatedText}
						</RainbowText>
					</h2>
					<p className={`${styles.tagline}`}>
						We keep your best-seller Amazon inventory 
						always in-stock while adding more sales, 
						automatically - it&apos;s like a self-driving business.
					</p>
					<div className={styles.ctaBox}>
						<div className={styles.ctaButtonWrapper}>
							<button
								className={styles.submitButton}
								onClick={() => {
									console.log("Sign Up")
								}}
							>
								Get Started
							</button>
							<span className={styles.ctaDesc}>
								No credit card required
							</span>
						</div>
						<a>
							Talk to an expert
						</a>
					</div>
				</div>
				<div className={styles.imageColumn}>
					<div className={styles.stockoutBox}>
						<span className={styles.numberText}>
							<Image
								src="/exclamation-triangle.svg"
								width={30}
								height={26}
								alt="alt"
								className={styles.icon}
							/>
							17
						</span>
						<span className={styles.labelText}>Days Until Stockout</span>
						<span className={styles.purchaseOrderText}>
							<Image
								src="/greenCheckCircle.svg"
								width={30}
								height={30}
								alt="alt"
								className={styles.icon}
							/>
							Your P.O. will arrive
							<br />
							before Stockout
						</span>
					</div>
					<Image
						src="/heroImage.png"
						width={500}
						height={600}
						alt="alt"
						className={styles.heroImage}
					/>
				</div>
			</div>

			<Modal
				isOpen={isSuccessModalOpen}
				onRequestClose={() => setSuccessModalOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<BetaPopupConfirmation setModalOpen={setSuccessModalOpen} />
			</Modal>
		</section>
	);
};

export default HeroBox;

import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import RainbowText from '../../../components/RainbowText';
import DemoForm from '../../Demo/DemoForm';

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
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
	const [isAnimationIncreasing, setAnimationIncreasing] = React.useState(true);
	const [animationIndex, setAnimationIndex] = React.useState(0);
	const [animatedText, setAnimatedText] = React.useState<string>('');

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
						We keep your best-seller Amazon inventory always in-stock while
						adding more sales, automatically - it&apos;s like a self-driving
						business.
					</p>
					<div className={styles.ctaBox}>
						<div className={styles.ctaButtonWrapper}>
							<a className={styles.submitButton} href="/pricing">
								Get Started
							</a>
							<span className={styles.ctaDesc}>No credit card required</span>
						</div>
						<button
							className={styles.demoButton}
							onClick={() => setIsDemoFormOpen(true)}
						>
							Talk to an expert
						</button>
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
					<div className={styles.heroImagewWrapper}>
						<Image
							src="/heroImage.png"
							width={500}
							height={600}
							alt="alt"
							className={styles.heroImage}
						/>
					</div>
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

export default HeroBox;

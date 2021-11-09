import React from 'react';
import RainbowText from '../../../components/RainbowText';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	const textList = [
		'generate more revenue',
		'dominate your product listing to #1 search result',
		'find more profitable products',
		'automate the PPC recampaign process',
		'find any Amazon sellers in the world',
		'calculate your perfect stock',
	];
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
		<section className={styles.infoSectionWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<p className={styles.orangeHeading}> What is Sellgo? </p>
				<h2 className="secondary-heading">
					All-In-One Amazon tool to
					<br />
				</h2>
				<h2 className={styles.moreRevenue}>
					<RainbowText type="purple_orange_gradient" className={styles.animatedText}>
						{animatedText}
					</RainbowText>
				</h2>

				<p className={styles.infoSectionDescription}>
					<br />
					We consulted with the world&apos;s best Amazon Private Label and
					Wholesale
					<br />
					entrepreneurs to define how to effectively find profitable products,
					<br />
					dominate your ranking launch with the best keywords,
					<br />
					automate PPC re-campaign with Zapier,
					<br />
					prevent stockouts, and more ...
				</p>
			</div>
		</section>
	);
};

export default InfoSection;

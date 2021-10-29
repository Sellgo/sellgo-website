import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import RainbowText from '../../../components/RainbowText';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	const textList = ['Every Amazon Seller', 'Wholesale', 'Private Label'];
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
					incrementToNextWord();
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
				<h1 className={`${styles.heading}`}>
					The Next Generation Amazon Tools For
				</h1>
				<h2 className={styles.animatedText}>
					<RainbowText className={styles.animation} type="purple_blue_gradient">
						{animatedText}
					</RainbowText>
				</h2>
				<p className={`${styles.tagline}`}>
					All-In-One platform for Selling on Amazon using Extension, Bulk
					Calculation,
					<br />
					Keyword Research, 1M Database of Amazon Sellers, and more!
				</p>

				<CTAButton
					type="primary"
					size="small"
					variant="rainbow"
					navigateTo="/pricing?type=monthly-and-annual-plans"
					className={styles.ctaHeroBox}
				>
					Get 50% OFF Now
				</CTAButton>

				<small className={`${styles.ctaOverText}`}>
					Start an Amazon business with $1, <br /> upgrade your tools as you
					grow.
				</small>
				<div className={styles.heroboxImage}>
					<Image
						src="/heroboxImage.png"
						alt="hero-box"
						width={800}
						height={560}
					/>
					<div className={styles.heroboxImageOverlay}>
						<Image src="/HexBG.png" alt="hero-box" width={370} height={240} />
					</div>
				</div>

				<p className={`${styles.tagline}`}>
					Trusted by Many Entrepreneurs at Amazon including
				</p>

				<div className={`${styles.logoRow}`}>
					<div className={`${styles.socialProofLogoWrapper}`}>
						<Image
							src="/BBLogo.png"
							alt="amazon-logo"
							width={100}
							height={17}
						/>
					</div>

					<div className={`${styles.socialProofLogoWrapper}`}>
						<Image
							src="/TenFactorLogo.png"
							alt="amazon-logo"
							width={100}
							height={100}
						/>
					</div>

					<div className={`${styles.socialProofLogoWrapper}`}>
						<Image
							src="/MetkixLogo.png"
							alt="amazon-logo"
							width={70}
							height={20}
						/>
					</div>

					<div className={`${styles.socialProofLogoWrapper}`}>
						<Image
							src="/LuxeLogo.png"
							alt="amazon-logo"
							width={100}
							height={52}
						/>
					</div>

					<div className={`${styles.socialProofLogoWrapper}`}>
						<Image
							src="/SkopeLogo.png"
							alt="amazon-logo"
							width={100}
							height={100}
						/>
					</div>

					<div className={`${styles.socialProofLogoWrapper}`}>
						<Image src="/BFLogo.png" alt="amazon-logo" width={50} height={25} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

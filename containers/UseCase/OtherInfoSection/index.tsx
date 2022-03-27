import React from 'react';
import CTAButton from '../../../components/CTAButton';
import RainbowText from '../../../components/RainbowText';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const OtherInfoSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.otherInfoSection}`}>
			<h2 className={styles.sectionHeading}>Lorem ipsum dolor sit amet</h2>
			<p className={styles.sectionDesc}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore
			</p>

			<div className={styles.cardsSectionWrapper}>
				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}></div>
					<h4 className={styles.cardsWrapper__Text}>logo or name</h4>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}></div>
					<h4 className={styles.cardsWrapper__Text}>logo or name</h4>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}></div>
					<h4 className={styles.cardsWrapper__Text}>logo or name</h4>
				</div>
			</div>

			<h2 className="secondary-heading">Partnerships?</h2>
			<p className={styles.partnershipDesc}>
				Help your clients streamline their supply chain and reach their healthy
				cash flow by becoming a certified partner.
			</p>
			<button className={styles.otherInfoSectionCTA}>
				<RainbowText type="orange_purple_gradient">Get Started</RainbowText>
			</button>
		</section>
	);
};

export default OtherInfoSection;

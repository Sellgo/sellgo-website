import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../CTAButton';

interface Props {}

const InfoCard: React.FC<Props> = () => {
	return (
		<div className={styles.infoCard}>
			<h3 className={styles.infoCardTitle}>Private Label Go</h3>

			<p className={styles.infoCardDesc}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna
			</p>

			<h4 className={styles.featureTitle}>Popular Features</h4>

			<ul className={styles.featuresList}>
				<li className={styles.feature}>
					<Image
						src="/featureCheck.svg"
						alt="Feature is available"
						width={10}
						height={10}
					/>
					<span className={styles.featureName}></span> Product Analysis
				</li>
				<li className={styles.feature}>
					<Image
						src="/featureCheck.svg"
						alt="Feature is available"
						width={10}
						height={10}
					/>
					<span className={styles.featureName}></span> Competition Analysis
				</li>
				<li className={styles.feature}>
					<Image
						src="/featureCheck.svg"
						alt="Feature is available"
						width={10}
						height={10}
					/>
					<span className={styles.featureName}></span> Define Product Range
				</li>
			</ul>

			<CTAButton type="primary" size="small" navigateTo="/" className={styles.featureCTA}>
				Get Started
			</CTAButton>
		</div>
	);
};

export default InfoCard;

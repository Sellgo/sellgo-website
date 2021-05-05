import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../CTAButton';

interface Props {
	title: string;
	description: string;
	featureList: string[];
	isPopular: boolean;
	navigateTo: string;
}

const InfoCard: React.FC<Props> = (props) => {
	const { title, isPopular, description, featureList, navigateTo } = props;
	return (
		<div className={styles.infoCard}>
			{isPopular && <div className={styles.infoCardLabel}>Most Popular</div>}

			<h3 className={styles.infoCardTitle}>{title}</h3>

			<p className={styles.infoCardDesc}>{description}</p>

			<h4 className={styles.featureTitle}>Popular Features</h4>

			<ul className={styles.featuresList}>
				{featureList.map((featureName: string) => {
					return (
						<li key={featureName} className={styles.feature}>
							<Image
								src="/featureCheck.svg"
								alt="Feature is available"
								width={10}
								height={10}
							/>
							<span className={styles.featureName}> {featureName}</span>
						</li>
					);
				})}
			</ul>

			<CTAButton
				type="primary"
				size="small"
				navigateTo={navigateTo}
				className={styles.featureCTA}
			>
				Get Started
			</CTAButton>
		</div>
	);
};

export default InfoCard;

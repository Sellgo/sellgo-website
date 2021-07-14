import React from 'react';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../../components/CTAButton';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<div className={styles.heroboxWrapper}>
			<div className={`${styles.heroBox}`}>
				<h2>Sellgo Affliate Partner Program</h2>
				<h1>Get Paid to Promote Sellgo</h1>
				<p>Earn <span className={`${styles.bold}`}>25%</span> UNLIMITED Commission for Every Referral</p>

				<CTAButton
						type="primary"
						size="medium"
						navigateTo="/"
						className={`${styles.ctaButton}`}
					>
						Get Started
				</CTAButton>

				<p> Already an affliate? <span className={`${styles.signinLink}`}>Sign in</span></p>
			</div>
		</div>
	);
};

export default HeroBox;

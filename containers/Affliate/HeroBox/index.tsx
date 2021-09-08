import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.heroBox}`}>
				<h1 className={styles.heroBoxTitle}>
					Sellgo Affiliate Partner Program
				</h1>
				<h2 className={styles.heroBoxSubtitle}>Get Paid to Promote Sellgo</h2>
				<p className={styles.heroBoxContent}>
					Earn <span className={`${styles.bold}`}>25%</span> UNLIMITED
					Commission for Every Referral
				</p>

				<CTAButton
					type="primary"
					size="medium"
					navigateTo="/affiliates-signup"
					className={`${styles.ctaButton}`}
					newTarget
					asExternal
				>
					Get Started
				</CTAButton>

				<p className={styles.heroBoxContent}>
					Already an affiliate?
					<a
						href="https://sellgo.getrewardful.com/login"
						target="_blank"
						rel="noreferrer noopener"
						className={`${styles.signinLink}`}
					>
						Sign in
					</a>
				</p>
			</div>
		</section>
	);
};

export default HeroBox;

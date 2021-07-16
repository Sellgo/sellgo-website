import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.heroBox}`}>
				<h1 className={styles.heroBoxTitle}>Sellgo Affliate Partner Program</h1>
				<h2 className={styles.heroBoxSubtitle}>Get Paid to Promote Sellgo</h2>
				<p className={styles.heroBoxContent}>
					Earn <span className={`${styles.bold}`}>25%</span> UNLIMITED
					Commission for Every Referral
				</p>

				<CTAButton
					type="primary"
					size="medium"
					navigateTo="/partners-signup"
					className={`${styles.ctaButton}`}
					newTarget
					asExternal
				>
					Get Started
				</CTAButton>

				<p className={styles.heroBoxContent}>
					Already an affliate?
					<Link href="/">
						<a className={`${styles.signinLink}`}>Sign in</a>
					</Link>
				</p>
			</div>
		</section>
	);
};

export default HeroBox;

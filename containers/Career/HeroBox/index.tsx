import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={styles.heroboxWrapper}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={styles.textColumn}>
					<h1 className={styles.heading}>
						Join Our <span className={styles.smallHeading}>Small</span>
					</h1>

					<h1 className={styles.heading}>
						<span
							className={`${styles.smallHeading} ${styles.marginLeft}`}
						></span>{' '}
						and <span className={styles.smallHeading2}>Enterprenurial</span>{' '}
						Team.
					</h1>

					<p className={styles.tagline}>
						Sellgo is an e-commerce leads marketing platform to make it easier
						to reach your business dream number of growth.
						<br />
						<br />
						Built by a small team of experienced enterpreneurs with a strong
						background in e-commerce and Saas with a relentless focus on our
						product and customers.
					</p>

					<div className={styles.ctaBox}>
						<CTAButton
							type="secondary"
							size="small"
							variant="rainbow"
							navigateTo={'#join-us'}
							newTarget
							className={styles.closingCTA}
						>
							Browse open roles
						</CTAButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

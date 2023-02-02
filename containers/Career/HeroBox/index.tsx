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
						<span className={`${styles.smallHeading} ${styles.marginLeft}`}>
							and
						</span>{' '}
						Amazing Team.
					</h1>

					<p className={styles.tagline}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore
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

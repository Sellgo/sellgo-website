import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import RainbowText from '../../../components/RainbowText';
import { createFreeTrialLink } from '../../../utils/Referral';

const ClosingCTASection = () => {
	return (
		<section className={styles.closingCTASection}>
			<div className={`page-container`}>
				<div className={styles.closingCTAWrapper}>
					<h2>
						<RainbowText type="pink_blue_gradient">
							Grow Your Amazon Business with Sellgo
						</RainbowText>
					</h2>
					<p>
						With reliable tools and data that help you at every stage from
						product sourcing to product selling,
						<br />
						building a successful Amazon business has never been easier.
					</p>

					<div className={styles.ctaRow}>
						<CTAButton
							type="primary"
							size="medium"
							variant="white"
							navigateTo={createFreeTrialLink()}
							asExternal
							newTarget
							className={styles.closingCTA}
						>
							Sign up free
						</CTAButton>
						{/* <div className={styles.signUpDetails}>
							<Image src="/smileyFace.svg" width={25} height={25} />
							<p> {customerCount} people have signed up.</p>
						</div> */}
					</div>

					<small>
						Start an Amazon business with $1.99, <br />
						upgrade your tools as you grow.
					</small>
				</div>
			</div>
		</section>
	);
};

export default ClosingCTASection;

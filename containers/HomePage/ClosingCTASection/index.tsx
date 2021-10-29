import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import RainbowText from '../../../components/RainbowText';

interface Props {}

const ClosingCTASection: React.FC<Props> = () => {
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

					<CTAButton
						type="primary"
						size="medium"
						variant="white"
						navigateTo="/pricing"
						className={styles.closingCTA}
					>
						Get 50% OFF Today
					</CTAButton>

					<small>
						Enjoy 50% off 1st month or 1st year for the 1,000 Beta Users
					</small>
				</div>
			</div>
		</section>
	);
};

export default ClosingCTASection;

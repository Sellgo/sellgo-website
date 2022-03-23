import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

const NewClosingCTASection = () => {
	return (
		<section className={styles.closingCTASection}>
			<div className={`page-container ${styles.closingCTA}`}>
				<div className={styles.closingCTABox}>
					<div className={styles.closingCTABox__left}>
						<h2>
							Ready to switch on Sellgo?
						</h2>
						<p>
							14-day free trial, no credit card required
						</p>

						<div className={styles.ctaRow}>
							<CTAButton
								type="primary"
								size="medium"
								variant="rainbow"
								navigateTo="/pricing"
								className={styles.closingCTA}
							>
								Get Started - it&apos;s free
							</CTAButton>
							<small>
								Talk to an expert
							</small>
						</div>
					</div>

					<Image
						src="/closingCtaLaptop.png"
						width={400}
						height={250}
					/>
				</div>
			</div>
		</section>
	);
};

export default NewClosingCTASection;

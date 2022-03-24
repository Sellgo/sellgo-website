import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

const HeroBox = () => {
	/* Scroll to element with id = affiliateForm */
	const scrollToForm = () => {
		const element = document.getElementById('affiliateForm');
		element?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={styles.textColumn}>
					<p className={styles.title}>Agency?</p>
					<h1 className={`${styles.heading}`}>Become a Partner</h1>
					<p className={`${styles.tagline}`}>
						Partner with Autopilot to empower your clients 
						to unify their customer data, segment and activate 
						their audiences and deliver personalized experiences 
						at scale.
					</p>
					<div className={styles.ctaBox}>
						<div className={styles.ctaButtonWrapper}>
							<button 
								className={styles.submitButton}
								onClick={scrollToForm}
							>
								Get Started
							</button>
						</div>
					</div>
				</div>
				<div className={styles.imageColumn}>
					<div className={styles.heroImagewWrapper}>
						<Image
							src="/heroImage.png"
							width={500}
							height={600}
							alt="alt"
							className={styles.heroImage}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';
import CTAButton from '../CTAButton';

const CtaNavBar = () => {
	return (
		<div className={styles.ctaNavBar}>
			<Image
				src="/sellgoLogo.png"
				width={100}
				height={32}
				priority
				alt="Sellgo Inc. Company Logo"
			/>
			<CTAButton
				type="secondary"
				size="small"
				variant="rainbow"
				navigateTo="/pricing?type=monthly-and-annual-plans"
				className={styles.ctaButton}
			>
				Sign Up Now
			</CTAButton>
		</div>
	);
};

export default CtaNavBar;

import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';
import CTAButton from '../CTAButton';

interface Props {
	showCtaNavBar?: boolean;
}
const CtaNavBar = (props: Props) => {
	const { showCtaNavBar } = props;

	return (
		<div className={`${styles.ctaNavBarWrapper} ${!showCtaNavBar ? styles.ctaNavBarWrapper__hidden : ''}`}>
			<div className={`page-container ${styles.ctaNavBar} ${!showCtaNavBar ? styles.ctaNavBar__hidden : ''}`}>
				<div className={styles.sellgoLogo}>
					<Image
						src="/sellgoLogo.png"
						width={100}
						height={32}
						priority
						alt="Sellgo Inc. Company Logo"
					/>
				</div>
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
		</div>
	);
};

export default CtaNavBar;

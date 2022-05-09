import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';
import CTAButton from '../CTAButton';

interface Props {
	showCtaNavBar: boolean;
	showMobile: boolean;
}
const CtaNavBar = (props: Props) => {
	const { showCtaNavBar, showMobile } = props;

	return (
		<div
			className={`${styles.ctaNavBarWrapper} 
			${!showCtaNavBar ? styles.ctaNavBarWrapper__hidden : ''}
			${!showMobile && styles.ctaNavBarWrapper__hideOnMobile}`}
		>
			<div
				className={`page-container ${styles.ctaNavBar} ${
					!showCtaNavBar ? styles.ctaNavBar__hidden : ''
				}`}
			>
				<a className={styles.sellgoLogo} href="/">
					<Image
						src="/sellgoLogo.png"
						width={100}
						height={32}
						priority
						alt="Sellgo Inc. Company Logo"
					/>
				</a>
				<CTAButton
					type="secondary"
					size="small"
					variant="rainbow"
					navigateTo="/pricing?type=monthly-and-annual-plans"
					className={styles.ctaButton}
				>
					Try for FREE
				</CTAButton>
			</div>
		</div>
	);
};

export default CtaNavBar;

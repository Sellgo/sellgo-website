import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<section className={`big-page-container ${styles.benefitsSection}`}>
			<h2 className="secondary-heading">You may also like...</h2>

			<div className={styles.benefitsCardWrapper}>
				<div className={styles.benefitsCard}>
					<Image src="/appleIcon.svg" width={20} height={23} alt="Apple icon" />
					<h3>Benefit</h3>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
				</div>
				<div className={styles.benefitsCard}>
					<Image src="/appleIcon.svg" width={20} height={23} alt="Apple icon" />
					<h3>Benefit</h3>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
				</div>
				<div className={styles.benefitsCard}>
					<Image src="/appleIcon.svg" width={20} height={23} alt="Apple icon" />
					<h3>Benefit</h3>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
				</div>
			</div>

			<CTAButton
				type="primary"
				size="medium"
				navigateTo="/"
				className={styles.benefitsCTA}
			>
				Try Now for Free
			</CTAButton>
		</section>
	);
};

export default BenefitsSection;

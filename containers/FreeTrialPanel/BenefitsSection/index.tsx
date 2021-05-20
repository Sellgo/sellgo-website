import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import Apple from '../../../components/Icons/Apple';

/* Config */
import AppConfig from '../../../config';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<section className={styles.benefitsSectionWrapper}>
			<div className={styles.bgCircle}></div>

			<div className={`big-page-container ${styles.benefitsSection}`}>
				<h2 className="secondary-heading">You may also like...</h2>

				<div className={styles.benefitsCardWrapper}>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Benefit</h3>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
					</div>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Benefit</h3>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
					</div>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Benefit</h3>
						<p>Lorem Ipsum</p>
						<p>Lorem Ipsum</p>
					</div>
				</div>

				<div className={styles.benefitsCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						navigateTo={`${AppConfig.APP_URL}/signup?type=free`}
						className={styles.benefitsCTA}
						asExternal
						newTarget
					>
						Try Now for Free
					</CTAButton>
					<p>We offer a 7-day free trial with no credit card required.</p>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;

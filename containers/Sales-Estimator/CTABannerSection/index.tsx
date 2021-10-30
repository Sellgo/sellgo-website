import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

/* Config */
import AppConfig from '../../../config';

interface Props {}

const CTABannerSection: React.FC<Props> = () => {
	return (
		<section className={styles.ctaBannerSectionWrapper}>
			<div className={`page-container ${styles.ctaBannerSection}`}>
				<h2 className="secondary-heading">
					Get 10 free sales estimate per day.
					{<br />}
					Access more estimates with your account anywhere, anytime!
				</h2>
				<div className={styles.ctaBox}>
					<CTAButton
						className={styles.loginButton}
						type="secondary"
						size="small"
						variant="rainbow"
						navigateTo={AppConfig.APP_URL}
					>
						Login
					</CTAButton>
					<a
						className={styles.signUpLink}
						href="/pricing"
						target="_blank"
						rel="noopener noreferrer"
					>
						Get an account
					</a>
				</div>
			</div>
		</section>
	);
};

export default CTABannerSection;

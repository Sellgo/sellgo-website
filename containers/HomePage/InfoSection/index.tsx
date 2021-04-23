import React from 'react';
import CTAButton from '../../../components/CTAButton';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={styles.infoSectionWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<h2 className="secondary-heading">
					The Amazon Opportunity Finder Your Business Will Love
				</h2>

				<p className={styles.infoSectionDescription}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint
				</p>

				<div className={styles.infoSectionCTAWrapper}>
					<CTAButton
						type="primary"
						size="small"
						navigateTo="/"
						className={styles.infoSectionCTA}
					>
						Get Free Opportunity Finder
					</CTAButton>
					<CTAButton type="secondary" size="small" navigateTo="/">
						Demo premium Opportunity Finder
					</CTAButton>
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

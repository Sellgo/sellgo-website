import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const FirstCTASection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.firstCTASectionBox}`}>
			<h2 className="secondary-heading">
				Become apart of the Sellgo Community
			</h2>
			<p className={styles.firstCTAContent}>
				Join the Sellgo family and one of the best programs in our industry.
				<br />
				After approval, promote our innovative, powerful tools with your
				audience and make money!
			</p>

			<CTAButton
				type="secondary"
				size="medium"
				navigateTo="/affiliates-signup"
				className={`${styles.ctaButton}`}
				asExternal
				newTarget
			>
				Join the Community
			</CTAButton>
		</section>
	);
};

export default FirstCTASection;

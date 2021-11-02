import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const FirstCTASection: React.FC<Props> = () => {
	return (
		<section className={styles.firstCTASectionBoxWrapper}>
			<div className={`page-container ${styles.firstCTASectionBox}`}>
				<h2 className="secondary-heading">
					Become apart of the Sellgo Community
				</h2>
				<p className={styles.firstCTAContent}>
					Join one of the best programs in our industry become a member of the
					Sellgo family.
					<br />
					Once approved, promote our innovative, powerful tools with your
					audience and start making money with Sellgo!
					<br />
					Earn 25% of every purchase when one of your audience members signs up
					using your affiliate link.
				</p>

				<CTAButton
					type="secondary"
					size="medium"
					variant="rainbow"
					navigateTo="/affiliates-signup"
					className={`${styles.ctaButton}`}
					asExternal
					newTarget
				>
					Join the Community
				</CTAButton>
			</div>
		</section>
	);
};

export default FirstCTASection;

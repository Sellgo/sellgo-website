import React from 'react';
import CTAButton from '../../../components/CTAButton';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const ClosingCTASection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.closingCTASection}`}>
			<div className={styles.closingCTAWrapper}>
				<div className={styles.closingCTAWrapper__left}>
					<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim
					</p>

					<CTAButton
						type="primary"
						size="medium"
						navigateTo="/"
						className={styles.closingCTA}
					>
						Get Sellgo Free
					</CTAButton>

					<small>Get started with FREE tools, and upgrade as you grow.</small>
				</div>
				<div className={styles.closingCTAWrapper__right}></div>
			</div>
		</section>
	);
};

export default ClosingCTASection;

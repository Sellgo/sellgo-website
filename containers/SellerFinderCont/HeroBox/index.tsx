import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import ProductAccordion from '../../../components/ProductAccordion';

/* Data */
import { accordionData } from './data';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.heroBox}`}>
			<div className={styles.heroBox__Image}></div>
			<div className={styles.heroBox__Details}>
				<div className={styles.subHeadingWrapper}>
					<span></span> <h2 className={styles.subHeading}>Track Top FBA Competitors and Best Sellers</h2>
				</div>
				<h1 className={styles.heading}>Seller Finder</h1>
				<CTAButton
					navigateTo="/"
					type="primary"
					size="medium"
					className={styles.heroBoxCTA}
				>
					Get Started
				</CTAButton>

				<ProductAccordion data={accordionData} />
			</div>
		</section>
	);
};

export default HeroBox;

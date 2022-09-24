import React from 'react';
import { v4 as uuid } from 'uuid';

/* Data */
import { wholesaleFeatures } from './data';

/* Components */
import ProductCard from './ProductCard';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const StepperInfoSection: React.FC<Props> = () => {
	return (
		<section
			className={`page-container ${styles.stepperInfoSectionWrapper}`}
			id="showCtaNavBar"
		>
			<h2 className={styles.stepperTitle}>What You Will Get</h2>
			<p className={styles.stepperSubtitle}>
				Get exclusive access to our Seller Database with one purchase without
				any monthly subscription. All these data will be available in one excel
				file
			</p>

			<ProductCard
				key={uuid()}
				{...wholesaleFeatures[0]}
				reversed={false}
				imageWidth={720}
			/>

			<ProductCard
				key={uuid()}
				{...wholesaleFeatures[1]}
				reversed
				imageWidth={720}
				imageHeight={500}
			/>

			<ProductCard
				key={uuid()}
				{...wholesaleFeatures[2]}
				reversed={false}
				imageWidth={720}
				imageHeight={500}
			/>
		</section>
	);
};

export default StepperInfoSection;

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
			<h2 className={styles.stepperTitle}>It's our business to grow yours</h2>
			<p className={styles.stepperSubtitle}>
				You know the business. We understand the data. Now you can convert the
				Seller list data into actionable insights for your business.
			</p>

			<ProductCard
				key={uuid()}
				{...wholesaleFeatures[0]}
				reversed={false}
				imageWidth={500}
				imageHeight={333}
			/>

			<ProductCard
				key={uuid()}
				{...wholesaleFeatures[1]}
				reversed
				imageWidth={500}
				imageHeight={333}
			/>

			<ProductCard
				key={uuid()}
				{...wholesaleFeatures[2]}
				reversed={false}
				imageWidth={500}
				imageHeight={333}
			/>
		</section>
	);
};

export default StepperInfoSection;

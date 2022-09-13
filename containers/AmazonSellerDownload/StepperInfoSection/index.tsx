import React from 'react';
import { v4 as uuid } from 'uuid';

/* Data */
import { wholesaleFeatures } from './data';

/* Components */
import ProductCard from '../../../components/ProductCard';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const StepperInfoSection: React.FC<Props> = () => {
	return (
		<section
			className={`page-container ${styles.stepperInfoSectionWrapper}`}
			id="showCtaNavBar"
		>
			<h2 className={styles.stepperTitle}>
				Access Amazon seller database at scale
			</h2>
			<p className={styles.stepperSubtitle}>
				It's our business to grow yours by providing access to million of
				sellers.
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

import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ProductCard from '../../../components/ProductCard';

/* Data */
import { newBenefitsData } from './data';

interface Props {}

const ProductCardsSection: React.FC<Props> = () => {
	return (
		<section className={styles.newBenefitsSection} id="showCtaNavBar">
			<div className={styles.blueCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<ProductCard key={uuid()} {...newBenefitsData[0]} reversed={false} />
				</div>
			</div>
			<div className={styles.whiteCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<ProductCard key={uuid()} {...newBenefitsData[1]} reversed />
				</div>
			</div>
			<div className={styles.purpleCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<ProductCard key={uuid()} {...newBenefitsData[2]} reversed={false} />
				</div>
			</div>
		</section>
	);
};

export default ProductCardsSection;

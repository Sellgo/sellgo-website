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
			<div className={styles.firstCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<ProductCard
						key={uuid()}
						{...newBenefitsData[0]}
						reversed={false}
						imageWidth={720}
						// imageHeight={300}
					/>
				</div>
			</div>
			<div className={styles.secondCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<ProductCard
						key={uuid()}
						{...newBenefitsData[1]}
						reversed
						imageWidth={720}
						// imageHeight={300}
					/>
				</div>
			</div>
			<div className={styles.thirdCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<ProductCard
						key={uuid()}
						{...newBenefitsData[2]}
						reversed={false}
						imageWidth={720}
						// imageHeight={300}
					/>
				</div>
			</div>
		</section>
	);
};

export default ProductCardsSection;

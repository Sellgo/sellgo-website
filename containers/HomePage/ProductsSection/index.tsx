import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { productsDetails } from './data';

/* Components */
import ProductCard from '../../../components/ProductCard';
import CTAButton from '../../../components/CTAButton';

interface Props {}

const ProductsSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.productsSection}`}>
			<h2 className="secondary-heading">
				Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
			</h2>

			<div className={styles.productsWrapper}>
				{productsDetails.map((productDetail: any, index: number) => {
					return (
						<ProductCard
							key={index}
							{...productDetail}
							reversed={(index + 1) % 2 === 0}
						/>
					);
				})}
			</div>

			<h2 className="secondary-heading">
				Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
			</h2>
			<CTAButton
				type="primary"
				size="small"
				navigateTo="/"
				className={styles.productsSectionCTA}
			>
				Get Started
			</CTAButton>
		</section>
	);
};

export default ProductsSection;

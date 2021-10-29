import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { productsDetails } from './data';

interface Props {}

const ProductsSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.productsSection}`}>
			<h2 className="secondary-heading">
				The Amazon Selling Solution Your Business Will Love
			</h2>

			<div className={styles.productsWrapper}>
				{productsDetails.map((product, index) => (
					<div className={styles.product} key={index}>
						<img
							className={styles.icon}
							src={product.icon}
							alt={product.title}
						/>
						<p className={styles.title}>{product.title}</p>
						<p className={styles.action}>{product.action}</p>
						<p className={styles.popularFeatures}> Popular Features </p>
						{product.features.map((feature, index) => (
							<p className={styles.productFeature} key={index}>
								{feature.name}
							</p>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

export default ProductsSection;

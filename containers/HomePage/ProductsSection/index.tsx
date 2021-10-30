import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { productsDetails } from './data';

interface Props {}

const ProductsSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.productsSection}`}>
			<h2 className={styles.productsSectionTitle}>
				The Amazon Selling Solution Your Business Will Love
			</h2>

			<div className={styles.productsWrapper}>
				{productsDetails.map((product, index) => (
					<div className={styles.product} key={index}>
						<Image
							src={product.icon}
							alt={product.title}
							width={60}
							height={56.25}
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

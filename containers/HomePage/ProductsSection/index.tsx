import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { productsDetails } from './data';
import RainbowText from '../../../components/RainbowText';

interface Props {}

const ProductsSection: React.FC<Props> = () => {
	return (
		<section className={styles.productSectionWrapper}>
			<div className={`page-container ${styles.productsSection}`}>
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
							<p className={styles.desc}>{product.desc}</p>
						</div>
					))}
				</div>
				<button className={styles.textButton}>
					<RainbowText type="orange_purple_gradient">
						Request Demo
					</RainbowText>
				</button>
				<h2 className={styles.agencyTitle}>Agency?</h2>
				<p className={styles.agencyDetails}>
					Help your clients streamline their supply chain and 
					reach their healthy cash flow by becoming a certified partner.
				</p>
				<button className={styles.textButton}>
					<RainbowText type="orange_purple_gradient">
						Learn More
					</RainbowText>
				</button>
			</div>
		</section>
	);
};

export default ProductsSection;

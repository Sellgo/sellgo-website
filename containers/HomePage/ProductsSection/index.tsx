import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { productsDetails } from './data';

/* Components */
import RainbowText from '../../../components/RainbowText';
import DemoForm from '../../Demo/DemoForm';

interface Props {}

const ProductsSection: React.FC<Props> = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section className={styles.productSectionWrapper}>
			<div className={`page-container ${styles.productsSection}`}>
				<h2 className={styles.productsSectionTitle}>
					The Amazon selling solution your business will love
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
							<p className={styles.desc}>{product.desc}</p>
						</div>
					))}
				</div>
				<button
					className={styles.textButton}
					onClick={() => setIsDemoFormOpen(true)}
				>
					<RainbowText type="orange_purple_gradient">Need customized seller lists?</RainbowText>
				</button>
				<h2 className={styles.agencyTitle}>Affiliate Partnership?</h2>
				<p className={styles.agencyDetails}>
					Help your audiences reach their potential by becoming our partner.
				</p>
				<button className={styles.textButton}>
					<RainbowText type="orange_purple_gradient">
						<Link href="partnership-program">Learn More</Link>
					</RainbowText>
				</button>
			</div>

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default ProductsSection;

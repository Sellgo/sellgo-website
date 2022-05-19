import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { productsDetails } from './data';

/* Components */
import CTAButton from '../../../components/CTAButton';
import RainbowText from '../../../components/RainbowText';
import SellerListForm from '../../Demo/SellerListForm';

/* Utils */
import { createCheckoutLink } from '../../../utils/Referral';

interface Props {}

const ProductsSection: React.FC<Props> = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	const checkoutLink = createCheckoutLink('daily', 'free');
	return (
		<section className={styles.productSectionWrapper}>
			<div className={`page-container ${styles.productsSection}`}>
				<h2 className={styles.productsSectionTitle}>
					We&apos;ve designed proven seller research apps to help you grow
				</h2>

				<h2 className={styles.productsSectionSubTitle}>
					Generate and analyze sellers across essential communication channels, 
					including your sales calls, email and phone outreach, and business website.
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
							<p className={styles.popularFeatures}>   </p>
							{product.features.map((feature, index) => (
								<p className={styles.productFeature} key={index}>
									{feature.name}
								</p>
							))}
						</div>
					))}
				</div>
				<CTAButton
					type="primary"
					variant="rainbow"
					size="medium"
					navigateTo={checkoutLink}
					asExternal
					newTarget
					className={styles.pricingButton}
				>
					Get started free today
				</CTAButton>
				<p>Try it free. No credit card required. Instant set-up.</p>
				<button
					className={styles.textButton}
					onClick={() => setIsDemoFormOpen(true)}
				>
					<RainbowText type="orange_purple_gradient">
						Need customized seller lists?
					</RainbowText>
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
				<SellerListForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default ProductsSection;

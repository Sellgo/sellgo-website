import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import DemoForm from '../../Demo/DemoForm';

const NewClosingCTASection = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section className={styles.closingCTASection}>
			<div className={`page-container ${styles.closingCTA}`}>
				<div className={styles.closingCTABox}>
					<div className={styles.closingCTABox__left}>
						<h2>Grow your Amazon business</h2>
						<p>
							With realiable tools and data that help you at every stage from product sourcing
							to product selling, building a successful Amazon business has never been easier.
						</p>

						<div className={styles.ctaRow}>
							<CTAButton
								type="primary"
								size="medium"
								variant="rainbow"
								navigateTo="/pricing"
								className={styles.closingCTA}
							>
								Try for FREE
							</CTAButton>
							<button
								className={styles.demoButton}
								onClick={() => setIsDemoFormOpen(true)}
							>
								Talk to an expert
							</button>
						</div>
					</div>

					<Image src="/closingCtaLaptop.png" width={400} height={250} />
				</div>
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

export default NewClosingCTASection;

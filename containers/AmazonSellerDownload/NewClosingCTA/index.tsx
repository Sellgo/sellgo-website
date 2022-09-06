import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import SellerListForm from '../../Demo/SellerListForm';
import { createFreeTrialLink } from '../../../utils/Referral';

const NewClosingCTASection = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section className={styles.closingCTASection}>
			<div className={`page-container ${styles.closingCTA}`}>
				<div className={styles.closingCTABox}>
					<div className={styles.closingCTABox__left}>
						<h2>Ready to switch on Sellgo?</h2>
						<p>14-day free trial, no credit card required</p>

						<div className={styles.ctaRow}>
							<CTAButton
								type="primary"
								size="medium"
								variant="rainbow"
								navigateTo={createFreeTrialLink()}
								asExternal
								newTarget
								className={styles.closingCTA}
							>
								Get started - it's free
							</CTAButton>
							<button
								className={styles.demoButton}
								onClick={() => setIsDemoFormOpen(true)}
							>
								Need seller lists?
							</button>
						</div>
						<span>Free forever. No credit card required. Instant access.</span>
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
				<SellerListForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default NewClosingCTASection;

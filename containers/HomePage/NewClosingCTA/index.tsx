import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import SellerListForm from '../../Demo/SellerListForm';

/* Utils */
import { createCheckoutLink } from '../../../utils/Referral';

const NewClosingCTASection = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	const checkoutLink = createCheckoutLink('daily', 'free');

	return (
		<section className={styles.closingCTASection}>
			<div className={`page-container ${styles.closingCTA}`}>
				<div className={styles.closingCTABox}>
					<div className={styles.closingCTABox__left}>
					<h2>Ready to &nbsp;
							<Image src="/own.png" width={62} height={47} alt="own" />
						&nbsp; your market?</h2>
						<p>Get seller data that revenue teams rely on to deliver business growth.</p>

						<div className={styles.ctaRow}>
							<CTAButton
								type="primary"
								size="medium"
								variant="rainbow"
								navigateTo={checkoutLink}
								asExternal
								newTarget
								className={styles.closingCTA}
							>
								Create free account
							</CTAButton>
							<button
								className={styles.demoButton}
								onClick={() => setIsDemoFormOpen(true)}
							>
								Need seller lists?
							</button>
						</div>
						<span>Try it free. No credit card required. Instant set-up.</span>
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

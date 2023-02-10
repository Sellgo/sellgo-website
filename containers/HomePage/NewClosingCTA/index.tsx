import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import Link from 'next/link';

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
						<h2>
							Ready to &nbsp;
							<Image src="/own.png" width={62} height={47} alt="own" />
							&nbsp; your market?
						</h2>
						<p>
							Get seller data that revenue teams rely on to deliver business
							growth.
						</p>

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
								Create free account
							</CTAButton>
							<button
								className={styles.demoButton}
								// onClick={() => setIsDemoFormOpen(true)}
							>
								<Link href="pricing?type=instant-download">
									Instant download?
								</Link>
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

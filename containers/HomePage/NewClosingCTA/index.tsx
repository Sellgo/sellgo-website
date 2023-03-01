import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import DemoForm from '../../Demo/DemoForm';
import { createFreeTrialLink } from '../../../utils/Referral';

const NewClosingCTASection = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section className={styles.closingCTASection}>
			<div className={`page-container ${styles.closingCTA}`}>
				<div className={styles.closingCTABox}>
					<div className={styles.closingCTABox__left}>
						<h2>
							Reach &nbsp;
							<Image src="/every.png" width={62} height={47} alt="every" />
							&nbsp; buyer on the planet
						</h2>
						<p>
							Search, engage, and close deals with leads intelligence of
							<br />
							Sellgo 30+ million verified Amazon seller decision makers.
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
								onClick={() => setIsDemoFormOpen(true)}
							>
								Book a demo
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
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default NewClosingCTASection;

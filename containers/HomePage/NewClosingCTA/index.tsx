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
						<h2>Get seller leads today</h2>
						<p>1M+ seller database access at your fingertips, and counting.</p>

						<div className={styles.ctaRow}>
							<CTAButton
								type="primary"
								size="medium"
								variant="rainbow"
								navigateTo="/pricing"
								className={styles.closingCTA}
							>
								CREATE FREE ACCOUNT
							</CTAButton>
							<button
								className={styles.demoButton}
								onClick={() => setIsDemoFormOpen(true)}
							>
								Need customized seller lists?
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
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default NewClosingCTASection;

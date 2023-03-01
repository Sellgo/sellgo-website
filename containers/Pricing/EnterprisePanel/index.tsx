import React from 'react';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import DemoForm from '../../Demo/DemoForm';

const InstantDownloadPanel = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section id="account-based-plans" className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<h2 className={styles.heading}>
					Need an uncapped lookups enterprise solution?
				</h2>

				<p className={styles.tagline}>
					By utilizing data-driven solutions that connect your business to
					buyers, aim to maximize revenue throughout every phase of the customer
					lifecycle
				</p>

				<button
					className={styles.demoButton}
					onClick={() => setIsDemoFormOpen(true)}
				>
					Book a demo
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

export default InstantDownloadPanel;

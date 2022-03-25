import React from 'react';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

import DemoForm from '../../containers/Demo/DemoForm';

interface Props {
	className?: string;
	message: string;
}

const ContactInfo: React.FC<Props> = (props) => {
	const { className, message } = props;
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<div className={`${styles.contactInfo} ${className}`}>
			<h2>*Need an Enterprise account? We&apos;d be happy to talk!</h2>

			<div className={styles.capsule}>
				<p>{message}</p>
				<button
					onClick={() => setIsDemoFormOpen(true)}
					className={styles.contactSalesButton}
				>
					Talk to an expert
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
		</div>
	);
};

ContactInfo.defaultProps = {
	className: ''
};

export default ContactInfo;

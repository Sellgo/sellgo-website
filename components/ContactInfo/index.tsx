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
			<h2>*Need an enterprise account? We&apos;d be happy to talk!</h2>
			<button
				className={styles.demoButton}
				onClick={() => setIsDemoFormOpen(true)}			>
					Talk to an expert
				</button>
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

import React, { useEffect, useState, memo } from 'react';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ReCaptchaNewsLetter from '../../../components/ReCaptchaNewsLetter';

interface Props {}

const ShowCaseHeroBox: React.FC<Props> = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	// mount the modal on target
	useEffect(() => {
		Modal.setAppElement('#newsLetterMount');
	}, []);

	return (
		<div className={styles.heroBoxWrapper}>
			<div className={`page-container ${styles.heroBoxContent}`}>
				<h1>Amazon Seller Tips & News</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit
				</p>
				<button
					className={`ctabutton ctabutton--primary ctabutton--medium ${styles.subscribeCTA}`}
					onClick={() => setIsModalOpen(true)}
				>
					Subscribe
				</button>
			</div>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<ReCaptchaNewsLetter closeModal={() => setIsModalOpen(false)} />
			</Modal>
		</div>
	);
};

export default memo(ShowCaseHeroBox);

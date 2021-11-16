import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import BetaPopupModal from '../BetaPopupModal';

interface Props {
	showBetaPricing: boolean;
	customerCount: number;
}

const BetaBanner = (props: Props) => {
	const { showBetaPricing, customerCount } = props;
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const handleModalClose = () => {
		setModalOpen(false);
	};
	
	return (
		<>
			<div
				onClick={() => setModalOpen(true)}
				onKeyDown={() => setModalOpen(true)}
				className={
					showBetaPricing
						? styles.betaBannerSection
						: `${styles.betaBannerSection} ${styles.betaBannerSection__hidden}`
				}
			>
				Enjoy 50% off 1st month or 1st year for the 1,000 First Time Members. Get coupon code
				&nbsp;
				<Image
					src={'/longArrowRightWhite.svg'}
					width={20}
					height={12}
				/>
			</div>
			<Modal
				isOpen={modalOpen}
				onRequestClose={handleModalClose}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<BetaPopupModal customerCount={customerCount} setModalOpen={setModalOpen}/>
			</Modal>
		</>
	);
};

export default BetaBanner;

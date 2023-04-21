import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import DemoForm from '../../Demo/DemoForm';

/* Utils */
import { checkPricingLink } from '../../../utils/Referral';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section className={`page-container ${styles.heroBox}`}>
			<h1>Automated Inventory Planning</h1>
			<h2 className="secondary-heading">
				Ready to grow and scale, from day one
			</h2>
			<p>
				Everything you need, in one dashboard. We’ll put all your data in one
				place so you can see your entire multi-channel landscape, in real time.
			</p>
			<div className={styles.buttonsRow}>
				<CTAButton
					navigateTo={checkPricingLink()}
					newTarget
					asExternal
					type="primary"
					size="medium"
					variant="rainbow"
					className={styles.heroBoxCTA}
				>
					Check pricing
				</CTAButton>
				<CTAButton
					type="secondary"
					size="medium"
					variant="rainbow"
					className={styles.heroBoxCTA}
					onClick={() => setIsDemoFormOpen(true)}
				>
					Get a demo
					<div className={styles.navbarCTA__arrow}>
						<Image
							src="/longArrowRightIcon.svg"
							width={20}
							height={10}
							alt="right-arrow"
						/>
					</div>
				</CTAButton>
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

export default HeroBox;

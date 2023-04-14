import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import DemoForm from '../../Demo/DemoForm';

/* Utils */
import { createFreeTrialLink } from '../../../utils/Referral';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section
			className={`page-container ${styles.heroBoxWrapper} big-page-container`}
		>
			<div className={`${styles.benefitsImageWrapper}`}>
				<div className={`${styles.heroBox}`}>
					<h1>Ads service companies</h1>
					<h2>Ready to grow and scale, from day one</h2>
					<Image
						src={'/ads-service-companies_background.png'}
						alt="Ads service companies"
						width={1200}
						height={360}
						objectFit="contain"
					></Image>
					<p>
						Launching a new brand? We offer help preparing for launch or scaling
						your business.
						<br />
						Getting it ready to hit the ground running as soon as that first
						order is placed.
					</p>
					<div className={styles.buttonsRow}>
						<CTAButton
							navigateTo={createFreeTrialLink()}
							newTarget
							asExternal
							type="primary"
							size="medium"
							variant="rainbow"
							className={styles.heroBoxCTA}
						>
							Start free trial
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
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

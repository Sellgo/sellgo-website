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
					<h1>SAAS companies</h1>
					<h2>Scale your growth, everywhere you sell</h2>
					<Image
						src={'/saas_companies_background.png'}
						alt="SAAS companies"
						width={1200}
						height={360}
						objectFit="contain"
					></Image>
					<p>
						AiStock helps you dominate every channel and propel your business to
						the next level. We'll help you build an insanely valuable brand and
						a channel machine that will reach more people, sell more things and
						make more money than you ever thought possible.
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

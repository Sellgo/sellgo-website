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
		<section
			className={`page-container ${styles.heroBoxWrapper} big-page-container`}
		>
			<div className={`${styles.benefitsImageWrapper}`}>
				<div className={`${styles.heroBox}`}>
					<h1>Ecom vendor companies</h1>
					<h2>Wherever your customers are, we&apos;ll get you there</h2>
					<Image
						src={'/ecom_vendor_companies_background.png'}
						alt="Ecom vendor companies"
						width={1200}
						height={360}
						objectFit="contain"
					></Image>
					<p>
						Whatever the challenges of growing, operating, and managing Ecom
						vendor companies, we&apos;re ready to take them on. We offer a
						variety of services designed to drive meaningful growth, whether
						you&apos;re looking for ways to scale your offerings, maximize
						performance and profitability, or prepare for successful exits.
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
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

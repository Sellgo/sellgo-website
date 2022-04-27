import React from 'react';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PaperAirplane from '../../../components/Icons/PaperAirplane';

import DemoForm from '../../Demo/DemoForm';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	return (
		<>
			<section className={styles.heroBoxSection}>
				<div className={`page-container ${styles.heroBox}`}>
					<div className={styles.heroBox__text}>
						<h1>Contact us</h1>
						<p>
							AiStock/ Sellgo was made for Amazon sellers, by Amazon Sellers to provide
							the tools and resources to build a successful Amazon business.
							<br/><br/> Headquarter address:
							<br/>Sellgo, Inc. <br/>
							2828 S Corbet ave., Portland, OR 97201 USA
						</p>
						
						<button
							className={styles.demoButton}
							onClick={() => setIsDemoFormOpen(true)}
						>
							<br/><br/>Request a demo							
						</button>

						{/* <div className={styles.requestDemoCard}>
							<Comment width={50} height={39} fill="#636D76" />
							<CTAButton
								navigateTo="/demo"
								type="primary"
								size="small"
								variant="rainbow"
								className={styles.requestDemoCard__CTA}
							>
								Request a demo
						</CTAButton>*
						<button
							className={styles.demoButton}
							onClick={() => setIsDemoFormOpen(true)}
						>
							Request a demo
						</button>
						</div> */}
					</div>

					<div className={styles.contactCard}>
						<PaperAirplane width={40} height={40} fill="#636d76" />
						<div>
							<h2>Need to send us a message?</h2>
							<a href="mailto:support@sellgo.com">support@sellgo.com</a>
						</div>
						<div className={styles.chat}>
							<p>
								or talk with us via
								<a id="chat-link" href="#">
									{' '}
									chat.
								</a>
							</p>
						</div>
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
		</>
	);
};

export default HeroBox;

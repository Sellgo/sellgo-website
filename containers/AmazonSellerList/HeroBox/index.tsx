import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Components */
import SellerListForm from '../../Demo/SellerListForm';

/* Styling */
import styles from './index.module.scss';

const HeroBox = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={styles.textColumn}>
					<div className={styles.starContainer}>
						<Image src="/star-yellow.png" width={15} height={15} />
						<Image src="/star-yellow.png" width={15} height={15} />
						<Image src="/star-yellow.png" width={15} height={15} />
						<Image src="/star-yellow.png" width={15} height={15} />
						<Image src="/star-yellow.png" width={15} height={15} />
					</div>

					<p className={`${styles.tagline}`}>
						"Excellent customer service and EXCELLENT results!"
					</p>

					<h1 className={`${styles.heading}`}>Top Amazon 1M+ Seller Lists</h1>

					<p className={`${styles.tagline}`}>
						Get the B2B data and software you need to connect with and close
						<br />
						your most valuable buyers - updated regularly.
					</p>

					<div className={styles.ctaBox}>
						<a href="#instant-download">
							<button className={styles.availableSellerButton}>
								View seller lists
							</button>
						</a>
						<button
							className={styles.requestDataButton}
							onClick={() => setIsDemoFormOpen(true)}
						>
							Request specific data
						</button>
					</div>

					<h2 className={styles.subHeading}>TRUSTED BY 6,000+ BUSINESSES.</h2>
					<img src="/brands1.png" width="100%" alt="brands" />
				</div>
			</div>

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<SellerListForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</section>
	);
};

export default HeroBox;

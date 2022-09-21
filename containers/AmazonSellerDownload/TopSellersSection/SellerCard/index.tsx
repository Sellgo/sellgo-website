import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Components */
import SellerListForm from '../../../Demo/SellerListForm';

/* Styling */
import styles from './index.module.scss';

interface Props {
	sellerData: any;
	reversed: boolean;
	isStepper?: boolean;
}

const SellerCard: React.FC<Props> = (props) => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	const { reversed, isStepper, sellerData } = props;

	const textClass = `${styles.productCard__Text} ${
		reversed ? styles.reversedText : ''
	} ${isStepper ? styles.stepperText : ''}`;

	const imageClass = `${styles.productCard__Image} ${
		reversed ? styles.reversedImage : ''
	}`;

	return (
		<article className={styles.productCard}>
			<div className={`${textClass}`}>
				<div className={styles.left}>
					<p>{sellerData.country}</p>
					<h2>Amazon.com Top Sellers</h2>

					<p>
						A dataset of the top active sellers from the Amazon US marketplace.
					</p>

					<div>
						Number of sellers: <span className={styles.value}>205,428</span>{' '}
						(includes 136,762 FBA sellers)
					</div>

					<div>
						Number of physical addresses:
						<span className={styles.value}>202,380</span>
					</div>

					<div>
						Number of emails: <span className={styles.value}>25,450</span>
					</div>

					<div>
						Number of websites: <span className={styles.value}>57,716</span>
					</div>

					<div>
						Number of phone numbers: 47,961 Last update: May 2022 Data points:
						Amazon URL, seller ID, FBA seller or no, business name, business
						address, seller country, state/region, zip code, email, website,
						phone number, store name, main category, store rating, last 30 days
						seller ratings, last 90 days seller ratings, last 12 months seller
						ratings, lifetime seller ratings, number of products, brands sold,
						number of brands sold
					</div>

					<div>File format: Excel, CSV, JSON</div>

					<div>Instant download</div>

					<button className={styles.secondaryButton}>
						<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						&nbsp; Open sample in Google Sheets
					</button>

					<div className={styles.buttonContainer}>
						<button className={styles.primaryButton}>
							Download database $895
						</button>

						<button
							onClick={() => setIsDemoFormOpen(true)}
							className={styles.secondaryButton}
						>
							Need a custom seller list?
						</button>
					</div>
				</div>
			</div>

			<div className={`${styles.right} ${imageClass}`}>
				<Image src="/top-sellers.png" width={700} height={419} />
			</div>

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<SellerListForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</article>
	);
};

SellerCard.defaultProps = {
	isStepper: false
};

export default SellerCard;

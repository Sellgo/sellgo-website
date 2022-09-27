import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

/* Components */
import SellerListForm from '../../../Demo/SellerListForm';

/* Styling */
import styles from './index.module.scss';
import AppConfig from '../../../../config';

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

	const handleDownload = (id: any) => {
		window.open(AppConfig[id], '_blank');
	};

	return (
		<article className={styles.productCard} id={sellerData.id}>
			<div className={`${textClass}`}>
				<div className={styles.left}>
					<Image src={sellerData.icon} width="40px" height="40px" />
					<p>{sellerData.country}</p>
					<h2>{sellerData.title}</h2>

					<p>
						A dataset of the top active sellers from the Amazon US marketplace.
					</p>

					<div>
						Number of sellers:{' '}
						<span className={styles.value}>{sellerData.noOfSellers}</span>{' '}
						(includes {sellerData.noOfFbaSellers} FBA sellers)
					</div>

					<div>
						Number of physical addresses:
						<span className={styles.value}>
							{sellerData.noOfPhysicalAddresses}
						</span>
					</div>

					<div>
						Number of emails:{' '}
						<span className={styles.value}>{sellerData.noOfEmails}</span>
					</div>

					<div>
						Number of websites:{' '}
						<span className={styles.value}>{sellerData.noOfWebsites}</span>
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
						<button
							onClick={() => handleDownload(sellerData.id)}
							className={styles.primaryButton}
						>
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

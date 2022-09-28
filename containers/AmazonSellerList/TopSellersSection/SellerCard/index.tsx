import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import validator from 'validator';

/* Components */
import axios from 'axios';
import SellerListForm from '../../../Demo/SellerListForm';
import FormInput from '../../../../components/FormInput';
import FormSubmitConfirm from '../FormSubmitConfirm';

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
	const [openSubmitConfirm, setOpenSubmitConfirm] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [emailError, setEmailError] = React.useState(false);

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

	const handleSample = (sample: any) => {
		window.open(sample, '_blank');
	};

	const handleChange = (event: any) => {
		setEmail(event.target.value);
	};

	const handleJoinWaitlist = async (event: any) => {
		event.preventDefault();

		let waitlistCountry = '';

		switch (sellerData.id) {
			case 'mexico': {
				waitlistCountry = 'seller_waitlist_mx';
				break;
			}

			case 'india': {
				waitlistCountry = 'seller_waitlist_in';
				break;
			}

			default: {
				waitlistCountry = '';
			}
		}

		const formData = new FormData();
		formData.append('email', email);
		formData.append(waitlistCountry, 'true');

		try {
			const URL = `${AppConfig.API_URL}/sellers/create-hubspot`;
			const response = await axios.post(URL, formData);
			console.log(response);
			if (response.status === 201) {
				setEmail('');
				setOpenSubmitConfirm(true);
			}
		} catch (err) {
			console.error('error');
			setEmail('');
		}
	};

	/* Effects for Email validation */
	React.useEffect(() => {
		if (email.length > 0) {
			setEmailError(!validator.isEmail(email.trim()));
		} else {
			setEmailError(false);
		}
	}, [email]);

	return (
		<article className={styles.productCard} id={sellerData.id}>
			<div className={`${textClass}`}>
				<div className={styles.left}>
					<Image src={sellerData.icon} width="40px" height="40px" />
					<p>{sellerData.country}</p>
					<h2>
						{sellerData.title}{' '}
						{sellerData.status === 'inactive' ? (
							<span className={styles.titleNew}>New</span>
						) : null}
					</h2>

					<p>
						A dataset of the top active&nbsp;
						<span className={styles.value}>
							{sellerData.sellerCountryOrigin}
						</span>
						&nbsp; from the Amazon&nbsp;
						<span className={styles.value}>{sellerData.country}</span>&nbsp;
						marketplace.
					</p>

					{sellerData.noOfSellers ? (
						<div>
							<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
							Number of sellers:&nbsp;
							<span className={styles.value}>{sellerData.noOfSellers}</span>
							&nbsp; (includes {sellerData.noOfFbaSellers} FBA sellers)
						</div>
					) : null}

					{sellerData.noOfPhysicalAddresses ? (
						<div>
							<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
							Number of physical addresses:&nbsp;
							<span className={styles.value}>
								{sellerData.noOfPhysicalAddresses}
							</span>
						</div>
					) : null}

					{sellerData.noOfEmails ? (
						<div>
							<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
							Number of emails:&nbsp;
							<span className={styles.value}>{sellerData.noOfEmails}</span>
						</div>
					) : null}

					{sellerData.noOfWebsites ? (
						<div>
							<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
							Number of websites:&nbsp;
							<span className={styles.value}>{sellerData.noOfWebsites}</span>
						</div>
					) : null}

					{sellerData.noOfPhone ? (
						<div>
							<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
							Number of phone numbers:&nbsp;
							<span className={styles.value}>{sellerData.noOfPhone}</span>
						</div>
					) : null}

					{sellerData.lastUpdate ? (
						<div>
							<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
							Last update:&nbsp;
							<span className={styles.value}>{sellerData.lastUpdate}</span>
						</div>
					) : null}

					<div>
						<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
						Data points: Amazon URL, seller ID, FBA seller or no, business name,
						business address, seller country, state/region, zip code, email,
						website, phone number, store name, main category, store rating, last
						30 days seller ratings, last 90 days seller ratings, last 12 months
						seller ratings, lifetime seller ratings, number of products, brands
						sold, number of brands sold
					</div>

					<div>
						<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
						File format: Excel
					</div>

					<div>
						<Image src="/check-solid.svg" width="14px" height="10px" /> &nbsp;
						Instant download
					</div>
				</div>

				{sellerData.status === 'active' ? (
					<div className={styles.buttonContainer}>
						<button
							onClick={() => handleDownload(sellerData.id)}
							className={styles.primaryButton}
						>
							{sellerData.price}
						</button>

						<button
							onClick={() => setIsDemoFormOpen(true)}
							className={styles.secondaryButton}
						>
							Need a custom seller list?
						</button>
					</div>
				) : null}

				{sellerData.status === 'inactive' ? (
					<form onSubmit={handleJoinWaitlist}>
						<div className={styles.formContainer}>
							<FormInput
								className={`
								${styles.formInput}
								${styles.formInput__long}
							`}
								placeholder="Email address"
								id="email"
								type="email"
								name="email"
								onChange={handleChange}
								value={email}
								required
								autoComplete="off"
								hasError={emailError}
								errorMessage="Invalid Email"
							/>

							<button>Join the waitlist</button>
						</div>
					</form>
				) : null}
			</div>

			{sellerData.status === 'active' ? (
				<button
					className={`${styles.right} ${imageClass}`}
					onClick={() => handleSample(sellerData.sample)}
				>
					<Image src={sellerData.imageSeller} width={700} height={419} />
				</button>
			) : (
				<Image src={sellerData.imageSeller} width={700} height={419} />
			)}

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<SellerListForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>

			<Modal
				isOpen={openSubmitConfirm}
				onRequestClose={() => setOpenSubmitConfirm(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<FormSubmitConfirm
					heading="You are now in the waiting list"
					body="We will send you an email when the list is ready."
				/>
			</Modal>
		</article>
	);
};

SellerCard.defaultProps = {
	isStepper: false
};

export default SellerCard;

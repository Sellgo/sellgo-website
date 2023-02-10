import React from 'react';
import Modal from 'react-modal';
import validator from 'validator';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Stepper from './Stepper';
import FreeSampleModal from '../FreeSampleModal';
import DemoForm from '../../Demo/DemoForm';
import FormInput from '../../../components/FormInput';

const sellerData = [
	{
		id: 'us',
		title: 'Top Sellers Amazon.com',
		icon: '/united-states.png',
		country: 'UNITED STATES',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '231,335',
		noOfFbaSellers: '137,193',
		noOfEmails: '54,329',
		noOfWebsites: '85,127',
		noOfPhysicalAddresses: '223,762',
		noOfPhone: '68,262',
		numberofLinkedIn: '',
		url: 'Amazon.com',
		sample:
			'https://docs.google.com/spreadsheets/d/1XVZpBWzs8qNpl6yUhvc-XZKQq1XJy_xcwJqEFMFJpHo',
		price: 'Instant download $877',
		status: 'active',
		lastUpdate: 'May 2022',
		imageSeller: '/top-sellers-us.png'
	},
	{
		id: 'canada',
		title: 'Top Sellers Amazon.ca',
		icon: '/canada.png',
		country: 'CANADA',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '92,521',
		noOfFbaSellers: '63,721',
		noOfEmails: '4,470',
		noOfWebsites: '9,939',
		noOfPhysicalAddresses: '202,380',
		noOfPhone: '13,395',
		numberofLinkedIn: '4,581',
		url: 'Amazon.ca',
		sample:
			'https://docs.google.com/spreadsheets/d/1v2Pb2lV7qXEDHWUcwVmP7KFmzDDrgKTL_fsbaAcZMFY',
		price: 'Instant download $677',
		status: 'active',
		lastUpdate: 'May 2022',
		imageSeller: '/top-sellers-ca.png'
	},
	{
		id: 'mexico',
		title: 'Top Sellers Amazon.co.mx',
		icon: '/mexico.png',
		country: 'MEXICO',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '',
		noOfFbaSellers: '',
		noOfEmails: '',
		noOfWebsites: '',
		noOfPhysicalAddresses: '',
		noOfPhone: '',
		numberofLinkedIn: '',
		url: 'Amazon.co.mx',
		sample: '',
		price: 'Join waitlist',
		status: 'inactive',
		lastUpdate: '',
		imageSeller: '/top-sellers-mx.png'
	},
	{
		id: 'uk',
		title: 'Top Sellers Amazon.co.uk',
		icon: '/united-kingdom.png',
		country: 'UNITED KINGDOM',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '82,032',
		noOfFbaSellers: '43,802',
		noOfEmails: '6,712',
		noOfWebsites: '',
		noOfPhysicalAddresses: '74,204',
		noOfPhone: '16,036',
		url: 'Amazon.co.uk',
		sample:
			'https://docs.google.com/spreadsheets/d/1u25kl6UrUC_jyyMcLO0yIS8uDz4SGhL-sscIZM9nacI',
		price: 'Instant download $477',
		status: 'active',
		lastUpdate: 'May 2022',
		imageSeller: '/top-sellers-uk.png'
	},
	{
		id: 'italy',
		title: 'Top Sellers Amazon.it',
		icon: '/italy.png',
		country: 'ITALY',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '97,577',
		noOfFbaSellers: '52,959',
		noOfEmails: '5,620',
		noOfWebsites: '9,944',
		noOfPhysicalAddresses: '91,077',
		noOfPhone: '22,233',
		numberofLinkedIn: '',
		url: 'Amazon.it',
		sample:
			'https://docs.google.com/spreadsheets/d/1avB1xqUYcbNgRsO8SzxM98K9pdBvSFqKNZCc64fqKlE',
		price: 'Instant download $377',
		status: 'active',
		lastUpdate: 'May 2022',
		imageSeller: '/top-sellers-it.png'
	},
	{
		id: 'germany',
		title: 'Top Sellers Amazon.de',
		icon: '/germany.png',
		country: 'GERMANY',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '144,564',
		noOfFbaSellers: '58,684',
		noOfEmails: '24,750',
		noOfWebsites: '20,110',
		noOfPhysicalAddresses: '132,740',
		noOfPhone: '30,318',
		numberofLinkedIn: '',
		url: 'Amazon.de',
		sample:
			'https://docs.google.com/spreadsheets/d/1cCcADvHY7obNXPbPbXWydWkT1Qwg7KflDg5IbnmHpQc',
		price: 'Instant download $877',
		status: 'active',
		lastUpdate: 'May 2022',
		imageSeller: '/top-sellers-de.png'
	},
	{
		id: 'spain',
		title: 'Top Sellers Amazon.es',
		icon: '/spain.png',
		country: 'SPAIN',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		noOfPhone: '',
		numberofLinkedIn: '',
		url: 'Amazon.es',
		sample:
			'https://docs.google.com/spreadsheets/d/1e0RScT01jmVaV3r1FrPTZDUEVmhHM3a156DnGA-SCfs',
		price: 'Instant download $377',
		status: 'active',
		lastUpdate: 'May 2022',
		imageSeller: '/top-sellers-es.png'
	},
	{
		id: 'france',
		title: 'Top Sellers Amazon.fr',
		icon: '/france.png',
		country: 'FRANCE',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '99,963',
		noOfFbaSellers: '59,741',
		noOfEmails: '6,043',
		noOfWebsites: '8,277',
		noOfPhysicalAddresses: '88,994',
		noOfPhone: '19,006',
		numberofLinkedIn: '',
		url: 'Amazon.fr',
		sample:
			'https://docs.google.com/spreadsheets/d/1COYB1MdgmBJ_Z-XSXp8G9VBkOJh8aBrZeJI_lx0tDDU',
		price: 'Instant download $377',
		status: 'active',
		lastUpdate: '',
		imageSeller: '/top-sellers-fr.png'
	},
	{
		id: 'india',
		title: 'Top Sellers Amazon.in',
		icon: '/india.png',
		country: 'INDIA',
		sellerCountryOrigin: 'Sellers',
		noOfSeller: '',
		noOfFbaSellers: '',
		noOfEmails: '',
		noOfWebsites: '',
		noOfPhysicalAddresses: '',
		noOfPhone: '',
		numberofLinkedIn: '',
		url: 'Amazon.in',
		sample: '',
		price: 'Join waitlist',
		status: 'inactive',
		lastUpdate: '',
		imageSeller: '/top-sellers-in.png'
	},
	{
		id: 'china',
		title: 'Top Chinese Sellers Amazon.com',
		icon: '/china.png',
		country: 'US',
		sellerCountryOrigin: 'CHINESE Sellers',
		noOfSeller: '89,249',
		noOfFbaSellers: '',
		noOfEmails: '4,405',
		noOfWebsites: '',
		noOfPhysicalAddresses: '89,249',
		noOfPhone: '5,359',
		numberofLinkedIn: '',
		url: 'Amazon.cn',
		sample:
			'https://docs.google.com/spreadsheets/d/15WKWg3c2e6EcM4iB5nqOkL4lGSjbXThRsVmRxHgO_WM',
		price: 'Instant download $377',
		status: 'active',
		lastUpdate: 'May 2022',
		imageSeller: '/top-chinese-sellers-us.png'
	}
];

const InstantDownloadPanel = () => {
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);
	const [isFreeSampleFormOpen, setIsFreeSampleFormOpen] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [emailError, setEmailError] = React.useState(false);

	const countriesData = sellerData.map((seller: any) => seller.url);

	const handleChange = (event: any) => {
		setEmail(event.target.value);
	};

	const handleOpenModal = (event: any) => {
		event.preventDefault();

		setIsFreeSampleFormOpen(true);
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
		<section id="instant-download" className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<h2 className={styles.heading}>
					One-off Pricing for Instant Data Download
				</h2>

				<p className={styles.tagline}>
					Our data is everything you need, nothing you don’t. You pick.
				</p>

				<Stepper steps={sellerData} />
			</div>

			<div className={styles.freeSampleContainer}>
				<h2>Get FREE Sample Leads Here</h2>

				<form onSubmit={handleOpenModal}>
					<div className={styles.formContainer}>
						<FormInput
							className={`
								${styles.formInput}
								${styles.formInput__long}
							`}
							placeholder="email@domain.com"
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

						<button className={styles.primaryButton}>
							Get 21 FREE Leads Now
						</button>
					</div>
				</form>
			</div>

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>

			<Modal
				isOpen={isFreeSampleFormOpen}
				onRequestClose={() => setIsFreeSampleFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<FreeSampleModal
					onRequestClose={() => setIsFreeSampleFormOpen(false)}
					defaultEmail={email}
					countriesData={countriesData}
				/>
			</Modal>
		</section>
	);
};

export default InstantDownloadPanel;

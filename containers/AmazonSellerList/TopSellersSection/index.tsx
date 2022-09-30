import React from 'react';

/* Styling */
import styles from './index.module.scss';
import Stepper from './Stepper';

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
		url: 'Amazon.com',
		sample:
			'https://docs.google.com/spreadsheets/d/15WKWg3c2e6EcM4iB5nqOkL4lGSjbXThRsVmRxHgO_WM',
		price: 'Instant download $377',
		status: 'active',
		lastUpdate: 'May 2022',
		imageSeller: '/top-chinese-sellers-us.png'
	}
];

const HeroBox = () => {
	return (
		<section id="instant-download" className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<h2 className={styles.heading}>Instant Download</h2>

				<p className={styles.tagline}>
					As a web scraping agency, we scrape Amazon data every month. If you
					don't need a custom scraper though, you can download one of our
					off-the-shelf datasets below and save yourself time and money
					(scraping one list from scratch takes 3-4 weeks and over $3k).
				</p>

				<Stepper steps={sellerData} />
			</div>
		</section>
	);
};

export default HeroBox;

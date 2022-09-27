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
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.com',
		sample:
			'https://docs.google.com/spreadsheets/d/1XVZpBWzs8qNpl6yUhvc-XZKQq1XJy_xcwJqEFMFJpHo',
		price: 'Download database $877',
		status: 'active'
	},
	{
		id: 'canada',
		title: 'Top Sellers Amazon.ca',
		icon: '/canada.png',
		country: 'CANADA',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.ca',
		sample:
			'https://docs.google.com/spreadsheets/d/1v2Pb2lV7qXEDHWUcwVmP7KFmzDDrgKTL_fsbaAcZMFY',
		price: 'Download database $677',
		status: 'active'
	},
	{
		id: 'mexico',
		title: 'Top Sellers Amazon.co.mx',
		icon: '/mexico.png',
		country: 'MEXICO',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.co.mx',
		sample: 'https://docs.google.com/spreadsheets/d/',
		price: 'Incoming',
		status: 'inactive'
	},
	{
		id: 'uk',
		title: 'Top Sellers Amazon.co.uk',
		icon: '/united-kingdom.png',
		country: 'UNITED KINGDOM',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.co.uk',
		sample:
			'https://docs.google.com/spreadsheets/d/1u25kl6UrUC_jyyMcLO0yIS8uDz4SGhL-sscIZM9nacI',
		price: 'Download database $477',
		status: 'active'
	},
	{
		id: 'italy',
		title: 'Top Sellers Amazon.it',
		icon: '/italy.png',
		country: 'ITALY',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.it',
		sample:
			'https://docs.google.com/spreadsheets/d/1avB1xqUYcbNgRsO8SzxM98K9pdBvSFqKNZCc64fqKlE',
		price: 'Download database $377',
		status: 'active'
	},
	{
		id: 'germany',
		title: 'Top Sellers Amazon.de',
		icon: '/germany.png',
		country: 'GERMANY',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.de',
		sample:
			'https://docs.google.com/spreadsheets/d/1cCcADvHY7obNXPbPbXWydWkT1Qwg7KflDg5IbnmHpQc',
		price: 'Download database $877',
		status: 'active'
	},
	{
		id: 'spain',
		title: 'Top Sellers Amazon.es',
		icon: '/spain.png',
		country: 'SPAIN',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.es',
		sample:
			'https://docs.google.com/spreadsheets/d/1e0RScT01jmVaV3r1FrPTZDUEVmhHM3a156DnGA-SCfs',
		price: 'Download database $377',
		status: 'active'
	},
	{
		id: 'france',
		title: 'Top Sellers Amazon.fr',
		icon: '/france.png',
		country: 'FRANCE',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.fr',
		sample:
			'https://docs.google.com/spreadsheets/d/1COYB1MdgmBJ_Z-XSXp8G9VBkOJh8aBrZeJI_lx0tDDU',
		price: 'Download database $377',
		status: 'active'
	},
	{
		id: 'india',
		title: 'Top Sellers Amazon.in',
		icon: '/india.png',
		country: 'INDIA',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.in',
		sample: 'https://docs.google.com/spreadsheets/d/',
		price: 'Incoming',
		status: 'inactive'
	},
	{
		id: 'china',
		title: 'Top Chinese Sellers Amazon.com',
		icon: '/china.png',
		country: 'CHINA',
		noOfSeller: '205,428',
		noOfFbaSellers: '136,380',
		noOfEmails: '25,450',
		noOfWebsites: '57,716',
		noOfPhysicalAddresses: '202,380',
		url: 'Amazon.com',
		sample:
			'https://docs.google.com/spreadsheets/d/15WKWg3c2e6EcM4iB5nqOkL4lGSjbXThRsVmRxHgO_WM',
		price: 'Download database $377',
		status: 'active'
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

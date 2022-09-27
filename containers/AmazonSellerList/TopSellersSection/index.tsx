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
		url: 'Amazon.com'
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
		url: 'Amazon.ca'
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
		url: 'Amazon.co.mx'
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
		url: 'Amazon.co.uk'
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
		url: 'Amazon.it'
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
		url: 'Amazon.de'
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
		url: 'Amazon.es'
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
		url: 'Amazon.fr'
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
		url: 'Amazon.in'
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
		url: 'Amazon.com'
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

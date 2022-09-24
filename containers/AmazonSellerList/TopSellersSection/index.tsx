import React from 'react';

/* Styling */
import styles from './index.module.scss';
import Stepper from './Stepper';

const sellerData = [
	{
		id: 'united-states',
		title: 'United States',
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
		title: 'Canada',
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
		title: 'Mexico',
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
		id: 'united-kingdom',
		title: 'United Kingdom',
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
		title: 'Italy',
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
		title: 'Germany',
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
		title: 'Spain',
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
		title: 'France',
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
		title: 'India',
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
		title: 'Chinese Sellers',
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

import React from 'react';
import { v4 as uuid } from 'uuid';

// @ts-ignore : cannot find typed utils
import MultilevelSidebar from 'react-multilevel-sidebar';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Close from '../Icons/Close';

interface Props {
	isOpen: boolean;
	handleClose: () => void;
}

const options = [
	{
		title: 'Products',
		content: [
			{ id: uuid(), name: 'Extension', to: '/extension' },
			{ id: uuid(), name: 'Search Management', to: '/search-management' },
			{ id: uuid(), name: 'Profit Finder', to: '/profit-finder' },
			{ id: uuid(), name: 'Leads Tracker', to: '/leads-tracker' },
			{ id: uuid(), name: 'Seller Database', to: '/seller-database' },
			{ id: uuid(), name: 'Seller Finder', to: '/seller-finder' },
			{ id: uuid(), name: 'Seller Map', to: '/seller-map' },
			{ id: uuid(), name: 'Keyword Finder', to: '/keyword-finder' },
			{ id: uuid(), name: 'Keyword Database', to: '/keyword-database' },
			{ id: uuid(), name: 'Product Rank Tracker', to: '/product-rank-tracker' }
		]
	},

	{
		title: 'Pricing',
		content: [
			{ id: uuid(), name: 'Monthly and annual plans', to: '/pricing' },
			{ id: uuid(), name: 'Pay $1.99 for a day', to: '/pricing?type=wholesale' }
		]
	},
	{
		title: 'Resources',
		content: [
			{ id: uuid(), name: 'Blogs', to: '/blogs' },
			{ id: uuid(), name: 'Sales Estimator', to: '/sales-estimator' },
			{ id: uuid(), name: 'Partnership Program', to: '/partnerships' }
		]
	},

	{
		title: 'Support',
		content: [
			{ id: uuid(), name: 'Contact Us', to: '/contact' },
			{ id: uuid(), name: 'Contact Sales', to: '/contact-sales' },
			{ id: uuid(), name: 'Request Free Demo', to: '/demo' },
			{ id: uuid(), name: 'About Us', to: '/about-us' }
		]
	}
];

const Sidebar: React.FC<Props> = (props) => {
	const { isOpen, handleClose } = props;

	const className = `${isOpen ? styles.sidebar : styles.closeSidebar}`;
	return (
		<div className={className}>
			{/* Implementing custom overlay to close sidebar on screen click
			Manual override is needed because the library is buggy */}
			<div
				onClick={() => handleClose()}
				className={styles.backdrop}
				onKeyDown={() => handleClose()}
			/>
			<MultilevelSidebar
				open={isOpen}
				options={options}
				onItemClick={handleClose}
				style={{ zIndex: '105 !important' }}
			/>
			{/* using in our button to open the sidebar */}
			<div
				className={styles.close}
				onClick={handleClose}
				tabIndex={0}
				role="button"
				onKeyPress={() => {}}
			>
				<Close width={15} height={15} fill="#2E3B4A" />
			</div>
		</div>
	);
};

export default Sidebar;

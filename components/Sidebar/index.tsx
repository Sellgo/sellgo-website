import React from 'react';
import Image from 'next/image';

// @ts-ignore : cannot find typed utils
import MultilevelSidebar from 'react-multilevel-sidebar';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const options = [
	{
		title: 'Products',
		titleIcon: <Image src="/genericIcon.svg" width={40} height={40} />,
		content: [
			{ id: 1, name: 'Extension', to: '/extension' },
			{ id: 2, name: 'Profit Finder', to: '/profit-finder' },
			{ id: 3, name: 'Product Tracker', to: '/product-tracker' },
			{ id: 4, name: 'Leads Tracker', to: '/leads-tracker' },
			{ id: 5, name: 'Search Management', to: '/search-management' },
			{ id: 6, name: 'Seller Finder', to: '/seller-finder' }
		]
	}
];

const Sidebar: React.FC<Props> = () => {
	return (
		<div className={styles.sidebar}>
			<MultilevelSidebar
				open={false}
				onToggle={() => {}}
				options={options}
				onItemClick={() => {}}
			/>
			{/* using in our button to open the sidebar */}
			<button className={styles.close}>close</button>
		</div>
	);
};

export default Sidebar;

import React from 'react';
import { v4 as uuid } from 'uuid';
import Modal from 'react-modal';

// @ts-ignore : cannot find typed utils
import MultilevelSidebar from 'react-multilevel-sidebar';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Close from '../Icons/Close';
import DemoForm from '../../containers/Demo/DemoForm';

interface Props {
	isOpen: boolean;
	handleClose: () => void;
}

const options = [
	{
		title: 'Products',
		content: [
			{ id: uuid(), name: 'Extension', to: '/extension' },
			{ id: uuid(), name: 'Seller Database', to: '/seller-database' },
			{ id: uuid(), name: 'Seller Finder', to: '/seller-finder' },
			{ id: uuid(), name: 'Seller Map', to: '/seller-map' }
		]
	},

	{
		title: 'Pricing',
		content: [
			{
				id: uuid(),
				name: 'Usage-based plans',
				to: '/pricing?type=usage-based-plans'
			},
			{
				id: uuid(),
				name: 'Account-based plans',
				to: '/pricing?type=account-based-plans'
			}
		]
	},
	{
		title: 'Resources',
		content: [{ id: uuid(), name: 'Blogs', to: '/blogs' }]
	},

	{
		title: 'Demo',
		content: [{ id: uuid(), name: 'Book a demo' }]
	}
];

const Sidebar: React.FC<Props> = (props) => {
	const { isOpen, handleClose } = props;
	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

	const className = `${isOpen ? styles.sidebar : styles.closeSidebar}`;
	const onItemClick = (e: any) => {
		if (e.name === 'Request Free Demo') {
			setIsDemoFormOpen(true);
		}
		handleClose();
	};
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
				onItemClick={onItemClick}
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

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</div>
	);
};

export default Sidebar;

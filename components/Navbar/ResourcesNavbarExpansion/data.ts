/* Types */
import { GroupedNavLinks } from '../../../interfaces/Navbar';

export const resourcesNavigationList: GroupedNavLinks[] = [
	{
		head: 'Blog',
		desc: 'Amazon Seller Tips & News',
		navigateTo: '/blogs',
		iconName: 'blogs'
	},
	{
		head: 'Affiliate Program',
		desc: 'Join the Sellgo Family!',
		navigateTo: '/affiliate-program',
		iconName: 'affiliateProgram'
	}
	// {
	// 	head: 'Free Sales Estimation Tools',
	// 	desc: 'Lorem Ipsum',
	// 	navigateTo: '/',
	// 	iconLink: '/genericIcon.svg'
	// },
	// {
	// 	head: 'Free Amazon FBA Fee Calculator',
	// 	desc: 'Lorem Ipsum',
	// 	navigateTo: '/',
	// 	iconLink: '/genericIcon.svg'
	// }
];

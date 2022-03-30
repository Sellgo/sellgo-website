/* Types */
import { GroupedNavLinks } from '../../../interfaces/Navbar';

export const resourcesNavigationList: GroupedNavLinks[] = [
	{
		head: 'Blog',
		desc: 'Amazon seller tips & news',
		navigateTo: '/blogs',
		iconName: 'blogs'
	},
	{
		head: 'Free Sales Estimator',
		desc: 'Amazon sales estimator and FBA calculator',
		navigateTo: '/sales-estimator',
		iconName: 'salesEstimator'
	}
];

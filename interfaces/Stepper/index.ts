import { Products, Resources } from '../Navbar';

export interface StepDetail {
	title: string;
	icon: Products | Resources;
	subTitle: string;
	description: string;
	linkLabel: string | string[];
	navigateTo: string | string[];
	imageUrl: string;
}

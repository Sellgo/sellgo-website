/* Camel case names for products */
export type Products =
	| 'extension'
	| 'sellerFinder'
	| 'sellerDatabase'
	| 'sellerMap';

export type Resources = 'blogs' | 'PartnershipProgram' | 'salesEstimator';

export interface ProductsNavigationList {
	head: string;
	desc: string;
	hoverId: string;
}

export interface GroupedNavLinks {
	head: string;
	desc: string;
	navigateTo: string;
	iconName: Products | Resources;
	isNew?: boolean;
	isComingSoon?: boolean;
}

export interface ProductsPanelData {
	hoverId: string;
	header: string;
	groupedNavLinksData: GroupedNavLinks[];
}

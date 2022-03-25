/* Camel case names for products */
export type Products =
	| 'extension'
	| 'searchManagement'
	| 'profitFinder'
	| 'productTracker'
	| 'leadsTracker'
	| 'productDatabase'
	| 'sellerFinder'
	| 'sellerDatabase'
	| 'sellerMap'
	| 'keywordFinder'
	| 'keywordDatabase'
	| 'productRankTracker'
	| 'dashboard'
	| 'orderPlanning'
	| 'salesProjection'
	| 'seasonalityAdjustor'
	| 'catalogPlanning'
	| 'Tpl';

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

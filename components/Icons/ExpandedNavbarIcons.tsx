import React, { memo } from 'react';

/* Product Icon Components */
import ChromeExtension from './Products/ChromeExtension';
import LeadsTracker from './Products/LeadsTracker';
import ProductTracker from './Products/ProductTracker';
import ProfitFinder from './Products/ProfitFinder';
import SearchManagement from './Products/SearchManagement';
import SellerFinder from './Products/SellerFinder';
import SellerDatabase from './Products/SellerDatabase';
import SellerMap from './Products/SellerMap';
import ProductsDatabase from './Products/ProductDatabase';
import KeywordFinder from './Products/KeywordFinder';
import KeywordDatabase from './Products/KeywordDatabase';
import ProductRankTracker from './Products/ProductRankTracker';
import Dashboard from './Products/Dashboard';
import OrderPlanning from './Products/OrderPlanning';
import SalesProjection from './Products/SalesProjection';
import SeasonalAdjustor from './Products/SeasonalAdjustor';
import CatalogPlanning from './Products/CatalogPlanning';

/* Resources Icons */
import Blogs from './Resources/Blogs';
import AffiliateProgram from './Resources/AffiliateProgram';

/* Types */
import { Products, Resources } from '../../interfaces/Navbar';

interface Props {
	name: Products | Resources;
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const ProductsIconMapper: React.FC<Props> = (props) => {
	const { name, ...otherProps } = props;
	let productIcon: React.ReactNode;

	switch (name) {
		// products
		case 'extension': {
			productIcon = <ChromeExtension {...otherProps} />;
			break;
		}
		case 'searchManagement': {
			productIcon = <SearchManagement {...otherProps} />;
			break;
		}
		case 'profitFinder': {
			productIcon = <ProfitFinder {...otherProps} />;
			break;
		}
		case 'productTracker': {
			productIcon = <ProductTracker {...otherProps} />;
			break;
		}
		case 'leadsTracker': {
			productIcon = <LeadsTracker {...otherProps} />;
			break;
		}

		case 'productsDatabase': {
			productIcon = <ProductsDatabase {...otherProps} />;
			break;
		}

		case 'sellerFinder': {
			productIcon = <SellerFinder {...otherProps} />;
			break;
		}

		case 'sellerDatabase': {
			productIcon = <SellerDatabase {...otherProps} />;
			break;
		}

		case 'sellerMap': {
			productIcon = <SellerMap {...otherProps} />;
			break;
		}

		case 'keywordFinder': {
			productIcon = <KeywordFinder {...otherProps} />;
			break;
		}

		case 'keywordDatabase': {
			productIcon = <KeywordDatabase {...otherProps} />;
			break;
		}

		// Inventory Management
		case 'productRankTracker': {
			productIcon = <ProductRankTracker {...otherProps} />;
			break;
		}

		case 'dashboard': {
			productIcon = <Dashboard {...otherProps} />;
			break;
		}

		case 'orderPlanning': {
			productIcon = <OrderPlanning {...otherProps} />;
			break;
		}

		case 'salesProjection': {
			productIcon = <SalesProjection {...otherProps} />;
			break;
		}

		case 'seasonalAdjustor': {
			productIcon = <SeasonalAdjustor {...otherProps} />;
			break;
		}

		case 'catalogPlanning': {
			productIcon = <CatalogPlanning {...otherProps} />;
			break;
		}

		// resources
		case 'blogs': {
			productIcon = <Blogs {...otherProps} />;
			break;
		}

		case 'affiliateProgram': {
			productIcon = <AffiliateProgram {...otherProps} />;
			break;
		}
		default: {
			productIcon = null;
		}
	}

	return <>{productIcon}</>;
};

export default memo(ProductsIconMapper);

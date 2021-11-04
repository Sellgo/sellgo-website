import React, { memo } from 'react';
import styles from './ExpandedNavbarIcons.module.scss';

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
import SalesEstimator from './Resources/SalesEstimator';

interface Props {
	name: Products | Resources;
	width: number;
	height: number;
	fill: string;
	isRainbow?: boolean;
}

const ProductsIconMapper: React.FC<Props> = (props) => {
	const { name, isRainbow, ...otherProps } = props;
	let productIcon: React.ReactNode;

	switch (name) {
		// products
		case 'extension': {
			productIcon = <ChromeExtension {...otherProps} isRainbow={isRainbow} />;
			break;
		}
		case 'searchManagement': {
			productIcon = <SearchManagement {...otherProps} isRainbow={isRainbow} />;
			break;
		}
		case 'profitFinder': {
			productIcon = <ProfitFinder {...otherProps} isRainbow={isRainbow} />;
			break;
		}
		case 'productTracker': {
			productIcon = <ProductTracker {...otherProps} isRainbow={isRainbow} />;
			break;
		}
		case 'leadsTracker': {
			productIcon = <LeadsTracker {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'productDatabase': {
			productIcon = <ProductsDatabase {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'sellerFinder': {
			productIcon = <SellerFinder {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'sellerDatabase': {
			productIcon = <SellerDatabase {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'sellerMap': {
			productIcon = <SellerMap {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'keywordFinder': {
			productIcon = <KeywordFinder {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'keywordDatabase': {
			productIcon = <KeywordDatabase {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		// Inventory Management
		case 'productRankTracker': {
			productIcon = (
				<ProductRankTracker {...otherProps} isRainbow={isRainbow} />
			);
			break;
		}

		case 'dashboard': {
			productIcon = <Dashboard {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'orderPlanning': {
			productIcon = <OrderPlanning {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'salesProjection': {
			productIcon = <SalesProjection {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'seasonalityAdjustor': {
			productIcon = <SeasonalAdjustor {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'catalogPlanning': {
			productIcon = <CatalogPlanning {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		// resources
		case 'blogs': {
			productIcon = <Blogs {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'affiliateProgram': {
			productIcon = <AffiliateProgram {...otherProps} />;
			break;
		}

		case 'salesEstimator': {
			productIcon = <SalesEstimator {...otherProps} isRainbow={isRainbow} />;
			break;
		}
		default: {
			productIcon = null;
		}
	}

	return (
		<div
			className={`${styles.iconWrapper} ${
				isRainbow ? styles.iconWrapper__active : ''
			}`}
		>
			{productIcon}
		</div>
	);
};

export default memo(ProductsIconMapper);

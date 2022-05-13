import React, { memo } from 'react';
import styles from './ExpandedNavbarIcons.module.scss';

/* Product Icon Components */
import ChromeExtension from './Products/ChromeExtension';
import LeadsTracker from './Products/LeadsTracker';
import ProductTracker from './Products/ProductTracker';
import ProfitFinder from './Products/ProfitFinder';
import SearchManagement from './Products/SearchManagement';
import KeywordFinder from './Products/KeywordFinder';
import SellerFinder from './Products/SellerFinder';
import SellerDatabase from './Products/SellerDatabase';
import SellerMap from './Products/SellerMap';
import ProductsDatabase from './Products/ProductDatabase';
import KeywordDatabase from './Products/KeywordDatabase';
import ProductRankTracker from './Products/ProductRankTracker';

/* Resources Icons */
import Blogs from './Resources/Blogs';
import PartnershipProgram from './Resources/PartnershipProgram';

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

		// resources
		case 'blogs': {
			productIcon = <Blogs {...otherProps} isRainbow={isRainbow} />;
			break;
		}

		case 'PartnershipProgram': {
			productIcon = <PartnershipProgram {...otherProps} />;
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

ProductsIconMapper.defaultProps = {
	isRainbow: false
};

export default memo(ProductsIconMapper);

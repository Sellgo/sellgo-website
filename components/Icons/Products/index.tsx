import React, { memo } from 'react';

/* Product Icon Components */
import ChromeExtension from './ChromeExtension';
import LeadsTracker from './LeadsTracker';
import ProductTracker from './ProductTracker';
import ProfitFinder from './ProfitFinder';
import SearchManagement from './SearchManagement';
import SellerFinder from './SellerFinder';

/* Types */
import { Products } from '../../../interfaces/Products';

interface Props {
	name: Products;
	width: number;
	height: number;
	fill: string;
}

const ProductsIconMapper: React.FC<Props> = (props) => {
	const { name, ...otherProps } = props;
	let productIcon: React.ReactNode;

	switch (name) {
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
		case 'sellerFinder': {
			productIcon = <SellerFinder {...otherProps} />;
			break;
		}
		default: {
			productIcon = null;
		}
	}

	return <>{productIcon}</>;
};

export default memo(ProductsIconMapper);

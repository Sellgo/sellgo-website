import React, { memo } from 'react';
import styles from './ExpandedNavbarIcons.module.scss';

/* Product Icon Components */
import ChromeExtension from './Products/ChromeExtension';
import SellerFinder from './Products/SellerFinder';
import SellerDatabase from './Products/SellerDatabase';
import SellerMap from './Products/SellerMap';

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

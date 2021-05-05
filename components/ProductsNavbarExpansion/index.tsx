import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import GroupedNavLink from '../GroupedNavLinks';

/* Data */
import { groupNavigationDetails } from './data';

interface Props {
	className: string;
}

const ProductsNavbarExpansion: React.FC<Props> = (props) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className={styles.productsNavbar}>
				<div className={styles.productsNavbar__left}>
					<div className={styles.productsNavigator}>
						<h2>
							The Full FBA <br /> Sourcing <br />
							Platform
						</h2>
						<a href="/privatelabel-go" className="anchor">
							Overview of all <br /> products &#x2192;
						</a>
					</div>
					<div className={styles.productsNavigator}>
						<h2>Free Sourcing</h2>
						<a href="/privatelabel-go" className="anchor">
							{`Overview of Sellgo's`} <br /> free tools &#x2192;
						</a>
					</div>
				</div>

				<div className={styles.productsNavbar__right}>
					<div className={styles.groupedLinksWrapper}>
						{groupNavigationDetails.map((groupedNavLink: any) => {
							return <GroupedNavLink key={uuid()} {...groupedNavLink} />;
						})}
					</div>

					<div className={styles.bottomSummary}>
						<h2>App Marketplace</h2>
						<p>Connect your favorite apps to Sellgo</p>
						<a href="/privatelabel-go" className="anchor">
							See all integrations &#x2192;
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsNavbarExpansion;

import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import GroupedNavLink from '../GroupedNavLinks';

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
						<h2>Product Tracker</h2>
						<a href="/product-tracker" className="anchor">
							Lorem Ipsum &#x2192;
						</a>
					</div>
					<div className={styles.productsNavigator}>
						<h2>Product Tracker</h2>
						<a href="/product-tracker" className="anchor">
							Lorem Ipsum &#x2192;
						</a>
					</div>
				</div>

				<div className={styles.productsNavbar__right}>
					<div className={styles.groupedLinksWrapper}>
						<GroupedNavLink />
						<GroupedNavLink />
						<GroupedNavLink />
						<GroupedNavLink />
					</div>

					<div className={styles.bottomSummary}>
						<h2>Lorem Ipsum</h2>
						<p>Lorem Ipsum</p>
						<a href="/product-tracker" className="anchor">
							Lorem Ipsum &#x2192;
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsNavbarExpansion;

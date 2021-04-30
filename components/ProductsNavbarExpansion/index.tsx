import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

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
						<Link href="/product-tracker" passHref>
							<a className="anchor">Lorem Ipsum &#x2192;</a>
						</Link>
					</div>
					<div className={styles.productsNavigator}>
						<h2>Product Tracker</h2>
						<a className="anchor">Lorem Ipsum &#x2192;</a>
					</div>
				</div>

				<div className={styles.productsNavbar__right}></div>
			</div>
		</div>
	);
};

export default ProductsNavbarExpansion;

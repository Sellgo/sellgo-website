import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const ProductsNavbarExpansion: React.FC<Props> = () => {
	return (
		<div className={styles.productsNavbar} id="#productsNavbar">
			<div className={styles.productsNavbar__left}>
				<div className={styles.productsNavigator}>
					<h2>Product Tracker</h2>
					<Link href="/product-tracker" passHref>
						<a className="anchor">Lorem Ipsum &#x2192;</a>
					</Link>
				</div>
				<div className={styles.productsNavigator}>
					<h2>Lorem Ipsum</h2>
					<a className="anchor">Lorem Ipsum &#x2192;</a>
				</div>
			</div>

			<div className={styles.productsNavbar__right}></div>
		</div>
	);
};

export default ProductsNavbarExpansion;

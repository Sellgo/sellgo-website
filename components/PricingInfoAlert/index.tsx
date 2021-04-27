import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const PricingInfoAlert: React.FC<Props> = () => {
	return (
		<div className={styles.pricingInfoAlert}>
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<a href="#!">Learn More </a>
		</div>
	);
};

export default PricingInfoAlert;

import React from 'react';

/* Styling */
import styles from './index.module.scss';

import { brandLogoData } from './data';

const BrandsAnimated = () => {
	return (
		<div className={styles.brandsContainer}>
			<h2>Trusted by 7,000+ businesses.</h2>
			<div
				style={{
					animationDuration: `${brandLogoData.configs.animationDuration}`
				}}
			>
				{brandLogoData?.urls.map((brandLogo) => (
					<img src={brandLogo.src} alt={brandLogo.title} />
				))}
			</div>
		</div>
	);
};

export default BrandsAnimated;

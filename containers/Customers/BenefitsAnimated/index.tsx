import React from 'react';

/* Styling */
import styles from './index.module.scss';

import { benefitsData } from './data';

const BenefitsAnimated = () => {
	return (
		<div className={styles.brandsContainer}>
			<div className={styles.benefitWrapper}>
				<div
					className={styles.benefitContainer}
					style={{
						animationDuration: `${benefitsData.configs.animationDuration}`
					}}
				>
					{benefitsData?.benefits.map((benefit) => (
						<p className={styles.benefit}>{benefit}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default BenefitsAnimated;

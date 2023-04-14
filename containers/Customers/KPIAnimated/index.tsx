import React from 'react';

/* Styling */
import styles from './index.module.scss';

import { KPIData } from './data';

const KPIAnimated = () => {
	return (
		<div className={styles.brandsContainer}>
			<h2>Trusted by 7,000+ businesses.</h2>
			<div className={styles.kpiWrapper}>
				<div
					className={styles.kpiContainer}
					style={{ animationDuration: `${KPIData.configs.animationDuration}` }}
				>
					{KPIData?.KPI.map((data) => (
						<div className={styles.kpiData}>
							<p>{data.text}</p>
							{data.status === 'declining' ? (
								<div className={styles.increase}>
									<p>{data.KPI}</p>
								</div>
							) : (
								<div className={styles.declining}>
									<p>{data.KPI}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default KPIAnimated;

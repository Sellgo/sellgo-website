import React, { useState } from 'react';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import PricingPanel from '../PricingPanel';
import BundlesPanel from '../BundlesPanel';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	const [isPricingPlans, setIsPricingPlans] = useState<boolean>(true);

	return (
		<>
			<section className={styles.heroboxSection}>
				<h1>Lorem Ipsum</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

				<div className={styles.tabsWrapper}>
					<button
						className={`${styles.tab} ${
							isPricingPlans ? '' : styles.tab__disabled
						} ${styles.tab__pricing}`}
						onClick={() => setIsPricingPlans(true)}
					>
						Pricing and Plans
					</button>
					<button
						className={`${styles.tab} ${
							!isPricingPlans ? '' : styles.tab__disabled
						} ${styles.tab__bundles}`}
						onClick={() => setIsPricingPlans(false)}
					>
						Bundles
					</button>
				</div>
			</section>

			{isPricingPlans ? <PricingPanel /> : <BundlesPanel />}
		</>
	);
};

export default HeroBox;

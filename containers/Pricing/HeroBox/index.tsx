import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	isProductsPlanSelected: boolean;
	setProductsPanel: () => void;
	setBundlesPanel: () => void;
}

const HeroBox: React.FC<Props> = () => {
	return (
		<>
		<div className={styles.banner}>
						Enjoy flat price forever for the first 1,000 AiStock beta users. Monthly or annual commitment.
					</div>
			<section className={styles.heroboxSection}>
			{/*}
				<h1>Supply chain? Product research? Keyword research? Seller data?</h1>
				<p>We've got your back. Pay less on our all-in-one Amazon solution, invest more in your business.</p>
	*/}
				<div className={styles.tabsWrapper}>
					{/* <button
						className={`${styles.tab} ${
							isProductsPlanSelected ? '' : styles.tab__disabled
						} ${styles.tab__pricing}`}
						onClick={setProductsPanel}
					>
						Products & Plans
					</button> */}
					{/* <button
						className={`${styles.tab} ${
							!isProductsPlanSelected ? '' : styles.tab__disabled
						} ${styles.tab__bundles}`}
						onClick={setBundlesPanel}
					>
						Bundles
					</button> */}
				</div>
			</section>
			
		</>
	);
};

export default HeroBox;

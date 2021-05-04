import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	isProductsPlanSelected: boolean;
	setProductsPanel: () => void;
	setBundlesPanel: () => void;
}

const HeroBox: React.FC<Props> = (props) => {
	const { isProductsPlanSelected, setProductsPanel } = props;

	return (
		<>
			<section className={styles.heroboxSection}>
				<h1>Lorem Ipsum</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

				<div className={styles.tabsWrapper}>
					<button
						className={`${styles.tab} ${
							isProductsPlanSelected ? '' : styles.tab__disabled
						} ${styles.tab__pricing}`}
						onClick={setProductsPanel}
					>
						Pricing and Plans
					</button>
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

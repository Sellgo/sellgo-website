import React, { useState } from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import BuyPlanPriceCard from '../../../components/BuyPlanPriceCard';

interface Props {}

const CalculateYourPriceSection: React.FC<Props> = () => {
	const [isMonthly, setIsMonthly] = useState<boolean>(true);

	const handleChange = () => {
		setIsMonthly(!isMonthly);
	};

	return (
		<section className={`big-page-container ${styles.calculatePriceSection}`}>
			<h2 className="secondary-heading">Calculate your price</h2>

			<div className={styles.calculatePriceWrapper}>
				<div className={styles.priceCalculator}></div>

				<div className={styles.buyPlan}>
					<Link href="/pricing" passHref>
						<a className="anchor">
							&#8593; <span>Back to top</span>
						</a>
					</Link>
					<BuyPlanPriceCard isMonthly={isMonthly} handleChange={handleChange} />

					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</section>
	);
};

export default CalculateYourPriceSection;

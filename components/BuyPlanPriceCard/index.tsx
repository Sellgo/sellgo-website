import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricePlanToggleButton from '../PricePlanToggleButton';
import CTAButton from '../CTAButton';

interface Props {
	isMonthly: boolean;
	handleChange: () => void;
	price: number;
}

const BuyPlanPriceCard: React.FC<Props> = (props) => {
	const { isMonthly, handleChange, price } = props;
	return (
		<div className={styles.buyPlanCard}>
			<PricePlanToggleButton
				isMonthly={isMonthly}
				handleChange={handleChange}
				className={styles.priceCardToggle}
			/>

			<p className={styles.price}>
				${price || 0} <span>/mo</span>
			</p>

			<p className={styles.billedAt}>
				Billed At
				<span className={styles.billedAt__striked}>$600</span>
				<span className={styles.billedAt__price}>$500/yr</span>
			</p>

			<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>

			<p className={styles.totalPrice}> $14,862 </p>

			<CTAButton
				type="primary"
				size="medium"
				variant="purplePinkRainbow"
				navigateTo="/"
				className={styles.priceCardCTA}
			>
				Get started
			</CTAButton>

			<a href="#!" className="anchor">
				View price breakdown
			</a>
		</div>
	);
};

export default BuyPlanPriceCard;

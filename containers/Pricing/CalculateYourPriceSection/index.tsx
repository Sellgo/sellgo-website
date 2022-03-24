import React, { useState } from 'react';
import Link from 'next/link';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

/* Styling */
import styles from './index.module.scss';

/* Components */
import BuyPlanPriceCard from '../../../components/BuyPlanPriceCard';
import FormInput from '../../../components/FormInput';
import { ORDER_NUMBERS, ORDER_NUMBERS_TYPE, getPlanPrice } from './data';

const CalculateYourPriceSection = () => {
	const [isMonthly, setIsMonthly] = useState<boolean>(true);
	const [selectedPlan, setSelectedPlan] = useState<number>(0);
	const [planPrice, setPlanPrice] = useState<number>(0);
	const [orderNumber, setOrderNumber] = useState<ORDER_NUMBERS_TYPE>('0');

	const handleChange = () => {
		setIsMonthly(!isMonthly);
	};

	React.useEffect(() => {
		setPlanPrice(getPlanPrice('professional', isMonthly, orderNumber));
	}, [isMonthly, orderNumber]);
	return (
		<section
			className={`big-page-container ${styles.calculatePriceSection}`}
			id="calculatePrice"
		>
			<h2 className="secondary-heading">
				Calculate your price
				<Link href="/pricing" passHref>
					<a className="anchor">
						&#8593; <span>Back to top</span>
					</a>
				</Link>
			</h2>

			<div className={styles.calculatePriceWrapper}>
				<div className={styles.priceCalculator}>
					<p className={styles.planSelectionTitle}>Select a AiStock plan</p>
					<div className={styles.planTypesWrapper}>
						<button
							className={`${styles.planName} ${
								selectedPlan === 0 ? styles.planName__Active : ''
							}`}
							onClick={() => setSelectedPlan(0)}
						>
							Starter
						</button>
						<button
							className={`${styles.planName} ${
								selectedPlan === 1 ? styles.planName__Active : ''
							}`}
							onClick={() => setSelectedPlan(1)}
						>
							Professional
						</button>
						<button
							className={`${styles.planName} ${
								selectedPlan === 2 ? styles.planName__Active : ''
							}`}
							onClick={() => setSelectedPlan(2)}
						>
							Team
						</button>
					</div>

					<p className={styles.planSelectionTitle}>Orders Per Month</p>
					<div className={styles.ordersPerMonthDisplay}>
						<p>
							Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
							Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
						</p>
						<FormInput
							className={`
								${styles.formInput}
							`}
							label=""
							placeholder="Company*"
							id="company"
							type="text"
							name="company"
							onChange={() => null}
							value={orderNumber}
							autoComplete="off"
							disabled
							errorMessage="Please enter company name"
						/>
					</div>
					<Slider
						className="slider"
						min={-10}
						marks={ORDER_NUMBERS}
						step={null}
						onChange={(key: any) => {
							// @ts-ignore
							setOrderNumber(ORDER_NUMBERS[key]);
							return null;
						}}
						defaultValue={-10}
					/>
				</div>

				<div className={styles.buyPlan}>
					<BuyPlanPriceCard
						isMonthly={isMonthly}
						handleChange={handleChange}
						price={planPrice}
					/>

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

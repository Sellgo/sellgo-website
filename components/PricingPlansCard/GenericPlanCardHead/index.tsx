import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../CTAButton';
import PricePlanToggleButton from '../../PricePlanToggleButton';

/* Utils */

import { prettyPrintNumber } from '../../../utils/Format';
import { createFreeTrialLink } from '../../../utils/Referral';

interface Props {
	name: string;
	desc: string;
	monthlyPrice: number;
	annualPrice: number;
	isNew?: boolean;
	isSmall?: boolean;

	// plan details
	isMonthly: boolean;
	setIsMonthly: (isMonthly: boolean) => void;

	// used for pricing cards on comparision table
	withToggle?: boolean;
	className?: string;
	handleChange?: () => void;
}

const GenericPriceCardHead: React.FC<Props> = (props) => {
	const {
		name,
		isMonthly,
		monthlyPrice,
		setIsMonthly,
		annualPrice,
		desc,
		isNew,
		isSmall,
		withToggle,
		className,
		handleChange
	} = props;

	return (
		<div
			className={`
			${className}
			${styles.pricingHeadWrapper}
			${isNew && isSmall ? styles.pricingHeadWrapper__new : ''}
			${!isNew && isSmall ? styles.pricingHeadWrapper__notNew : ''}
			${isSmall && styles.pricingHeadWrapper__bordered}`}
		>
			{isNew && isSmall && (
				<div className={styles.newFeatureBanner}>
					<Image src="/star.svg" width={25} height={25} />
					Most popular
				</div>
			)}
			<div
				className={`
				${styles.pricingCardHead}
			`}
			>
				<div className={styles.pricingCardHead__Left}>
					<h2>{name}</h2>
					{!withToggle && <p>{desc}</p>}
				</div>
			</div>
			<PricePlanToggleButton
				isMonthly={isMonthly}
				handleChange={() => setIsMonthly(!isMonthly)}
				className={styles.paymentModeToggle}
			/>
			<div className={styles.startingAt}>
				<p>
					Starts At{' '}
					{!isMonthly && (
						<span className="strike-text">${Math.round(monthlyPrice)}</span>
					)}
				</p>

				{isMonthly ? (
					<span className={styles.betaPriceContainer}>
						<h3
							className={`${styles.actualPrice} ${
								withToggle && styles.toggledPrice
							}`}
						>
							${Math.round(monthlyPrice)}/ mo
						</h3>
					</span>
				) : (
					<span className={styles.betaPriceContainer}>
						<h3
							className={`${styles.actualPrice} ${
								withToggle && styles.toggledPrice
							}`}
						>
							${Math.round(annualPrice / 12)}/ mo
						</h3>
					</span>
				)}

				{!isMonthly ? (
					<p className={styles.billedAtPrice}>
						<span
							className={`${styles.originalPrice} ${
								withToggle ? styles.originalPrice__small : ''
							}`}
						>
							Originally{' '}
							<span className="strike-text">
								${prettyPrintNumber(monthlyPrice * 12)}
							</span>
						</span>
						<span
							className={`${styles.newPrice} ${
								withToggle ? styles.newPrice__small : ''
							}`}
						>
							Billed ${prettyPrintNumber(Math.round(annualPrice))}
							/yr
						</span>
						<span
							className={`${styles.savings} ${
								withToggle ? styles.savings__small : ''
							}`}
						>
							Save $
							{prettyPrintNumber(Math.round(monthlyPrice * 12 - annualPrice))}
						</span>
					</p>
				) : (
					<p>Billed Monthly</p>
				)}
			</div>

			{withToggle && handleChange && (
				<div className={styles.toggleWrapper}>
					<PricePlanToggleButton
						isMonthly={isMonthly}
						handleChange={handleChange}
					/>
				</div>
			)}

			<CTAButton
				type="primary"
				size="medium"
				variant={isNew ? 'purplePinkRainbow' : 'green'}
				navigateTo={createFreeTrialLink()}
				className={`${withToggle ? styles.tableCardCTA : styles.buyNowCTA}`}
				asExternal
				newTarget
			>
				Get started
			</CTAButton>
		</div>
	);
};

GenericPriceCardHead.defaultProps = {
	isNew: false,
	isSmall: false,
	withToggle: false,
	className: '',
	handleChange: () => null
};

export default GenericPriceCardHead;

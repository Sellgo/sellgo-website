import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../CTAButton';
import PricePlanToggleButton from '../../PricePlanToggleButton';

/* Utils */
import { createCheckoutLink } from '../../../utils/Referral';

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

	const checkoutLink = createCheckoutLink(
		isMonthly ? 'monthly' : 'yearly',
		name
	);

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
					Most Popular
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
					<h3>${Math.round(monthlyPrice)}/ Mo</h3>
				) : (
					<h3>${Math.round(annualPrice / 12)}/ Mo</h3>
				)}

				{!isMonthly ? (
					<p className={styles.billedAtPrice}>
						Billed At <span className="strike-text">${monthlyPrice * 12}</span>
						<span style={{ fontWeight: 'bold', textDecoration: 'none' }}>
							${Math.round(annualPrice)}/yr
						</span>
						Save ${Math.round(monthlyPrice * 12 - annualPrice)}
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
				navigateTo={checkoutLink}
				className={`${withToggle ? styles.tableCardCTA : styles.buyNowCTA}`}
				asExternal
				newTarget
			>
				Buy Now
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

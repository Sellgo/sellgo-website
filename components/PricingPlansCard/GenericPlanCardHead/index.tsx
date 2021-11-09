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
	showBetaPricing: boolean;

	// plan details
	isMonthly: boolean;
	setIsMonthly: (isMonthly: boolean) => void;

	// used for pricing cards on comparision table
	withToggle?: boolean;
	className?: string;
	handleChange?: () => void;
}

const GenericPriceCardHead: React.FC<Props> = (props) => {
	const [showBetaText, setShowBetaText] = React.useState(false);
	const [showAnimation, setShowAnimation] = React.useState(false);
	const {
		name,
		isMonthly,
		monthlyPrice,
		setIsMonthly,
		annualPrice,
		showBetaPricing,
		desc,
		isNew,
		isSmall,
		withToggle,
		className,
		handleChange
	} = props;

	/* Hide beta text if is starter plan */
	const isStarterPlan = name === 'Starter';
	const checkoutLink = createCheckoutLink(
		isMonthly ? 'monthly' : 'yearly',
		name
	);

	React.useEffect(() => {
		const hasShownBetaAnimation = sessionStorage.getItem(
			'hasShownBetaAnimation'
		);
		if (showBetaPricing && !hasShownBetaAnimation) {
			setTimeout(() => {
				setShowBetaText(true);
				setShowAnimation(true);
				sessionStorage.setItem('hasShownBetaAnimation', 'true');
			}, 500);
		} else if (showBetaPricing) {
			setShowBetaText(true);
		}
	}, [showBetaPricing]);

	let betaPricingClassName;
	let actualPricingClassName;
	if (showBetaText && showAnimation && !isStarterPlan) {
		actualPricingClassName = `${styles.actualPrice} ${styles.actualPrice__hidden} ${styles.animate__short}`;
		betaPricingClassName = `${styles.betaPrice} ${styles.animate__long}`;
	} else if (showBetaText && !showAnimation && !isStarterPlan) {
		actualPricingClassName = `${styles.actualPrice} ${styles.actualPrice__hidden}`;
		betaPricingClassName = `${styles.betaPrice}`;
	} else {
		actualPricingClassName = `${styles.actualPrice}`;
		betaPricingClassName = `${styles.betaPrice} ${styles.betaPrice__hidden}`;
	}

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
					<span className={styles.betaPriceContainer}>
						<h3 className={`${actualPricingClassName} ${withToggle && styles.toggledPrice}`}>
							${Math.round(monthlyPrice)}/ Mo
						</h3>

						<h3 className={betaPricingClassName}>
							${Math.round(monthlyPrice / 2)}/ Mo
						</h3>
					</span>
				) : (
					<span className={styles.betaPriceContainer}>
						<h3 className={`${actualPricingClassName} ${withToggle && styles.toggledPrice}`}>
							${Math.round(annualPrice / 12)}/ Mo
						</h3>

						<h3 className={betaPricingClassName}>
							${Math.round(annualPrice / 24)}/ Mo
						</h3>
					</span>
				)}

				{!isMonthly ? (
					<p className={styles.billedAtPrice}>
						Originally billed At <span className="strike-text">${monthlyPrice * 12}</span>
						<span style={{ fontWeight: 'bold', textDecoration: 'none' }}>
							${showBetaPricing ? Math.round(annualPrice / 2 ) : Math.round(annualPrice)}/yr
						</span>
						Save ${showBetaPricing ? 
							Math.round(monthlyPrice * 12 - (annualPrice / 2))
							: Math.round(monthlyPrice * 12 - (annualPrice))}
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
				{(showBetaText && !isStarterPlan) ? 'Get the 50% OFF Now' : 'Buy Now'}
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

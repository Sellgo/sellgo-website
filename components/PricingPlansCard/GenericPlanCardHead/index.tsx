import React from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../CTAButton';
import PricePlanToggleButton from '../../PricePlanToggleButton';
import DemoForm from '../../../containers/Demo/DemoForm';

/* Utils */

import { prettyPrintNumber } from '../../../utils/Format';
import { createFreeTrialLink } from '../../../utils/Referral';

interface Props {
	name: string;
	desc: string;
	monthlyPrice: number;
	annualPrice: number;
	lookups: number;
	isNew?: boolean;
	isFree?: boolean;
	isEnterprise?: boolean;
	isUsage?: boolean;
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
	console.log(props);

	const {
		name,
		isMonthly,
		monthlyPrice,
		setIsMonthly,
		annualPrice,
		desc,
		lookups,
		isNew,
		isFree,
		isUsage,
		isEnterprise,
		isSmall,
		withToggle,
		className,
		handleChange
	} = props;

	const [isDemoFormOpen, setIsDemoFormOpen] = React.useState(false);

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

			{isUsage ? (
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
			) : (
				<div className={styles.startingAt}>
					<p>
						<span>
							<br />
						</span>
					</p>

					{isFree && !isUsage ? (
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
								{''}
							</h3>
						</span>
					)}

					{isEnterprise && !isUsage ? (
						<span className={styles.betaPriceContainer}>
							<h3
								className={`${styles.actualPrice} ${
									withToggle && styles.toggledPrice
								}`}
							>
								Let's talk
							</h3>
						</span>
					) : (
						<span className={styles.betaPriceContainer}>
							<h3
								className={`${styles.actualPrice} ${
									withToggle && styles.toggledPrice
								}`}
							>
								{''}
								<br />
							</h3>
						</span>
					)}
				</div>
			)}

			{withToggle && handleChange && !isFree && !isEnterprise && (
				<div className={styles.toggleWrapper}>
					<PricePlanToggleButton
						isMonthly={isMonthly}
						handleChange={handleChange}
					/>
				</div>
			)}

			{isUsage && (
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
			)}

			{lookups ? <h2 className={styles.lookups}>{lookups} lookups</h2> : null}

			{isFree && (
				<CTAButton
					type="primary"
					size="medium"
					variant={isNew ? 'purplePinkRainbow' : 'green'}
					navigateTo={createFreeTrialLink()}
					className={`${withToggle ? styles.tableCardCTA : styles.buyNowCTA}`}
					asExternal
					newTarget
				>
					Get started free
				</CTAButton>
			)}

			{isEnterprise && (
				<div className={styles.talkToExpertContainer}>
					<h1>Unlimited contacts</h1>
					<p></p>

					<button
						className={`${withToggle ? styles.tableCardBtn : styles.buyNowBtn}`}
						onClick={() => setIsDemoFormOpen(true)}
					>
						Contact sales
					</button>
				</div>
			)}

			{!withToggle && (
				<h1 className={styles.skipTrial}>
					or <Link href={'/test'}>Skip trail, get 20% off</Link>
				</h1>
			)}

			<Modal
				isOpen={isDemoFormOpen}
				onRequestClose={() => setIsDemoFormOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<DemoForm onRequestClose={() => setIsDemoFormOpen(false)} />
			</Modal>
		</div>
	);
};

GenericPriceCardHead.defaultProps = {
	isNew: false,
	isFree: false,
	isEnterprise: false,
	isUsage: false,
	isSmall: false,
	withToggle: false,
	className: '',
	handleChange: () => null
};

export default GenericPriceCardHead;

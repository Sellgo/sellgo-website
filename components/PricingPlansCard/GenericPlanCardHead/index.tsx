import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../CTAButton';
import GemGenerator from '../../GemGenerator';

interface Props {
	name: string;
	monthlyPrice: number;
	annualPrice: number;
	salesEstimateCount: number;
	isMonthly: boolean;
}

const GenericPriceCardHead: React.FC<Props> = (props) => {
	const {
		name,
		salesEstimateCount,
		isMonthly,
		monthlyPrice,
		annualPrice
	} = props;

	return (
		<>
			<div className={styles.pricingCardHead}>
				<div className={styles.pricingCardHead__Left}>
					<div className={styles.planGems}>
						<GemGenerator name={name} />
					</div>
					<h2>{name}</h2>
				</div>

				<div className={styles.pricingCardHead__Right}>
					<p>Starts at {salesEstimateCount.toLocaleString()}</p>
					<a href="#!" target="_blank" rel="noreferrer noopener">
						<span>sales estimate</span>
						<Image src="/externalLinkIcon.svg" width={12} height={10} />
					</a>
				</div>
			</div>

			<div className={styles.startingAt}>
				<p>
					Starts At{' '}
					{!isMonthly && <span className="strike-text">${monthlyPrice}</span>}
				</p>

				{isMonthly ? (
					<h3>${monthlyPrice}/ Mo</h3>
				) : (
					<h3>${Math.round(annualPrice / 12)}/ Mo</h3>
				)}

				{!isMonthly ? (
					<p className={styles.billedAtPrice}>
						Billed At <span className="strike-text">${monthlyPrice * 12}</span>
						<span style={{ fontWeight: 'bold', textDecoration: 'none' }}>
							${annualPrice}/yr
						</span>
						Save ${monthlyPrice * 12 - annualPrice}
					</p>
				) : (
					<p>Billed Monthly</p>
				)}
			</div>
			<CTAButton
				type="primary"
				size="medium"
				navigateTo="/"
				className={styles.buyNowCTA}
			>
				Buy Now
			</CTAButton>
		</>
	);
};

export default GenericPriceCardHead;

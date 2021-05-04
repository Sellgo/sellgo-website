import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../CTAButton';

interface Props {
	name: string;
	productsDatabase: number;
	perDayPrice: number;
	yearlyPrice: number;
	annualPrice: number;
	salesEstimateCount: number;
}

const GenericPriceCardHead: React.FC<Props> = (props) => {
	const { name, salesEstimateCount } = props;

	return (
		<>
			<div className={styles.pricingCardHead}>
				<div className={styles.pricingCardHead__Left}>
					<div className={styles.planGems}>
						<Image
							src="/gemIcon.svg"
							alt="Gem Icon"
							width={10}
							height={10}
							priority
						/>
						<Image
							src="/greenGem.svg"
							alt="Gem Icon"
							width={10}
							height={10}
							priority
						/>
						<Image
							src="/blueGem.svg"
							alt="Gem Icon"
							width={10}
							height={10}
							priority
						/>
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
					Starts At <span className="strike-text">$60</span>
				</p>
				<h3>$42/ Mo</h3>
				<p className={styles.billedAtPrice}>
					Billed At <span className="strike-text">$50</span>
					<span style={{ fontWeight: 'bold', textDecoration: 'none' }}>
						$504/yr
					</span>
					Save $240
				</p>
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

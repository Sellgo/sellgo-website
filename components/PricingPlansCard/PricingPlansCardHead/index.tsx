import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	name: string;
	productsDatabase: number;
	perDayPrice: number;
	yearlyPrice: number;
	annualPrice: number;
}

const PricingPlansCardHead: React.FC<Props> = (props) => {
	const {
		name,
		productsDatabase,
		perDayPrice,
		yearlyPrice,
		annualPrice
	} = props;

	return (
		<>
			<div className={styles.pricingCardHead}>
				<div className={styles.pricingCardHead__Left}>
					<h2>
						<Image
							src="/gemIcon.svg"
							alt="Gem Icon"
							width={10}
							height={10}
							priority
						/>
						<span>{name}</span>
					</h2>
				</div>

				<div className={styles.pricingCardHead__Right}>
					<h3>{`$${perDayPrice}/Day`}</h3>
					<p>
						Billed at <span>{`$${annualPrice.toLocaleString()}`}</span>
						<span style={{ fontWeight: 'bold', textDecoration: 'none' }}>
							{`$${yearlyPrice.toLocaleString()}/yr`}
						</span>
					</p>
				</div>
			</div>

			<div className={styles.startingAt}>
				<p>Starts At {productsDatabase.toLocaleString()}</p>
				<a href="#!" target="_blank" rel="noopener noreferrer">
					<span> products database</span>

					<Image
						src="/externalLinkIcon.svg"
						alt="Move to the external link"
						width={12}
						height={10}
						priority
					/>
				</a>
			</div>
		</>
	);
};

export default PricingPlansCardHead;

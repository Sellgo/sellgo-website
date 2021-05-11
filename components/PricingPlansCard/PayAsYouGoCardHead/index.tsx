import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../CTAButton';

interface Props {
	name: string;
	productsDatabase: number;
	yearlyPrice: number;
	annualPrice: number;
	ctaLink: string;
}

const PayAsYouGoCardHead: React.FC<Props> = (props) => {
	const { name, ctaLink } = props;

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
			</div>
			{/* 
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
			</div> */}

			<div className={styles.pricePerDay}>
				<h3>$1/Day</h3>
			</div>

			<CTAButton
				type="primary"
				size="medium"
				navigateTo={ctaLink}
				className={styles.buyNameCTA}
			>
				Buy Now
			</CTAButton>
		</>
	);
};

export default PayAsYouGoCardHead;

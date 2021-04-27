import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const PricingPlansCardHead: React.FC<Props> = () => {
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
						<span>Starter</span>
					</h2>
				</div>

				<div className={styles.pricingCardHead__Right}>
					<p>
						Starts at <span>$70</span>
					</p>
					<h3>$49/Mo</h3>
					<p>
						Billed at <span>$500</span>{' '}
						<span style={{ fontWeight: 'bold', textDecoration: 'none' }}>
							$500/year
						</span>
					</p>
				</div>
			</div>

			<div className={styles.startingAt}>
				<p>Starts At 1,000</p>
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

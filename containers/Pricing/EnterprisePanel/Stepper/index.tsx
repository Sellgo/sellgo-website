import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import SellerCard from '../SellerCard';

interface Props {
	steps: any;
}

const Stepper: React.FC<Props> = (props) => {
	const { steps } = props;

	return (
		<div>
			<div className={styles.stepperWrapper}>
				{steps.map((product: any, index: number) => {
					return (
						<a key={index} href={`#${product.id}`} className={styles.step}>
							<Image src={product.icon} width="40px" height="40px" />
							<h3 className={styles.stepTitle}>
								{product.sellerCountryOrigin}@{product.country}
							</h3>
							<h3 className={styles.stepUrl}>{product.url}</h3>
						</a>
					);
				})}
			</div>

			<div>
				{steps.map((step: any, index: number) => {
					return (
						<SellerCard
							key={index}
							sellerData={step}
							sellers={steps}
							reversed={(index + 1) % 2 === 0}
							isStepper
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Stepper;

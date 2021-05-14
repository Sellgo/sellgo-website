import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	className?: string;
	navigateTo: string;
	navigateLabel: string;
}

const PricingInfoAlert: React.FC<Props> = (props) => {
	const { className, navigateLabel, navigateTo } = props;

	return (
		<div className={`${styles.pricingInfoAlert} ${className}`}>
			<h3>
				Want to try our advanced Amazon tools? Review our FBA tools and pricing
				packages.
			</h3>
			<p>
				Our premium tools empower you to track and research more products to
				optimize your Amazon business.
				<br />
			</p>
			<a href={navigateTo} target="_blank" rel="noopener noreferrer">
				{navigateLabel}{' '}
				<span>
					<Image
						src="/externalLinkIcon.svg"
						width={12}
						height={10}
						alt="Navigate to learn move details"
					/>
				</span>
			</a>
		</div>
	);
};

export default PricingInfoAlert;

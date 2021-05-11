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
			<h3>Start selling on Amazon today with Sellgo&apos;s free tools</h3>
			<p>
				Want to try our advanced Amazon tools? Review our FBA tools and pricing
				packages.
				<br />
				Our premium tools empower you to track and research more products to
				optimize your Amazon business.
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

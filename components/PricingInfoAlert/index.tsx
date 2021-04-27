import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	className?: string;
}

const PricingInfoAlert: React.FC<Props> = (props) => {
	const { className } = props;

	return (
		<div className={`${styles.pricingInfoAlert} ${className}`}>
			<h3>Lorem ipsum dolor sit amet</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<a href="#!">
				Learn More{' '}
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

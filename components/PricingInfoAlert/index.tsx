import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	className?: string;
	head: string;
	desc: string;
	navigateLabel: string;
	navigateTo: string;
	background: string;
}

const PricingInfoAlert: React.FC<Props> = (props) => {
	const {
		className,
		navigateLabel,
		navigateTo,
		head,
		desc,
		background
	} = props;

	return (
		<div
			className={`${styles.pricingInfoAlert} ${className}`}
			style={{ background }}
		>
			<h3>{head}</h3>
			<div>
				{desc}
				<a href={navigateTo} target="_blank" rel="noopener noreferrer">
					{navigateLabel} {''}
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
		</div>
	);
};

export default PricingInfoAlert;

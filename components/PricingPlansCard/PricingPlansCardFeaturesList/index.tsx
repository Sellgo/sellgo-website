import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const PricingPlansCardFeaturesList: React.FC<Props> = () => {
	return (
		<div className={styles.featuresList}>
			<p>Feature</p>
			<ul>
				<li>
					<Image
						src="/checkMark.svg"
						alt="The feature is included"
						width={10}
						height={7}
						priority
					/>
					<span>Starter Plus</span>
				</li>

				<li>
					<Image
						src="/checkMark.svg"
						alt="The feature is included"
						width={10}
						height={7}
						priority
					/>
					<span>Starter Plus</span>
				</li>

				<li>
					<Image
						src="/checkMark.svg"
						alt="The feature is included"
						width={10}
						height={7}
						priority
					/>
					<span>Starter Plus</span>
				</li>

				<li>
					<Image
						src="/checkMark.svg"
						alt="The feature is included"
						width={10}
						height={7}
						priority
					/>
					<span>Starter Plus</span>
				</li>
			</ul>
		</div>
	);
};

export default PricingPlansCardFeaturesList;

import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	featuresIncluded: any;
}

const PricingPlansCardFeaturesList: React.FC<Props> = (props) => {
	const { title, featuresIncluded } = props;

	return (
		<div className={styles.featuresList}>
			<p>{title}</p>
			<ul>
				{featuresIncluded.map((featureName: string) => {
					return (
						<li key={uuid()}>
							<Image
								src="/checkMark.svg"
								alt="The feature is included"
								width={10}
								height={7}
								priority
							/>
							<span>{featureName}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PricingPlansCardFeaturesList;

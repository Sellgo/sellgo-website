import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Check from '../../Icons/Check';

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
							<Check width={20} height={10} fill="#5DC560" />
							<span>{featureName}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PricingPlansCardFeaturesList;

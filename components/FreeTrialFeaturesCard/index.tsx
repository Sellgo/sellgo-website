import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	featuresList: string[];
}

const FreeTrialFeaturesCard: React.FC<Props> = (props) => {
	const { title, featuresList } = props;

	return (
		<div className={styles.featuresCard}>
			<h3>{title}</h3>
			<ul className={styles.featuresList}>
				{featuresList.map((benefits: string) => {
					return (
						<li key={uuid()}>
							<Image
								src="/checkMark.svg"
								alt="The benefits is included"
								width={10}
								height={8}
							/>
							<span>{benefits}</span>
						</li>
					);
				})}
			</ul>

			<button className={styles.seeAllFeatures}>See all features</button>
		</div>
	);
};

export default FreeTrialFeaturesCard;

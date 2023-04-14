import React from 'react';
import { v4 as uuid } from 'uuid';
import Image from 'next/image';

import CTAButton from '../CTAButton';
import RainbowText from '../RainbowText';
import { createFreeTrialLink } from '../../utils/Referral';

/* Styling */
import styles from './index.module.scss';

interface Props {
	benefitSummary: string;
	popularFeaturesList: any;
	details: string;
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
}

const BenefitsPanel: React.FC<Props> = (props) => {
	const {
		benefitSummary,
		popularFeaturesList,
		details,
		imageUrl = '',
		imageWidth = 600,
		imageHeight = 360
	} = props;

	return (
		<article className={styles.benefitsPanel}>
			{imageUrl && (
				<div className={styles.benefitsImage}>
					<Image
						src={imageUrl}
						alt="customer benefits"
						width={imageWidth}
						height={imageHeight}
						objectFit="contain"
					/>
				</div>
			)}
			<div className={styles.benefitsPanel__Row}>
				<div className={styles.benefitsPanel__Left}>
					<p className={styles.benefitsSummary}>{benefitSummary}</p>
					<div className={styles.details}>{details}</div>

					<CTAButton
						variant="white"
						type="secondary"
						size="small"
						navigateTo={createFreeTrialLink()}
						className={styles.extensionCTA}
						newTarget
						asExternal
					>
						<RainbowText type="orange_purple_gradient">
							{' '}
							Try AiStock free&nbsp;
						</RainbowText>
						<Image src="/blueLongArrowRight.svg" width={25} height={10} />
					</CTAButton>
				</div>
				<div className={styles.benefitsPanel__Right}>
					<div className={styles.benefitsDescription}>
						<div className={styles.featureListWrapper}>
							{popularFeaturesList &&
								popularFeaturesList.map((feature: any) => {
									return (
										<div key={uuid()} className={styles.featureList}>
											<h4>{feature.title}</h4>
											<p>{feature.details}</p>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default BenefitsPanel;

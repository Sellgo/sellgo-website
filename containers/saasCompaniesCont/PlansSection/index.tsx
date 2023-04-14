import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import PlansCard from '../../../components/PlansCard';
// import AppConfig from '../../../config';

/* Data */
import { plansData } from './data';
import { createFreeTrialLink } from '../../../utils/Referral';

interface Props {}

const PlansSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.plansSection}`}>
			<h2 className={styles.plansSection__Title}>
				Inventory planning made easy.
			</h2>
			<p className={styles.plansSection__Info}>
				No matter how big you get, AiStock puts smart inventory processes at
				your fingertips.
			</p>

			<div className={styles.plansWrapper}>
				{plansData.map((planDetails: any) => {
					return <PlansCard key={uuid()} {...planDetails} />;
				})}
			</div>

			<div className={styles.ctaWrapper}>
				<CTAButton
					type="primary"
					size="medium"
					variant="rainbow"
					navigateTo={createFreeTrialLink()}
					newTarget
					asExternal
					className={styles.plansCTA}
				>
					Start free trial
				</CTAButton>
				<CTAButton
					type="secondary"
					size="small"
					navigateTo="/"
					className={styles.plansCTA}
				>
					Book your demo
				</CTAButton>
			</div>

			<p className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>

			<h4 className={styles.achievementsHeading}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			</h4>

			<div className={styles.achievementsWrapper}>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
			</div>
		</section>
	);
};

export default PlansSection;

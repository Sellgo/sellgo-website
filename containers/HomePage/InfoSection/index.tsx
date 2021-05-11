import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import InfoCard from '../../../components/InfoCard';

/* Data */
import { featureSectionList } from './data';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={styles.infoSectionWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<h2 className="secondary-heading">
					The Amazon Opportunity Finder to Make Your Business Thrive
				</h2>

				<p className={styles.infoSectionDescription}>
					Sellgo&apos;s tools provide any Amazon seller with endless
					opportunities to grow and expand your wholesale or private label
					business. <br />
					Whether you need help with product scouting or product research, our
					powerful FBA tools can help you exceed <br />
					limitations and accelerate your Amazon business.
				</p>

				<div className={styles.infoSectionCTAWrapper}>
					<CTAButton
						type="primary"
						size="small"
						navigateTo="/"
						className={styles.infoSectionCTA}
					>
						Try Free Wholesale Tools
					</CTAButton>
					<CTAButton
						type="secondary"
						size="small"
						navigateTo="/"
						className={styles.infoSectionCTA}
					>
						Demo Premium Wholesale Tools
					</CTAButton>
				</div>

				<div className={styles.infoSectionCardsWrapper}>
					{featureSectionList.map((feature: any) => {
						return <InfoCard key={feature.title} {...feature} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

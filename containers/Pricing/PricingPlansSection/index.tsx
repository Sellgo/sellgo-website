import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PricingInfoAlert from '../../../components/PricingInfoAlert';
import PricingPlansCard from '../../../components/PricingPlansCard';

interface Props {}

const PricingPlansSection: React.FC<Props> = () => {
	return (
		<section className={styles.pricingPlansSectionWrapper}>
			<div className={`big-page-container ${styles.pricingPlansSection}`}>
				<div className={styles.planName}>
					<span></span>
					<h2>Wholesale Go</h2>
				</div>

				<div className={styles.planShortSummary}>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<a href="#!" className="anchor">
						Calculate your price{' '}
						<Image
							src="/downArrow.svg"
							alt="Select the arrow to move to calculate your price section"
							width={10}
							height={10}
							priority
						/>
					</a>
				</div>

				<PricingInfoAlert />
			</div>

			<div className={styles.pricingPlansCardWrapper}>
				<PricingPlansCard />
				<PricingPlansCard />
				<PricingPlansCard />
			</div>
		</section>
	);
};

export default PricingPlansSection;

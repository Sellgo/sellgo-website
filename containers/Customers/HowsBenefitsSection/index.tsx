import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import HowsBenefits from '../HowsBenefitsCard';
import BenefitsAnimated from '../BenefitsAnimated';

/* Data */
import { newBenefitsData } from './data';

interface Props {}

const HowsBenefitsSection: React.FC<Props> = () => {
	return (
		<section className={styles.newBenefitsSection} id="showCtaNavBar">
			<BenefitsAnimated />
			<div className={styles.firstCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<HowsBenefits
						key={uuid()}
						{...newBenefitsData[0]}
						reversed={false}
						buttonText={'Customer 1'}
						navigateTo={'/customers/customer-1'}
					/>
				</div>
			</div>
			<div className={styles.secondCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<HowsBenefits
						key={uuid()}
						{...newBenefitsData[1]}
						reversed
						buttonText={'Customer 2'}
						navigateTo={'/customers/customer-2'}
					/>
				</div>
			</div>
			<div className={styles.thirdCardWrapper}>
				<div className={`page-container ${styles.benefitsWrapper}`}>
					<HowsBenefits
						key={uuid()}
						{...newBenefitsData[2]}
						reversed={false}
						buttonText={'Customer 3'}
						navigateTo={'/customers/customer-3'}
					/>
				</div>
			</div>
		</section>
	);
};

export default HowsBenefitsSection;

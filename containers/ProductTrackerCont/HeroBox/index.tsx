import React from 'react';

import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import ProductAccordion from '../../../components/ProductAccordion';

/* Data */
import { accordionData } from './data';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.heroBox}`}>
			<div className={styles.heroBox__Image}>
				<Image src="/ptrHerobox_600x360.png" width={600} height={360} alt="" />
			</div>
			<div className={styles.heroBox__Details}>
				<div className={styles.subHeadingWrapper}>
					<span>
						<Image
							src="/ptrIcon.svg"
							width={30}
							height={30}
							alt="Product Tracker"
						/>
					</span>{' '}
					<h2 className={styles.subHeading}>Product Tracker</h2>
				</div>
				<h1 className={styles.heading}>
					Fast Track Your Amazon Product Research
				</h1>
				<CTAButton
					navigateTo="/pricing?type=monthly-and-annual-plans"
					type="primary"
					size="medium"
					className={styles.heroBoxCTA}
				>
					Get Started
				</CTAButton>

				<ProductAccordion data={accordionData} />
			</div>
		</section>
	);
};

export default HeroBox;

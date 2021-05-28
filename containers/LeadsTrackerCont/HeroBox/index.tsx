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
			<Image
				src="/profitfinder_herobox_600x360.png"
				width={600}
				height={360}
				alt="Product Finder Product Cover Image"
			/>
			<div className={styles.heroBox__Details}>
				<div className={styles.subHeadingWrapper}>
					<span>
						<Image
							src="/ltrIcon.svg"
							width={30}
							height={30}
							alt="Leads Tracker"
						/>
					</span>{' '}
					<h2 className={styles.subHeading}>Leads Tracker</h2>
				</div>
				<h1 className={styles.heading}>Lorem Ipsum</h1>
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

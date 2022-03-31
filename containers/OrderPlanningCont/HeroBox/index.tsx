import React from 'react';

import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import ProductAccordion from '../../../components/ProductAccordion';
import ExpandedNavbarIcons from '../../../components/Icons/ExpandedNavbarIcons';

/* Data */
import { accordionData } from './data';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.heroBox}`}>
			<Image
				src="/order_planning_1.png"
				width={600}
				height={360}
				alt="Order Planning Cover Image"
			/>

			<div className={styles.heroBox__Details}>
				<div className={styles.subHeadingWrapper}>
					<ExpandedNavbarIcons
						width={30}
						height={30}
						fill="#ef7818"
						name="orderPlanning"
						isRainbow
					/>
					<h2 className={styles.subHeading}>Order Planning</h2>
				</div>
				<h1 className={styles.heading}>
					The most innovative inventory planner
				</h1>
				<CTAButton
					navigateTo="/pricing?type=monthly-and-annual-plans"
					type="primary"
					size="productPageBig"
					variant="rainbow"
					className={styles.heroBoxCTA}
				>
					Get started
				</CTAButton>

				<ProductAccordion data={accordionData} />
			</div>
		</section>
	);
};

export default HeroBox;

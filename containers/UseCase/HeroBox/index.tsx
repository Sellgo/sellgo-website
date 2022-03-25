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
			<h2 className="secondary-heading">Lorem Ipsum</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore
			</p>
			<div className={styles.buttonsRow}>
				<CTAButton
					navigateTo="/pricing?type=monthly-and-annual-plans"
					type="primary"
					size="medium"
					variant="rainbow"
					className={styles.heroBoxCTA}
				>
					Get Started
				</CTAButton>
				<CTAButton
					navigateTo="/pricing?type=monthly-and-annual-plans"
					type="secondary"
					size="medium"
					variant="rainbow"
					className={styles.heroBoxCTA}
				>
					Request a demo
				</CTAButton>
			</div>
		</section>
	);
};

export default HeroBox;

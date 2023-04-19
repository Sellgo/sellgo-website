import React from 'react';

import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import ProductAccordion from '../../../components/ProductAccordion';
import ExpandedNavbarIcons from '../../../components/Icons/ExpandedNavbarIcons';
import { createFreeTrialLink } from '../../../utils/Referral';

/* Data */
import { accordionData } from './data';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.heroBox}`}>
			<Image
				src="/extension_1.png"
				width={600}
				height={360}
				alt="Product Finder Product Cover Image"
			/>

			<div className={styles.heroBox__Details}>
				<div className={styles.subHeadingWrapper}>
					<ExpandedNavbarIcons
						width={30}
						height={30}
						fill="#ef7818"
						name="extension"
						isRainbow
					/>
					<h2 className={styles.subHeading}>Chrome Extension</h2>
				</div>
				<h1 className={styles.heading}>Quick product validation on browser</h1>
				<CTAButton
					navigateTo={createFreeTrialLink()}
					type="primary"
					size="productPageBig"
					variant="rainbow"
					className={styles.heroBoxCTA}
				>
					Sign up
				</CTAButton>
				<p>
					Try it free. No credit card required.
					<br />
					Instant set-up.
				</p>

				<ProductAccordion data={accordionData} />
			</div>
		</section>
	);
};

export default HeroBox;

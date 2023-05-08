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
import { checkPricingLink } from '../../../utils/Referral';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.heroBox}`}>
			<Image
				src="/seller_map_1.png"
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
						name="sellerMap"
						isRainbow
					/>
					<h2 className={styles.subHeading}>Seller Map</h2>
				</div>
				<h1 className={styles.heading}>Interactive Amazon Seller Map</h1>
				<CTAButton
					navigateTo={checkPricingLink()}
					type="primary"
					size="productPageBig"
					variant="rainbow"
					// asExternal
					newTarget
					className={styles.heroBoxCTA}
				>
					Check pricing
				</CTAButton>
				<p>
					Sellgo is the leads platform of choice for top B2B agencies worldwide.
				</p>

				<ProductAccordion data={accordionData} />
			</div>
		</section>
	);
};

export default HeroBox;

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
				<Image
					src="/searchmanagement_herobox.png"
					width={450}
					height={270}
					alt=""
				/>
			</div>
			<div className={styles.heroBox__Details}>
				<div className={styles.subHeadingWrapper}>
					<span></span> <h2 className={styles.subHeading}>Lorem Ipsum</h2>
				</div>
				<h1 className={styles.heading}>Lorem Ipsum</h1>
				<CTAButton
					navigateTo="https://app.sellgo.com/signup/?type=free"
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

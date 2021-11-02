import React from 'react';
import RainbowText from '../../../components/RainbowText';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={styles.infoSectionWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<p className={styles.orangeHeading}> What is Sellgo? </p>
				<h2 className="secondary-heading">
					All-In-One Amazon tool to generate
					<br />
					<span className={styles.moreRevenue}>
						<RainbowText type="purple_orange_gradient">
							more revenue
						</RainbowText>
					</span>
				</h2>

				<p className={styles.infoSectionDescription}>
					<br />
					We consulted with the world&apos;s best Amazon Private Label and
					Wholesale
					<br />
					entrepreneurs to define how to effectively find profitable products,
					<br />
					dominate your ranking launch with the best keywords,
					<br />
					automate PPC re-campaign with Zapier,
					<br />
					prevent stockouts, and more ...
				</p>
			</div>
		</section>
	);
};

export default InfoSection;

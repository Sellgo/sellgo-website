import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ShimmeredImage from '../../../components/ShimmeredImage';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={styles.infoSectionWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<div className={styles.infoSection__Text}>
					<h2>What is the Sellgo Chrome Extension?</h2>
					<p>
						Sellgo&apos;s Chrome Extension is an all-in-one Amazon seller
						toolbox. Access Sellgo&apos;s reliable FBA tools and real-time data
						analytics to help you find replenishable products with the best
						profits and return on investments directly within your browser.
					</p>
					<p></p>
				</div>
				<div className={styles.infoSection__Image}>
					<ShimmeredImage src="/pfSection_600x360.png" width={600} height={360} alt="" />
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

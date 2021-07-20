import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import InfoCard from '../../../components/InfoCard';
import GlobalSellersStatCard from '../../../components/GlobalSellersStatCard'

/* Data */
import { featureSectionList } from './data';

interface Props {}

const GlobalSellersBannerSection: React.FC<Props> = () => {
	return (
		<section className={styles.globalSellersBannerWrapper}>
			<div className={styles.globalSellersBannerBG}/>
			<div className={`page-container ${styles.globalSellersBanner}`}>
				<h2 className="secondary-heading">Sellgo helps Amazon sellers all over the world</h2>
				<div className={styles.statsRow}>
					<GlobalSellersStatCard
						statsCount="100M"
						statsLabel="Amazon Products"
					/>
					<GlobalSellersStatCard
						statsCount="1M"
						statsLabel="Amazon Sellers"
					/>
				</div>	
			</div>
		</section>
	);
};

export default GlobalSellersBannerSection;

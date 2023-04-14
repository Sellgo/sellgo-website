import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const BannerCTASection: React.FC<Props> = () => {
	return (
		<section className={`${styles.benefitsImageWrapper} big-page-container`}>
			<Image
				src={'/seller_map_1.png'}
				alt="Seller Finder"
				width={600}
				height={360}
				objectFit="contain"
			/>
		</section>
	);
};

export default BannerCTASection;

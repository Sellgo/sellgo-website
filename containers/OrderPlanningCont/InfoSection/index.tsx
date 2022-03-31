import React from 'react';

import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={styles.infoSectionWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<div className={styles.infoSection__Text}>
					<h2>Never stockout and rarely overstock</h2>
					<p>
						AiStock easily creates intelligent and precise inventory order plan
						for you based on sales history and other factors that can
						potentially impact inventory. From then, you can adjust or add the
						requirements you want to include in the order plan. AiStock is
						designed to help you manage your stock with a high level of
						accuracy, so that your products are never out of stock again.
					</p>
					<p></p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image
						src="/order_planning_2.png"
						width={600}
						height={360}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

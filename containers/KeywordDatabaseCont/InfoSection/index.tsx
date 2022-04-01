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
					<h2>Search smarter, faster, and easier</h2>
					<p>
						Keyword Database gives you access to millions of eligible, relevant
						keywords to help you target the right customers. When you use the
						refined search, you&apos;ll see how your product listings are
						impacted by adjusting keyword settings.
						<br />
						<br />
						Using advanced filters, you can sort your keyword list by word
						count, brand, price range, relevance, and competition—and easily
						narrow your focus for better survey results.
					</p>
					<p></p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image
						src="/keyword_database_2.png"
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

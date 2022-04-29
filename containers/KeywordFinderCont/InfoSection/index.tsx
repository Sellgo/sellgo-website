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
					<h2>Access your competitor keywords in seconds</h2>
					<p>
						Why invent new and risky keywords when you can start from something
						you know will work? Most of the new successful Amazon sellers were
						all born from studying the keyword strategy from others who preceded
						them but have become much more.
						<br />
						<br />
						Sellgo Keyword Finder helps you to discover the keywords with the
						most sales volume by using your competitors as a reference point.
						You can now reverse engineer your competitors&apos; ranking strategy
						so you will know how you can use the same wordings and keywords for
						your own products.
					</p>
					<p></p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image src="/keyword_finder_2.png" width={600} height={360} alt="" />
				</div>
			</div>
		</section>
	);
};

export default InfoSection;

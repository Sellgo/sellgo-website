import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const ShowCaseHeroBox: React.FC<Props> = () => {
	return (
		<div className={styles.heroBoxWrapper}>
			<div className={`page-container ${styles.heroBoxContent}`}>
				<h1>Amazon Seller Tips & News</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit
				</p>
				<button
					className={`ctabutton ctabutton--primary ctabutton--medium ${styles.subscribeCTA}`}
				>
					Subscribe
				</button>
			</div>
		</div>
	);
};

export default ShowCaseHeroBox;

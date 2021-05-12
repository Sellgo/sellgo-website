import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<div className={styles.heroboxWrapper}>
			<div className={`page-container ${styles.herobox}`}>
				<h1>Find Winning Wholesale Products!</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea
				</p>
			</div>
		</div>
	);
};

export default HeroBox;

import React from 'react';

/* Styles */
import styles from './index.module.scss';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={styles.heroboxWrapper}>
			<div className={`${styles.herobox}`}>
				<div className={styles.herobox__Left}>
					<div className={`page-container ${styles.contentWrapper}`}>
						<h1>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum</h1>

						<p>
							Written by <span>First Last</span>
						</p>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea
						</p>

						<div className={styles.rect} />
					</div>
				</div>

				<div className={styles.herobox__Right}></div>
			</div>
		</section>
	);
};

export default HeroBox;

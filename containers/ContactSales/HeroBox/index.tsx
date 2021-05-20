import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const Herobox: React.FC<Props> = () => {
	return (
		<div className={styles.heroBoxWrapper}>
			<div className={`page-container ${styles.heroBox}`}></div>
		</div>
	);
};

export default Herobox;

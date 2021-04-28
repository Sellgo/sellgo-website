import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const AllFeaturesTable: React.FC<Props> = () => {
	return (
		<div className={styles.allFeaturesTable}>
			<div className={styles.tableHeader}>
				<span></span>
				<h1>Wholesale Go</h1>
			</div>
		</div>
	);
};

export default AllFeaturesTable;

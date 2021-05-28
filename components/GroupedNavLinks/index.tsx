import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* COmponents */
import ProductsIconMapper from '../Icons/Products';

/* Types */
import { Products } from '../../interfaces/Products';

interface Props {
	head: string;
	desc: string;
	navigateTo: string;
	className?: string;
	iconName: Products;
}

const GroupedNavLink: React.FC<Props> = (props) => {
	const { head, desc, navigateTo, className, iconName } = props;

	return (
		<div className={`${styles.groupedNavLinks} ${className}`}>
			<a href={navigateTo}>
				<ProductsIconMapper
					name={iconName}
					width={20}
					height={20}
					fill="#ef7818"
				/>
				<div className={styles.linkDetails}>
					<h2>{head}</h2>
					<p>{desc}</p>
				</div>
			</a>
		</div>
	);
};

export default GroupedNavLink;

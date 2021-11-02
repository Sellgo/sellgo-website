import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* COmponents */
import ExpandedNavbarIcons from '../Icons/ExpandedNavbarIcons';

/* Types */
import { Products } from '../../interfaces/Navbar';

interface Props {
	head: string;
	desc: string;
	navigateTo: string;
	className?: string;
	iconName: Products;
}

const GroupedNavLink: React.FC<Props> = (props) => {
	const { head, desc, navigateTo, className, iconName } = props;
	const [isHoveredOver, setHoveredOver] = React.useState<boolean>(false);

	return (
		<div
			className={`${styles.groupedNavLinks} ${className}`}
			onMouseEnter={() => setHoveredOver(true)}
			onMouseLeave={() => setHoveredOver(false)}
		>
			<a href={navigateTo}>
				<ExpandedNavbarIcons
					name={iconName}
					width={25}
					height={25}
					fill="#323232"
					isRainbow={isHoveredOver}
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

import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	head: string;
	desc: string;
	navigateTo: string;
	className?: string;
}

const GroupedNavLink: React.FC<Props> = (props) => {
	const { head, desc, navigateTo, className } = props;

	return (
		<div className={`${styles.groupedNavLinks} ${className}`}>
			<a href={navigateTo}>
				<div className={styles.icon} />
				<div className={styles.linkDetails}>
					<h2>{head}</h2>
					<p>{desc}</p>
				</div>
			</a>
		</div>
	);
};

export default GroupedNavLink;

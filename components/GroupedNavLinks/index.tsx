import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	head: string;
	desc: string;
	navigateTo: string;
	navigateLabel: string;
}

const GroupedNavLink: React.FC<Props> = (props) => {
	const { head, desc, navigateTo, navigateLabel } = props;

	return (
		<div className={styles.groupedNavLinks}>
			<div className={styles.icon} />
			<div className={styles.linkDetails}>
				<h2>{head}</h2>
				<p>{desc}</p>
				<a className="anchor" href={navigateTo}>
					{navigateLabel} &#x2192;
				</a>
			</div>
		</div>
	);
};

export default GroupedNavLink;

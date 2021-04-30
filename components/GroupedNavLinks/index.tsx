import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const GroupedNavLink: React.FC<Props> = () => {
	return (
		<div className={styles.groupedNavLinks}>
			<div className={styles.icon} />
			<div className={styles.linkDetails}>
				<h2>Lorem Ipsum</h2>
				<p>Lorem Ipsum</p>
				<Link href="/" passHref>
					<a className="anchor">Lorem Ipsum &#x2192;</a>
				</Link>
			</div>
		</div>
	);
};

export default GroupedNavLink;

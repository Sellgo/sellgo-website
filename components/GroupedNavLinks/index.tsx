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
				<h2>Wholesale Go</h2>
				<p>Wholesale Sourcing Software.</p>
				<Link href="/" passHref>
					<a className="anchor">$1 and Premium Plan &#x2192;</a>
				</Link>
			</div>
		</div>
	);
};

export default GroupedNavLink;

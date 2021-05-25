import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	head: string;
	desc: string;
	navigateTo: string;
	className?: string;
	iconLink: string;
}

const GroupedNavLink: React.FC<Props> = (props) => {
	const { head, desc, navigateTo, className, iconLink } = props;

	return (
		<div className={`${styles.groupedNavLinks} ${className}`}>
			<a href={navigateTo}>
				<Image src={iconLink} width={40} height={40} alt={head} />
				<div className={styles.linkDetails}>
					<h2>{head}</h2>
					<p>{desc}</p>
				</div>
			</a>
		</div>
	);
};

export default GroupedNavLink;

import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const Navbar: React.FC<Props> = () => {
	return (
		<header className={`${styles.header}`}>
			<nav className={`navigation-container`}>
				<p>This is will be navbar</p>
			</nav>
		</header>
	);
};

export default Navbar;

import React from 'react';
import { useRouter } from 'next/router';

/* Styling */
import styles from './index.module.scss';

/* COmponents */
import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';

interface Props {}

const Navbar: React.FC<Props> = () => {
	const router = useRouter();

	return router.pathname !== '/career/[id]' &&
		router.pathname !== '/select-plan' ? (
		<header className={`${styles.header}`}>
			<nav className={`navigation-container ${styles.navbar}`}>
				<NavbarTop />
				<NavbarBottom />
			</nav>
		</header>
	) : (
		<></>
	);
};

export default Navbar;

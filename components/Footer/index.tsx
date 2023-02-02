import React from 'react';
import { useRouter } from 'next/router';
// import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

interface Props {}

const Footer: React.FC<Props> = () => {
	const router = useRouter();

	return (
		router.pathname !== '/career/[id]' && (
			<footer className={styles.footer}>
				<div className="page-container">
					<TopFooter />
					<BottomFooter />
				</div>
			</footer>
		)
	);
};

export default Footer;

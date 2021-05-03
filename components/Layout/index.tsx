import React from 'react';
import { useRouter } from 'next/router';

/* Components */
import Navbar from '../Navbar';
import Footer from '../Footer';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<>
			{!['/privacy-policy'].includes(currentPath) && <Navbar />}
			{children}
			<Footer />
		</>
	);
};

export default Layout;

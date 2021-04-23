import React from 'react';

/* Components */
import Navbar from '../Navbar';
import Footer from '../Footer';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

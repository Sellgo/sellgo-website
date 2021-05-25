import React from 'react';

/* Styling */
// import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Contact/HeroBox';

interface Props {}

const ContactUsPage: React.FC<Props> = () => {
	return (
		<main>
			<HeroBox />
		</main>
	);
};

export default ContactUsPage;

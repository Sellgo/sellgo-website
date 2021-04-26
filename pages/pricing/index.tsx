import React from 'react';

/* Styling */
// import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Pricing/HeroBox';

interface Props {}

const PricingPage: React.FC<Props> = () => {
	return (
		<>
			<HeroBox />
		</>
	);
};

export default PricingPage;

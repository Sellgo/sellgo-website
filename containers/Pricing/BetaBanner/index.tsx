import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	showBetaPricing: boolean;
}

const BetaBanner = (props: Props) => {
	const { showBetaPricing } = props;

	return (
		<>
			<section className={showBetaPricing 
				? styles.betaBannerSection : `${styles.betaBannerSection} ${styles.betaBannerSection__hidden}`}>
				Enjoy 50% off 1st month or 1st year for the 1,000 Beta Users. Professional/ Team Plan.
			</section>
		</>
	);
};

export default BetaBanner;

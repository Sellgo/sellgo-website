import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		// <div className={styles.firstCTASectionWrapper}>
			<div className={`${styles.firstCTASectionBox}`}>
				<h1>Become apart of the Sellgo Community</h1>
				<p>
					Join the Sellgo family and one of the best programs
					 in our industry. 
				</p>

				<p> After approval, promote our innovative,
					  powerful tools with your audience and make money! </p>

				<CTAButton
						type="secondary"
						size="medium"
						navigateTo="/"
						className={`${styles.ctaButton}`}
					>
						Join the Community
				</CTAButton>
			</div>
		// </div>
	);
};

export default HeroBox;

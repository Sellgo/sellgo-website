import React from 'react';
import CTAButton from '../../../components/CTAButton';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.heroBox}`}>
			<div className={styles.heroBox__Image}></div>
			<div className={styles.heroBox__Details}>
				<div className={styles.subHeadingWrapper}>
					<span></span> <h2 className={styles.subHeading}>Lorem Ipsum</h2>
				</div>
				<h1 className={styles.heading}>Lorem Ipsum</h1>
				<CTAButton navigateTo="/" type="primary" size="medium" className={styles.heroBoxCTA}>
					Get Started
				</CTAButton>
			</div>
		</section>
	);
};

export default HeroBox;

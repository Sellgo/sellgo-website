import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={`${styles.heroboxText}`}>
					<h1 className={`${styles.heading}`}>
						Ultimate Amazon Wholesale <br /> Sourcing Tools
					</h1>
					<p className={`${styles.tagline}`}>
						Scout, source, and sell high demand, winning products<br />
						for your Wholesale business with prime FBA tools.
					</p>

					<CTAButton
						type="primary"
						size="medium"
						navigateTo="/"
						className={styles.ctaHeroBox}
					>
						Try Sellgo for $1
					</CTAButton>

					<small className={`${styles.ctaOverText}`}>
						Or get started with FREE tools, and <br /> upgrade as your grow
					</small>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

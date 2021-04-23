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
						Find Winning <br /> Wholesale Products!
					</h1>
					<p className={`${styles.tagline}`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea
					</p>

					<CTAButton type="primary" size="medium" navigateTo="/">
						Get Sellgo Free
					</CTAButton>

					<small className={`${styles.ctaOverText}`}>
						Get started with FREE tools, and <br /> upgrade as your grow
					</small>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

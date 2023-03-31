import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.heroBox}`}>
			<h2 className="secondary-heading">
				AiStock empowers 1000s of brands like yours.
			</h2>
			<p>
				Ecommerce inventory software for growing companies is the perfect
				solution for business owners looking to make more sales. No more lost
				orders, out-of-stock products or unexpected expenses - our software
				manages your entire inventory and ship process, giving you accurate and
				up-to-the minute information on your inventory levels.
			</p>
		</section>
	);
};

export default HeroBox;

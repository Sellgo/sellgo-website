import React from 'react';
import dynamic from 'next/dynamic';

/* Styling */
import styles from './index.module.scss';

/* Components */
const Map = dynamic(() => import('../Map'), { ssr: false });

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.heroBox}`}>
			<Map />
		</section>
	);
};

export default HeroBox;

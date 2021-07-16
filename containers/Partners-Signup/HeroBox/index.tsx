import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<>
			<div className={styles.heroBoxWrapper}>
				<div className={styles.heroBoxLogo}>
					<Image src="/sellgoIcon.svg" alt={`sellgo-logo`} width={100} height={100} />
				</div>

				<div className={styles.heroBoxText}>
					<h1>Sellgo Affiliate {<br/>}Application Form</h1>
					<p>
						Join one of the best programs in our industry become a 
						member of the Sellgo family. Once approved, promote our 
						innovative, powerful tools with your audience and start 
						making money with Sellgo! Earn 25% of every purchase when 
						one of your audience members signs up using your affiliate link.
					</p>
				</div>
			</div>
		</>
	);
};

export default HeroBox;

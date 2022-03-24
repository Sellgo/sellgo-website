import React from 'react';

import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const TrustedBySection: React.FC<Props> = () => {
	return (
		<section className={styles.trustedBySectionWrapper}>
			<div className={`page-container ${styles.trustedBySection}`}>
				<h2>Trusted by Many Entrepreneurs at Amazon including</h2>
				<div className={styles.socialProofIcons}>
					<div>
						<Image
							src={'/TenFactorLogo.png'}
							alt="TenFactorLogo"
							width={100}
							height={100}
						/>
					</div>
					<div>
						<Image
							src={'/MetkixLogo.png'}
							alt="TenFactorLogo"
							width={70}
							height={30}
						/>
					</div>
					<div>
						<Image
							src={'/LuxeLogo.png'}
							alt="LuxeLogo"
							width={100}
							height={52}
						/>
					</div>
					<div>
						<Image
							src={'/SkopeLogo.png'}
							alt="SkopeLogo"
							width={100}
							height={100}
						/>
					</div>
					<div>
						<Image src={'/BBLogo.png'} alt="BBLogo" width={100} height={17} />
					</div>
					<div>
						<Image src={'/BFLogo.png'} alt="BFLogo" width={100} height={50} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrustedBySection;

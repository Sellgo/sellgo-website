import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../CTAButton';

interface Props {
	className?: string;
}

const FreeTrialCTABox: React.FC<Props> = (props) => {
	const { className } = props;
	return (
		<section
			className={`big-page-container ${styles.freeTrialCTABox} ${className}`}
		>
			<div className={styles.infoWrapper}>
				<div className={styles.infoWrapper__Desc}>
					<h2>Free Trial</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
				</div>
				<CTAButton
					type="secondary"
					size="medium"
					navigateTo="/"
					className={styles.freeTrialCTA}
				>
					Get Started Free
				</CTAButton>
			</div>

			<ul className={styles.detailsListWrapper}>
				<li className={styles.detailsList}>
					<span>
						<Image
							src="/checkMark.svg"
							width={10}
							height={8}
							alt="Check Mark Icon"
						/>
					</span>
					Product
				</li>

				<li className={styles.detailsList}>
					<span>
						<Image
							src="/checkMark.svg"
							width={10}
							height={8}
							alt="Check Mark Icon"
						/>
					</span>
					Product
				</li>

				<li className={styles.detailsList}>
					<span>
						<Image
							src="/checkMark.svg"
							width={10}
							height={8}
							alt="Check Mark Icon"
						/>
					</span>
					Product
				</li>

				<li className={styles.detailsList}>
					<span>
						<Image
							src="/checkMark.svg"
							width={10}
							height={8}
							alt="Check Mark Icon"
						/>
					</span>
					Product
				</li>

				<li className={styles.detailsList}>
					<span>
						<Image
							src="/checkMark.svg"
							width={10}
							height={8}
							alt="Check Mark Icon"
						/>
					</span>
					Product
				</li>

				<li className={styles.detailsList}>
					<span>
						<Image
							src="/checkMark.svg"
							width={10}
							height={8}
							alt="Check Mark Icon"
						/>
					</span>
					Product
				</li>

				<li>
					<a href="#!" className="anchor">
						See all features
					</a>
				</li>
			</ul>
		</section>
	);
};

export default FreeTrialCTABox;

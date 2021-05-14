import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../CTAButton';

interface Props {
	className?: string;
	isPrimary?: boolean;
}

const FreeTrialCTABox: React.FC<Props> = (props) => {
	const { className, isPrimary } = props;
	return (
		<section
			className={`big-page-container ${styles.freeTrialCTABox} ${className}`}
		>
			<div className={styles.infoWrapper}>
				<div className={styles.infoWrapper__Desc}>
					<h2>Sellgo Free Trial</h2>
					<p></p>
				</div>

				<div className={styles.freeTrailCTAWrapper}>
					<CTAButton
						type={isPrimary ? 'primary' : 'secondary'}
						size="medium"
						navigateTo="https://app.sellgo.com/signup/?type=free"
						className={styles.freeTrialCTA}
					>
						Try Now for Free
					</CTAButton>
					<p>We offer a 7-day free trial with no credit card required.</p>
				</div>
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
					Browser Extension
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
					Search Management
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
					Profit Finder
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
					Product Tracker
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
					Seller Finder
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

import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../CTAButton';
import Check from '../Icons/Check';

/* Utils */
import { createCheckoutLink } from '../../utils/Referral';

interface Props {
	className?: string;
	isPrimary?: boolean;
	planName: string;
}

const DollarPlanCTABox: React.FC<Props> = (props) => {
	const { className, isPrimary, planName } = props;
	const dollarPlanLink = createCheckoutLink('daily', planName);

	return (
		<section
			className={`big-page-container ${styles.dollarPlanCTABox} ${className}`}
		>
			<div className={styles.infoWrapper}>
				<div className={styles.infoWrapper__Desc}>
					<h2>Pay $1 for a day</h2>
					<p>
						Access Sellgo&apos;s $1 Amazon tools and integrate them into your
						Amazon business.
					</p>
				</div>

				<div className={styles.dollarPlanCTAWrapper}>
					<CTAButton
						type={isPrimary ? 'primary' : 'secondary'}
						size="medium"
						navigateTo={dollarPlanLink}
						asExternal
						newTarget
						className={styles.dollarPlanCTA}
					>
						Try Now for $1
					</CTAButton>
					<p>Pay less on software, invest more in your business.</p>
				</div>
			</div>

			<ul className={styles.detailsListWrapper}>
				<li className={styles.detailsList}>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Browser Extension
				</li>

				<li className={styles.detailsList}>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Search Management
				</li>

				<li className={styles.detailsList}>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Profit Finder
				</li>

				<li className={styles.detailsList}>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Product Tracker
				</li>

				<li className={styles.detailsList}>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Seller Database
				</li>
			</ul>
		</section>
	);
};

export default DollarPlanCTABox;

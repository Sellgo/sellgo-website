import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../CTAButton';
import Tooltip from '../Tooltip';
import Check from '../Icons/Check';

/* Utils */
import { createFreeTrialLink } from '../../utils/Referral';

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
					<h2>Free Trial</h2>
					<p>
						Access all of Sellgo&apos;s free trial Amazon tools and integrate
						them into your Amazon business.
					</p>
				</div>

				<div className={styles.freeTrailCTAWrapper}>
					<Tooltip
						text="We are experiencing outage currently"
						trigger={
							<CTAButton
								type={isPrimary ? 'primary' : 'secondary'}
								size="medium"
								disabled
								navigateTo={createFreeTrialLink()}
								asExternal
								newTarget
								className={styles.freeTrialCTA}
							>
								Sign up free
							</CTAButton>
						}
					/>
					<p>Try for free, no credit card required.</p>
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
					Seller Finder
				</li>
			</ul>
		</section>
	);
};

FreeTrialCTABox.defaultProps = {
	className: '',
	isPrimary: false
};

export default FreeTrialCTABox;

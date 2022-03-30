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
	const [showAllFeatures, setShowAllFeatures] = React.useState<boolean>(false);

	return (
		<section
			className={`big-page-container ${styles.dollarPlanCTABox} ${className}`}
		>
			<div className={styles.infoWrapper}>
				<div className={styles.infoWrapper__Desc}>
					<h2>Pay $1.99 for a day</h2>
					<p>
						Access Sellgo&apos;s $1.99 Amazon tools and integrate them into your
						Amazon business.
					</p>
				</div>

				<div className={styles.dollarPlanCTAWrapper}>
					<CTAButton
						type={isPrimary ? 'primary' : 'secondary'}
						size="medium"
						variant="purplePinkRainbow"
						navigateTo={dollarPlanLink}
						asExternal
						newTarget
						className={styles.dollarPlanCTA}
					>
						Try now for $1.99
					</CTAButton>
					<p>Pay less on software, invest more in your business.</p>
				</div>
			</div>

			<div className={styles.detailsListWrapper}>
				<a
					href="/extension"
					className={styles.detailsList}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Browser Extension
				</a>

				{showAllFeatures && (
					<a
						href="/search-management"
						className={styles.detailsList}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>
							<Check fill="#3b4557" width={10} height={8} />
						</span>
						Search Management
					</a>
				)}

				<a
					href="/profit-finder"
					className={styles.detailsList}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Profit Finder
				</a>

				{showAllFeatures && (
					<a
						href="/leads-tracker"
						className={styles.detailsList}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>
							<Check fill="#3b4557" width={10} height={8} />
						</span>
						Leads Tracker
					</a>
				)}

				{showAllFeatures && (
					<a
						href="/seller-finder"
						className={styles.detailsList}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>
							<Check fill="#3b4557" width={10} height={8} />
						</span>
						Seller Finder
					</a>
				)}

				<a
					href="/seller-database"
					className={styles.detailsList}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Seller Database
				</a>

				<a
					href="/seller-map"
					className={styles.detailsList}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Seller Map
				</a>

				{showAllFeatures && (
					<a
						href="/keyword-finder"
						className={styles.detailsList}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>
							<Check fill="#3b4557" width={10} height={8} />
						</span>
						Keyword Finder
					</a>
				)}

				<a
					href="/keyword-database"
					className={styles.detailsList}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>
						<Check fill="#3b4557" width={10} height={8} />
					</span>
					Keyword Database
				</a>

				{showAllFeatures && (
					<a
						href="/product-rank-tracker"
						className={styles.detailsList}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>
							<Check fill="#3b4557" width={10} height={8} />
						</span>
						Product Rank Tracker
					</a>
				)}

				<button
					className={styles.viewAllFeatures}
					onClick={() => setShowAllFeatures(!showAllFeatures)}
				>
					{showAllFeatures ? 'View less' : 'View all features >'}
				</button>
			</div>
		</section>
	);
};

DollarPlanCTABox.defaultProps = {
	className: '',
	isPrimary: false
};

export default DollarPlanCTABox;

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

const FreePlanCtaBox: React.FC<Props> = (props) => {
	const { className, isPrimary, planName } = props;
	const signupLink = createCheckoutLink('daily', planName);
	const [showAllFeatures, setShowAllFeatures] = React.useState<boolean>(false);

	return (
		<section
			className={`big-page-container ${styles.dollarPlanCTABox} ${className}`}
		>
			<div className={styles.infoWrapper}>
				<div className={styles.infoWrapper__Desc}>
					<h2>Research market and competitor&apos;s product in seconds.</h2>
					<p>
						Sellgo will help you find the right markets and the right products
						to sell, with access to daily sales data you need to make informed
						decisions.
					</p>
				</div>

				<div className={styles.dollarPlanCTAWrapper}>
					<CTAButton
						type={isPrimary ? 'primary' : 'secondary'}
						size="medium"
						variant="purplePinkRainbow"
						navigateTo={signupLink}
						asExternal
						newTarget
						className={styles.dollarPlanCTA}
					>
						Get Started Free
					</CTAButton>
					<p>No credit card required</p>
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

				{showAllFeatures && (
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

FreePlanCtaBox.defaultProps = {
	className: '',
	isPrimary: false
};

export default FreePlanCtaBox;

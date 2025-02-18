import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../CTAButton';
import Check from '../Icons/Check';

/* Utils */
interface Props {
	className?: string;
	isPrimary?: boolean;
	planName?: string; // eslint-disable-line
}

const FreePlanCtaBox: React.FC<Props> = (props) => {
	const { className, isPrimary } = props;
	const [showAllFeatures, setShowAllFeatures] = React.useState<boolean>(false);

	return (
		<section
			className={`big-page-container ${styles.dollarPlanCTABox} ${className}`}
		>
			<div className={styles.infoWrapper}>
				<div className={styles.infoWrapper__Desc}>
					<h2>Take control of your leads and own your goals.</h2>
					<p>
						Access and analyze Amazon sellers growth across essential performing
						metrics, engage with sales calls, email and phone outreach, and
						business website.
					</p>
				</div>

				<div className={styles.dollarPlanCTAWrapper}>
					<CTAButton
						type={isPrimary ? 'primary' : 'secondary'}
						size="medium"
						variant="purplePinkRainbow"
						navigateTo="/"
						asExternal
						newTarget
						className={styles.dollarPlanCTA}
					>
						Try for FREE
					</CTAButton>
					<p>Premium leads. Instant access. Easy workflow.</p>
				</div>
			</div>

			<div className={styles.detailsListWrapper}>
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
	isPrimary: false,
	planName: ''
};

export default FreePlanCtaBox;

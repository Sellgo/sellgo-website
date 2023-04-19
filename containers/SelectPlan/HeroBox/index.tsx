import React, { useState } from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import LinkedIn from '../../../components/Icons/SocialIcons/LinkedIn';
import Facebook from '../../../components/Icons/SocialIcons/Facebook';
import Instagram from '../../../components/Icons/SocialIcons/Instagram';

/* Utils */
import { createSignupLink } from '../../../utils/Referral';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	const [selectedPlan, setSelectedPlan] = useState('');

	console.log(selectedPlan);

	return (
		<section className={styles.heroboxWrapper}>
			<div className={`page-container ${styles.herobox}`}>
				<h1 className={styles.heading}>Select your plan to get started</h1>

				<div className={styles.selections}>
					<button
						className={`${
							selectedPlan === 'professional' ? styles.selected : ''
						} ${styles.selection}`}
						onClick={() => setSelectedPlan('professional')}
					>
						<h2>It's just for me</h2>
						<p>
							Try our <strong>Professional</strong> plan free for 7 days
						</p>
						<img src="https://picsum.photos/450/270" alt="professional" />
						<h3>1 User</h3>
						<h3>12,000 brand insights</h3>

						<ul>
							<li>
								<a
									href="https://www.facebook.com/sellgoinc/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Facebook width={15} height={20} fill="000" />
								</a>
							</li>

							<li>
								<a
									href="https://www.instagram.com/sellgoinc_/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Instagram width={15} height={20} fill="#000" />
								</a>
							</li>

							<li>
								<a
									href="https://www.linkedin.com/company/sellgo/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<LinkedIn width={15} height={20} fill="#000" />
								</a>
							</li>
						</ul>
					</button>
					<button
						className={`${selectedPlan === 'team' ? styles.selected : ''} ${
							styles.selection
						}`}
						onClick={() => setSelectedPlan('team')}
					>
						<h2>I have a team</h2>
						<p>
							Try our <strong>Team</strong> plan free for 7 days
						</p>
						<img src="https://picsum.photos/450/270" alt="team" />
						<h3>3 Users</h3>
						<h3>24,000 brand insights</h3>

						<ul>
							<li>
								<a
									href="https://www.facebook.com/sellgoinc/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Facebook width={15} height={20} fill="000" />
								</a>
							</li>

							<li>
								<a
									href="https://www.instagram.com/sellgoinc_/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Instagram width={15} height={20} fill="#000" />
								</a>
							</li>

							<li>
								<a
									href="https://www.linkedin.com/company/sellgo/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<LinkedIn width={15} height={20} fill="#000" />
								</a>
							</li>
						</ul>
					</button>
				</div>

				<div>
					<CTAButton
						type="primary"
						size="medium"
						variant={'purplePinkRainbow'}
						navigateTo={
							selectedPlan === 'team'
								? createSignupLink('TEAM_PLAN')
								: createSignupLink('PROFESSIONAL_PLAN')
						}
						asExternal
						newTarget
					>
						Start your free 7-day trial
					</CTAButton>

					<CTAButton
						type="link"
						size="small"
						variant={'white'}
						navigateTo={
							selectedPlan === 'team'
								? createSignupLink('TEAM', 'buynow')
								: createSignupLink('PROFESSIONAL_PLAN', 'buynow')
						}
						asExternal
						newTarget
						className={styles.skipTrialBtn}
					>
						or Skip trial, get 20% off
					</CTAButton>
				</div>

				<div className={styles.features}>
					<div className={styles.feature}>
						<LinkedIn width={55} height={40} fill="#000" />
						<p>Launch Outreach in minutes</p>
					</div>

					<div className={styles.feature}>
						<LinkedIn width={55} height={40} fill="#000" />
						<p>Increase in productivity</p>
					</div>

					<div className={styles.feature}>
						<LinkedIn width={55} height={40} fill="#000" />
						<p>Increase closing rate</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

import React, { useState } from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../components/CTAButton';

/* Utils */
import { createSignupLink } from '../../utils/Referral';
import Chart50h50v from '../../components/Icons/Chart50h50v';
import PiggyBank50h50v from '../../components/Icons/PiggyBank50h50v';
import Seedling50h50v from '../../components/Icons/Seedling50h50v';
import LinkedIn from '../../components/Icons/SocialIcons/LinkedIn';
import Facebook from '../../components/Icons/SocialIcons/Facebook';
import Instagram from '../../components/Icons/SocialIcons/Instagram';
import Twitter from '../../components/Icons/SocialIcons/Twitter';
import DecisionMaker from '../../components/Icons/DecisionMaker';
import Email from '../../components/Icons/Email';
import Phone from '../../components/Icons/Phone';

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
						<img src="first_selectPlan.png" alt="professional" />
						<h3>1 User</h3>
						<h3>12,000 brand insights</h3>

						<ul>
							<li>
								<DecisionMaker width={17} height={20} fill="#012b3b" />
							</li>
							<li>
								<Email width={20} height={17} fill="#012b3b" />
							</li>
							<li>
								<Phone width={17} height={18} fill="#012b3b" />
							</li>
							<li>
								<LinkedIn width={15} height={20} fill="#012b3b" />
							</li>
							<li>
								<Twitter width={15} height={20} fill="#012b3b" />
							</li>
							<li>
								<Facebook width={15} height={20} fill="#012b3b" />
							</li>
							<li>
								<Instagram width={15} height={20} fill="#012b3b" />
							</li>
						</ul>
					</button>
					<button
						className={`${selectedPlan === 'business' ? styles.selected : ''} ${
							styles.selection
						}`}
						onClick={() => setSelectedPlan('business')}
					>
						<h2>I have a team</h2>
						<p>
							Try our <strong>Business</strong> plan free for 7 days
						</p>
						<img src="third_selectPlan.png" alt="team" />
						<h3>5 Users</h3>
						<h3>36,000 brand insights</h3>

						<ul>
							<li>
								<DecisionMaker width={17} height={20} fill="#012b3b" />
							</li>
							<li>
								<Email width={20} height={17} fill="#012b3b" />
							</li>
							<li>
								<Phone width={17} height={18} fill="#012b3b" />
							</li>
							<li>
								<LinkedIn width={15} height={20} fill="#012b3b" />
							</li>
							<li>
								<Twitter width={15} height={20} fill="#012b3b" />
							</li>
							<li>
								<Facebook width={15} height={20} fill="#012b3b" />
							</li>
							<li>
								<Instagram width={15} height={20} fill="#012b3b" />
							</li>
						</ul>
					</button>
				</div>

				<div>
					<CTAButton
						type="primary"
						size="medium"
						variant={'rainbow'}
						disabled={!selectedPlan}
						navigateTo={
							selectedPlan === 'business'
								? createSignupLink('BUSINESS_PLAN')
								: createSignupLink('PROFESSIONAL_PLAN')
						}
						asExternal
						newTarget
						className={styles.ctaBtn}
					>
						Start your free 7-day trial
					</CTAButton>

					<CTAButton
						type="link"
						size="small"
						variant={'white'}
						disabled={!selectedPlan}
						navigateTo={
							selectedPlan === 'business'
								? createSignupLink('BUSINESS_PLAN', 'buynow')
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
						<PiggyBank50h50v width={50} height={50} fill="#1e1e1e" />
						<h2>Reduce cost</h2>
						<p>Bring down customer acquisition cost more than 50%</p>
					</div>

					<div className={styles.feature}>
						<Chart50h50v width={50} height={50} fill="#1e1e1e" />
						<h2>Increase revenue</h2>
						<p>
							Beat your own sales number than ever before with high quality
							leads
						</p>
					</div>

					<div className={styles.feature}>
						<Seedling50h50v width={50} height={50} fill="#1e1e1e" />
						<h2>Increase ROI</h2>
						<p>Solidify your sales processes and grow your business</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;

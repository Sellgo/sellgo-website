import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import DemoForm from './DemoForm';

/* Utils */
import Chart50h50v from '../../components/Icons/Chart50h50v';
import PiggyBank50h50v from '../../components/Icons/PiggyBank50h50v';
import Seedling50h50v from '../../components/Icons/Seedling50h50v';

interface Props {}

const RequestDemo: React.FC<Props> = () => {
	return (
		<section className={styles.heroboxWrapper}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={styles.formWrapper}>
					<div className={styles.info}>
						<h1 className={styles.heading}>See Sellgo in action</h1>
						<p>
							Experience a live customized demo, get answers to your specific
							questions, and find out why Sellgo is the right choice for your
							organization.
						</p>

						<h2>What can I expect?</h2>

						<div className={styles.featureList}>
							<div>
								<img
									src="/check-solid-green.svg"
									width={20}
									height={20}
									alt="check-solid-green"
								/>
								<p>
									A brief conversation to discuss your social KPIs, reporting
									needs, and how your team uses social to build your brand and
									connect with customers
								</p>
							</div>
							<div>
								<img
									src="/check-solid-green.svg"
									width={20}
									height={20}
									alt="check-solid-green"
								/>
								<p>
									Live demonstration of our Enterprise platform, tailored to the
									way you work
								</p>
							</div>
							<div>
								<img
									src="/check-solid-green.svg"
									width={20}
									height={20}
									alt="check-solid-green"
								/>
								<p>
									All your questions answered to make sure you have all the
									information you need
								</p>
							</div>
							<div>
								<img
									src="/check-solid-green.svg"
									width={20}
									height={20}
									alt="check-solid-green"
								/>
								<p>No commitment whatsoever</p>
							</div>
						</div>
					</div>

					<DemoForm />
				</div>

				<div className={styles.claimsContainer}>
					<div className={styles.claim}>
						<div>
							<h2>1M</h2>
							<span style={{ color: 'green' }}>+</span>
						</div>
						<p>Claim</p>
					</div>

					<div className={styles.claim}>
						<div>
							<h2>1M</h2>
							<span style={{ color: 'magenta' }}>+</span>
						</div>
						<p>Claim</p>
					</div>

					<div className={styles.claim}>
						<div>
							<h2>1M</h2>
							<span style={{ color: 'red' }}>+</span>
						</div>
						<p>Claim</p>
					</div>
				</div>

				<div className={styles.featuresContainer}>
					<h2>Custom solutions for your business’s unique needs</h2>
					<div className={styles.features}>
						<div className={styles.feature}>
							<PiggyBank50h50v width={50} height={50} fill="#1e1e1e" />
							<h3>Launch Outreach in minutes</h3>
							<p>
								Starting with no audience to
								<strong>fully Launched in less than 5 min.</strong>
							</p>
						</div>

						<div className={styles.feature}>
							<Chart50h50v width={50} height={50} fill="#1e1e1e" />
							<h3>Increase in productivity</h3>
							<p>
								The easiest and most efficient way to engage to decision makers
								with
								<strong>verified multi-channel contacts.</strong>
							</p>
						</div>

						<div className={styles.feature}>
							<Seedling50h50v width={50} height={50} fill="#1e1e1e" />
							<h3>Increase closing rate</h3>
							<p>
								When you drive quality leads to your qualifying funnels,
								resulting in{' '}
								<strong>
									more demos scheduled and more business closings.
								</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RequestDemo;

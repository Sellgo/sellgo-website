import React from 'react';
import Image from 'next/image';

/* Styling */
import Link from 'next/link';
import styles from './index.module.scss';

interface Props {}

const GeneralSolutionsSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.otherInfoSection}`}>
			<h2 className={styles.sectionHeading}>
				Explore our three main superpowers
			</h2>
			<p className={styles.sectionDesc}>
				Our three core superpowers help us to things that are impossible for
				anyone else.
			</p>

			<div className={styles.cardsSectionWrapper}>
				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}>
						<div className={styles.heroImagewWrapper}>
							<Image
								src="/usecaseQualify.png"
								width={330}
								height={410}
								alt="alt"
								className={styles.heroImage}
							/>
						</div>
					</div>
					<h4 className={styles.cardsWrapper__Text}>
						Qualify
						<p>One single dashboard for everywhere you sell</p>
					</h4>
					<Link href="/qualify" passHref>
						<a className={styles.cardsWrapper__Link}>
							Learn more about Qualify &nbsp;
							<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						</a>
					</Link>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}>
						<div className={styles.heroImagewWrapper}>
							<Image
								src="/usecaseAutomate.png"
								width={330}
								height={410}
								alt="alt"
								className={styles.heroImage}
							/>
						</div>
					</div>
					<h4 className={styles.cardsWrapper__Text}>
						Automate
						<p>Tools to put your inventory orders in order</p>
					</h4>
					<Link href="/list" passHref>
						<a className={styles.cardsWrapper__Link}>
							Learn more about List &nbsp;
							<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						</a>
					</Link>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}>
						<div className={styles.heroImagewWrapper}>
							<Image
								src="/usecaseScale.png"
								width={330}
								height={410}
								alt="alt"
								className={styles.heroImage}
							/>
						</div>
					</div>
					<h4 className={styles.cardsWrapper__Text}>
						Scale
						<p>Data to power your growth</p>
					</h4>
					<Link href="/engage" passHref>
						<a className={styles.cardsWrapper__Link}>
							Learn more about Engage &nbsp;
							<Image src="/blueLongArrowRight.svg" width={20} height={8} />
						</a>
					</Link>
				</div>
			</div>

			{/* <h2 className="secondary-heading">Partnerships?</h2>
			<p className={styles.partnershipDesc}>
				Help your clients reach their goals by becoming an affiliate partner.
			</p>
			<button className={styles.otherInfoSectionCTA}>
				<RainbowText type="orange_purple_gradient">Get started</RainbowText>
	</button> */}
		</section>
	);
};

export default GeneralSolutionsSection;

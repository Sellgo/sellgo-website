import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/aboutPage';
import LinkedIn from '../../components/Icons/SocialIcons/LinkedIn';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const AboutUsPage: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main className={styles.aboutUs}>
				<section className={`page-container ${styles.welcomeSection}`}>
					<div className={styles.welcomeSection__text}>
						<h1>Welcome to Sellgo</h1>

						<p>
							Our mission at Sellgo is to empower Amazon sellers with the right
							tools and data to grow successful businesses.
						</p>

						<p>
							Sellgo was created by Amazon sellers for Amazon sellers. While
							Sellgo started off specializing in Amazon FBA and Amazon
							Wholesale, we&apos;ve built our tools and services to encompass
							all sellers with any model and any level of experience including
							Amazon FBA or Amazon FBA as well as Wholesalers, Private Label
							Sellers, and Agencies.
						</p>

						<p>
							While our company is headquartered in Portland, Oregon, our team
							members span across the globe and are unified with the same
							passion and mission: to help Amazon sellers flourish. If you would
							like to learn more about Sellgo, our team, or our mission, we
							welcome you to send us a message at{' '}
							<a href="mailto:support@sellgo.com" className="anchor">
								support@sellgo.com
							</a>
							.
						</p>

						<p>
							Richard Prasojo - CEO/ Founder
						</p>
						

					</div>

					<div className={styles.welcomeSection__image}>
						<Image
							src="/richardImage.png"
							width={300}
							height={300}
							alt="Welcome to sellgo"
						/>
					</div>
				</section>

				<section className={`page-container ${styles.contentSection}`}>
					<div
						className={`${styles.contentSection__text} ${styles.contentSection__text__reversed}`}
					>
						<h2>Our tools and services</h2>

						<p>
							At Sellgo, we have developed useful tools that you can start using
							now: Chrome Extension, Product Research, Seller Research, Keyword
							Research, and Perfect Stock. These tools were made to assist
							sellers at every stage of their selling journey.
						</p>
						<p>
							To learn more about our tools and services, check out our product
							pages.
						</p>
					</div>

					<div className={styles.contentSection__image}>
						<Image
							src="/seller_map_1.png"
							width={600}
							height={360}
							alt="Tools and Services"
						/>
					</div>
				</section>

				<section className={`page-container ${styles.contentSection}`}>
					<div className={`${styles.contentSection__text}`}>
						<h2>Our pricing plans</h2>

						<p>
							We currently offer a $1.99 and premium plan that you can sign-up
							for now. Our plans are meant to help any seller at any level of
							experience.
						</p>

						<p>
							For our premium plans, starting with the Starter plan, the
							Professional plan, and ending with the Team plan. Each plan can be
							chosen based on the size and needs of your business.
						</p>
					</div>

					<div className={styles.contentSection__image}>
						<Image
							src="/product_tracker_1.png"
							width={600}
							height={360}
							alt="Pricing Plans section showcase"
						/>
					</div>
				</section>

				<section className={`page-container ${styles.contentSection} $`}>
					<div
						className={`${styles.contentSection__text} ${styles.contentSection__text__reversed}`}
					>
						<h2>Our team</h2>

						<p>
							Our team members and leadership consist of Amazon sellers just
							like you. We&apos;ve sold on Amazon and know what challenges and
							obstacles you may face. Our FBA tools and software solutions were
							made by Amazon sellers for Amazon sellers.
						</p>
					</div>

					<div className={styles.contentSection__image}>
						<Image
							src="/ourTeam_600x477.png"
							width={600}
							height={470}
							alt="Our teams setion showcase"
						/>
					</div>
				</section>

				{/* <section className={`page-container ${styles.contentSection}`}>
					<div className={`${styles.contentSection__text}`}>
						<h2>Careers</h2>
						<p>
							We’re a global team of Amazon sellers and experts from 16
							countries — and we’re proud to serve entrepreneurs and brands from
							around the world.
						</p>
						<CTAButton
							type="secondary"
							size="small"
							navigateTo="/careers"
							className={styles.aboutUsCTA}
						>
							Work with us
						</CTAButton>
					</div>

					<div className={styles.contentSection__image}>
						<Image
							src="/ourTeam_600x477.png"
							width={600}
							height={495}
							alt="Our Team Image"
						/>
					</div>
				</section> */}

				<section className={`page-container ${styles.queryCardsWrapper}`}>
					<div className={styles.queryCard}>
						<h3>Media inquiry</h3>
						<p>Please contact:</p>
						<div className={styles.queryCard__links}>
							<a href="mailto:press@sellgo.com" className="anchor">
								press@sellgo.com
							</a>
						</div>
					</div>

					<div className={styles.queryCard}>
						<h3>Partnership</h3>
						<p>Please visit:</p>
						<div className={styles.queryCard__links}>							
								<Link href="/partnership-program" passHref>
									<b className="anchor">Partnership Program</b>
								</Link>
						</div>
					</div>

					<div className={styles.queryCard}>
						<h3>Questions</h3>
						<p>Please visit:</p>
						<div className={styles.queryCard__links}>
								<Link href="/contact" passHref>
									<b className="anchor">Contact us</b>
								</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default AboutUsPage;

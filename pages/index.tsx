import React from 'react';
import { GetStaticProps } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../apollo';

/* GraphQL */
import { GET_SHOW_CASE_BLOGS } from '../graphql/cms';

/* Containers */
import HeroBox from '../containers/HomePage/HeroBox';
import InfoSection from '../containers/HomePage/InfoSection';
import OpportunityBannerSection from '../containers/HomePage/OpportunityBannerSection';
import GlobalSellersBannerSection from '../containers/HomePage/GlobalSellersBannerSection';
import ProductsSection from '../containers/HomePage/ProductsSection';
import StatisticsSection from '../containers/HomePage/StatisticsSection';
import TestimonialsSection from '../containers/HomePage/TestimonialsSection';
import RecentBlogsSection from '../containers/HomePage/RecentBlogsSection';
import ClosingCTASection from '../containers/HomePage/ClosingCTASection';
import StepperInfoSection from '../containers/HomePage/StepperInfoSection';

/* Components */
import SEOHead from '../components/SEOHead';

/* Data */
import { seoData } from '../data/SEO/home';

/* Utils */
import { generatePageURL } from '../utils/SEO';

/* Types */
import { ShowcaseBlogDetails } from '../interfaces/Blogs';

interface Props {
	homeBlogs: ShowcaseBlogDetails[];
}

const HomePage: React.FC<Props> = (props) => {
	const { homeBlogs } = props;
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<HeroBox />
			<main>
				<StepperInfoSection />
				<OpportunityBannerSection />
				<InfoSection />
				<GlobalSellersBannerSection />
				<ProductsSection />
				<StatisticsSection />
				<TestimonialsSection />

				<div className={styles.divider}></div>

				<RecentBlogsSection recentBlogs={homeBlogs} />
				<div className={styles.divider}></div>

				<ClosingCTASection />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await client.query({
		query: GET_SHOW_CASE_BLOGS,
		variables: {
			count: 12
		}
	});

	const blogsForHome = response.data.posts.nodes;

	return {
		props: {
			homeBlogs: blogsForHome
		},
		revalidate: 60 * 30 // 30 minutes
	};
};

export default HomePage;

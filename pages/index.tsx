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
import FeaturesSection from '../containers/HomePage/FeaturesSection';
import ProductsSection from '../containers/HomePage/ProductsSection';
import StatisticsSection from '../containers/HomePage/StatisticsSection';
import FeatureComparisonTable from '../containers/HomePage/FeatureComparisonTable';
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
				<InfoSection />
				<StatisticsSection />
				<StepperInfoSection />
				<FeaturesSection />
				<ProductsSection />
				<FeatureComparisonTable />
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
	const blogResponse = await client.query({
		query: GET_SHOW_CASE_BLOGS,
		variables: {
			count: 12
		}
	});

	const blogsForHome = blogResponse.data.posts.nodes;

	// const limitDate = new Date(limitDateForCustomerCount).getTime();
	// let customerCount;
	// try {
	// 	const customerCountResponse = await axios.get(
	// 		`${AppConfig.API_URL}/customer-count?limit_date=${limitDate}`
	// 	);
	// 	customerCount = Math.max(customerCountResponse.data.count, 23);
	// } catch (error) {
	// 	customerCount = 56; // Random number for now
	// 	console.log(error);
	// }

	return {
		props: {
			homeBlogs: blogsForHome
		},
		revalidate: 60 * 10 // 10 minutes
	};
};

export default HomePage;

import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Apollo */
import client from '../apollo';

/* GraphQL */
import { GET_SHOW_CASE_BLOGS } from '../graphql/cms';

/* Containers */
import HeroBox from '../containers/HomePage/HeroBox';
import FeaturesSection from '../containers/HomePage/FeaturesSection';
import ProductsSection from '../containers/HomePage/ProductsSection';
import StatisticsSection from '../containers/HomePage/StatisticsSection';
import FeatureComparisonTable from '../containers/HomePage/FeatureComparisonTable';
import TestimonialsSection from '../containers/HomePage/TestimonialsSection';
import RecentBlogsSection from '../containers/HomePage/RecentBlogsSection';
import StepperInfoSection from '../containers/HomePage/StepperInfoSection';
import FAQSection from '../containers/HomePage/FAQSection';
/* Components */
import SEOHead from '../components/SEOHead';

/* Data */
import { seoData } from '../data/SEO/home';

/* Utils */
import { generatePageURL } from '../utils/SEO';
import AppConfig from '../config';

/* Types */
import { ShowcaseBlogDetails } from '../interfaces/Blogs';

/* Constants */
import { limitDateForCustomerCount } from '../constants';
import ProductCardsSection from '../containers/HomePage/ProductCardsSection';
import NewClosingCTASection from '../containers/HomePage/NewClosingCTA';
import { FAQDetails } from '../interfaces/FAQ';

interface Props {
	homeBlogs: ShowcaseBlogDetails[];
	faqDetails: FAQDetails;
}

const HomePage: React.FC<Props> = (props) => {
	const { homeBlogs, faqDetails } = props;
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
				<StatisticsSection />
				<ProductCardsSection />
				<FeaturesSection />
				<FeatureComparisonTable />
				<TestimonialsSection />
				<ProductsSection />
				<RecentBlogsSection recentBlogs={homeBlogs} />
				{faqDetails.data.length > 0 && <FAQSection faqData={faqDetails.data} />}
				<NewClosingCTASection />
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

	const limitDate = new Date(limitDateForCustomerCount).getTime();
	let customerCount;
	try {
		const customerCountResponse = await axios.get(
			`${AppConfig.API_URL}/customer-count?limit_date=${limitDate}`
		);
		customerCount = Math.max(customerCountResponse.data.count, 23);
	} catch (error) {
		customerCount = 23; // Random number for now
	}

	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/aistock.json`);
	const { data } = response;

	return {
		props: {
			homeBlogs: blogsForHome,
			customerCount,
			faqDetails: data
		},
		revalidate: 60 * 10 // 10 minutes
	};
};

export default HomePage;

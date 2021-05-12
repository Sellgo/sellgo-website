import React from 'react';
import { GetStaticProps } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../apollo';

/* GraphQL */
import { GET_BLOGS_FOR_HOME } from '../graphql/cms';

/* Containers */
import HeroBox from '../containers/HomePage/HeroBox';
import InfoSection from '../containers/HomePage/InfoSection';
import ProductsSection from '../containers/HomePage/ProductsSection';
import StatisticsSection from '../containers/HomePage/StatisticsSection';
import TestimonialsSection from '../containers/HomePage/TestimonialsSection';
import RecentBlogsSection from '../containers/HomePage/RecentBlogsSection';

/* Components */
import SEOHead from '../components/SEOHead';

interface Props {
	homeBlogs: any;
}

const HomePage: React.FC<Props> = (props) => {
	const { homeBlogs } = props;
	return (
		<>
			<SEOHead title="Sellgo" description="" imageUrl="" pageUrl="" />
			<HeroBox />
			<InfoSection />
			<section className={styles.homeBanner} />
			<ProductsSection />
			<StatisticsSection />
			<TestimonialsSection />
			<RecentBlogsSection recentBlogs={homeBlogs} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await client.query({
		query: GET_BLOGS_FOR_HOME
	});

	const blogsForHome = response.data.posts.nodes;

	return {
		props: {
			homeBlogs: blogsForHome
		}
	};
};
export default HomePage;

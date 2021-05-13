import React from 'react';
import { GetStaticProps } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../../apollo';

/* GraphQL */
import { GET_SHOW_CASE_BLOGS } from '../../graphql/cms';

/* Containers */
import BlogsShowCaseSection from '../../containers/Blogs/BlogsShowCaseSection';
import BlogsCategorySection from '../../containers/Blogs/BlogsCategorySection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/blogsShowcase';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {
	showcaseBlogs: any;
}

const BlogsPage: React.FC<Props> = (props) => {
	const { showcaseBlogs } = props;

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>

			<main className={`page-container ${styles.blogsPage}`}>
				{/* Blogs Showcase */}
				<BlogsShowCaseSection showcaseBlogs={showcaseBlogs} />

				<div className={styles.divider} />

				<BlogsCategorySection relatedBlogs={showcaseBlogs.slice(6)} />

				<section className={styles.banner} />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await client.query({ query: GET_SHOW_CASE_BLOGS });
	const showcaseBlogs = response.data.posts.nodes;

	return {
		props: {
			showcaseBlogs
		},
		revalidate: 1
	};
};

export default BlogsPage;

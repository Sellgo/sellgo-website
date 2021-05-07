import React from 'react';
import { GetStaticProps } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../../apollo';

/* GraphQL */
import { GET_SHOW_CASE_BLOGS } from '../../graphql/cms';

/* App Config */
import AppConfig from '../../config';

/* Containers */
import BlogsShowCaseSection from '../../containers/Blogs/BlogsShowCaseSection';
import BlogsCategorySection from '../../containers/Blogs/BlogsCategorySection';

/* Components */
import SEOHead from '../../components/SEOHead';

interface Props {
	showcaseBlogs: any;
}

const BlogsPage: React.FC<Props> = (props) => {
	const { showcaseBlogs } = props;

	const relatedBlogs = showcaseBlogs.splice(-4);

	return (
		<>
			<SEOHead
				title="Blogs | Sellgo"
				description="Blogs Page For Sellgo"
				imageUrl=""
				pageUrl={`${AppConfig.WEB_URL}/blogs`}
			/>

			<main className={`page-container ${styles.blogsPage}`}>
				{/* Blogs Showcase */}
				<BlogsShowCaseSection showcaseBlogs={showcaseBlogs} />

				<div className={styles.divider} />

				<BlogsCategorySection relatedBlogs={relatedBlogs} />

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

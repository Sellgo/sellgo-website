import React from 'react';
import { GetStaticProps } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../../apollo';

/* GraphQL */
import { GET_SHOW_CASE_BLOGS } from '../../graphql/cms';

/* Components */
import BigFeatureCard from '../../components/BlogFeatureCards/BigFeatureCard';
import SmallFeatureCard from '../../components/BlogFeatureCards/SmallFeatureCard';
import FilteredBlogs from '../../components/FilteredBlogs';

interface Props {
	showcaseBlogs: any;
}

const BlogsPage: React.FC<Props> = (props) => {
	const { showcaseBlogs } = props;

	return (
		<main className={`page-container ${styles.blogsPage}`}>
			<section className={styles.blogsHeroSection}>
				<div className={styles.blogsHeroSection__Left}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[0]} />
				</div>

				<aside className={styles.blogsHeroSection__Right}>
					<FilteredBlogs label="Popular Blogs" />
					<FilteredBlogs label="Editors Choice" />
				</aside>
			</section>

			<section className={styles.recommededSection}>
				<div className={styles.recommededSection__Left}>
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[1]} />
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[2]} />
				</div>
				<aside className={styles.recommededSection__Right}>
					<div className={styles.newsLetter} />
				</aside>
			</section>

			<section className={styles.otherBlogsSection}>
				<div className={styles.otherBlogsSection__Left}>
					<div className={styles.report}></div>
				</div>
				<aside className={styles.otherBlogsSection__Right}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[3]} />
				</aside>
			</section>

			<section className={styles.lastBlogsSection}>
				<div className={styles.lastBlogsSection__Left}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[4]} />
				</div>
				<aside className={styles.lastBlogsSection__Right}>
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[5]} extended />
				</aside>
			</section>
		</main>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await client.query({ query: GET_SHOW_CASE_BLOGS });
	const showcaseBlogs = response.data.posts.nodes;

	return {
		props: {
			showcaseBlogs
		}
	};
};

export default BlogsPage;

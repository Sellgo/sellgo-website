import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import ReactPaginate from 'react-paginate';

import { useLazyQuery } from '@apollo/client';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../../apollo';

/* GraphQL */
import {
	GET_FILTERED_BLOGS,
	GET_PAGINATED_BLOGS,
	GET_SHOW_CASE_BLOGS
} from '../../graphql/cms';

/* Containers */
import BlogsShowCaseSection from '../../containers/Blogs/BlogsShowCaseSection';
// import BlogsCategorySection from '../../containers/Blogs/BlogsCategorySection';
import ShowCaseHeroBox from '../../containers/Blogs/ShowCaseHerobox';

/* Components */
import SEOHead from '../../components/SEOHead';
import LeftArrow from '../../components/Arrow/LeftArrow';
import RightArrow from '../../components/Arrow/RightArrow';
import ClientOnly from '../../components/ClientOnly';

/* Data */
import { seoData } from '../../data/SEO/blogsShowcase';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {
	showcaseBlogs: any;
	editorsChoiceBlogs: any;
	popularChoiceBlogs: any;
	totalPages: {
		total: number;
	};
}

const BlogsPage: React.FC<Props> = (props) => {
	const {
		showcaseBlogs,
		popularChoiceBlogs,
		editorsChoiceBlogs,
		totalPages
	} = props;

	const [blogs, setBlogs] = useState<any>(showcaseBlogs);

	const [getMoreBlogs, { data, loading }] = useLazyQuery(GET_PAGINATED_BLOGS);

	const handlePageChange = (data: { selected: number }) => {
		const selectedPageNumber = data.selected + 1;

		if (selectedPageNumber === 1) {
			setBlogs(showcaseBlogs);
		} else {
			const offsetValue = (selectedPageNumber - 1) * 6;
			getMoreBlogs({ variables: { offsetValue: offsetValue + 1 } });
		}
	};

	useEffect(() => {
		if (data) {
			setBlogs(data.posts.nodes);
		}
	}, [data]);

	console.log(data);

	return (
		<ClientOnly>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<ShowCaseHeroBox />
			<main className={`page-container ${styles.blogsPage}`}>
				{/* Blogs Showcase */}
				<BlogsShowCaseSection
					showcaseBlogs={blogs}
					popularChoiceBlogs={popularChoiceBlogs}
					editorsChoiceBlogs={editorsChoiceBlogs}
					loading={loading}
				/>

				<ReactPaginate
					pageCount={Math.round(totalPages.total / 6)}
					pageRangeDisplayed={3}
					marginPagesDisplayed={1}
					previousLabel={<LeftArrow width={10} height={16} fill="#808080" />}
					nextLabel={<RightArrow width={10} height={16} fill="#808080" />}
					activeClassName="active"
					containerClassName="pagination"
					onPageChange={handlePageChange}
				/>
				<div className={styles.divider} />

				{/* <BlogsCategorySection relatedBlogs={showcaseBlogs.slice(6)} /> */}

				<section className={styles.banner} />
			</main>

			{/* Mount all page modal */}
			<div id="newsLetterMount"></div>
		</ClientOnly>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const showCaseBlogsResponse = await client.query({
		query: GET_SHOW_CASE_BLOGS
	});

	const editorsChoiceBlogsResponse = await client.query({
		query: GET_FILTERED_BLOGS,
		variables: {
			value: 'Editors Choice'
		}
	});

	const popularChoiceBlogsResponse = await client.query({
		query: GET_FILTERED_BLOGS,
		variables: {
			value: 'Popular Choice'
		}
	});

	const showcaseBlogs = showCaseBlogsResponse.data.posts.nodes;
	const totalPages = showCaseBlogsResponse.data.posts.pageInfo;
	const editorsChoiceBlogs = editorsChoiceBlogsResponse.data.posts.nodes;
	const popularChoiceBlogs = popularChoiceBlogsResponse.data.posts.nodes;

	return {
		props: {
			showcaseBlogs,
			editorsChoiceBlogs,
			popularChoiceBlogs,
			totalPages
		},
		revalidate: 1
	};
};

export default BlogsPage;

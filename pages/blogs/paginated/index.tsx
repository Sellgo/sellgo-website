import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../../../apollo';

/* GraphQL */
import {
	GET_FILTERED_BLOGS,
	GET_FILTERED_LATEST_BLOGS,
	GET_PAGINATED_BLOGS
} from '../../../graphql/cms';

/* Containers */
import ShowCaseHeroBox from '../../../containers/Blogs/ShowCaseHerobox';
import BlogsShowCaseSection from '../../../containers/Blogs/BlogsShowCaseSection';

/* Components */
import SEOHead from '../../../components/SEOHead';
import LeftArrow from '../../../components/Icons/Chervons/Left';
import RightArrow from '../../../components/Icons/Chervons/Right';
import ReCaptchaNewsLetter from '../../../components/ReCaptchaNewsLetter';

/* Data */
import { seoData } from '../../../data/SEO/blogsShowcase';

/* Utils */
import { generatePageURL } from '../../../utils/SEO';

interface Props {
	paginatedBlogs: any;
	editorsChoiceBlogs: any;
	popularChoiceBlogs: any;
	latestBlogs: any;
	totalPages: {
		total: number;
	};
	pageNumber: number;
}

const BlogsPage: React.FC<Props> = (props) => {
	const {
		paginatedBlogs,
		popularChoiceBlogs,
		editorsChoiceBlogs,
		latestBlogs,
		totalPages,
		pageNumber
	} = props;

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const router = useRouter();

	useEffect(() => {
		if (pageNumber === 1) {
			router.push('/blogs');
		}
	}, []);

	const handlePageChange = (data: { selected: number }) => {
		const selectedPageNumber = data.selected + 1;

		if (selectedPageNumber === 1) {
			router.push('/blogs');
		} else {
			router.push({
				pathname: '/blogs/paginated',
				query: { page: selectedPageNumber }
			});
		}
	};

	return (
		<>
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
					showcaseBlogs={paginatedBlogs}
					popularChoiceBlogs={popularChoiceBlogs}
					editorsChoiceBlogs={editorsChoiceBlogs}
					openNewsletterModal={() => setIsOpen(true)}
					latestBlogs={latestBlogs}
				/>

				<ReactPaginate
					pageCount={Math.floor(totalPages.total / 6)}
					pageRangeDisplayed={3}
					marginPagesDisplayed={1}
					previousLabel={<LeftArrow width={10} height={16} fill="#808080" />}
					nextLabel={<RightArrow width={10} height={16} fill="#808080" />}
					activeClassName="active"
					containerClassName="pagination"
					onPageChange={handlePageChange}
					initialPage={pageNumber - 1}
				/>
				<div className={styles.divider} />

				<section className={styles.banner}>
					<div className={styles.banner__left}>
						<h3>Subscribe to our newsletter</h3>
						<p>
							Join our subscriber&apos;s list to get the latest update and
							articles delivered directly to your inbox.
						</p>
					</div>

					<div className={styles.banner__right}>
						<button onClick={() => setIsOpen(true)}>Subscribe</button>
					</div>
				</section>
			</main>

			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<ReCaptchaNewsLetter closeModal={() => setIsOpen(false)} />
			</Modal>

			{/* Mount all page modal */}
			<div id="newsLetterMount"></div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const pageNumber = Number(context?.query?.page) || 1;

	const offsetValue = (pageNumber - 1) * 6;

	const showCaseBlogsResponse = await client.query({
		query: GET_PAGINATED_BLOGS,
		variables: {
			offsetValue
		}
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

	const latestBlogsResponse = await client.query({
		query: GET_FILTERED_LATEST_BLOGS
	});

	const paginatedBlogs = showCaseBlogsResponse.data.posts.nodes;
	const totalPages = showCaseBlogsResponse.data.posts.pageInfo;
	const editorsChoiceBlogs = editorsChoiceBlogsResponse.data.posts.nodes;
	const popularChoiceBlogs = popularChoiceBlogsResponse.data.posts.nodes;
	const latestBlogs = latestBlogsResponse.data.posts.nodes;

	const isInvalidPage = pageNumber > Math.floor(totalPages.total / 6);

	if (!paginatedBlogs.length || isInvalidPage) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			paginatedBlogs,
			editorsChoiceBlogs,
			popularChoiceBlogs,
			latestBlogs,
			totalPages,
			pageNumber
		}
	};
};

export default BlogsPage;

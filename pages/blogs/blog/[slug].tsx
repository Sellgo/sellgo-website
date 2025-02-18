import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../../containers/Blogs/HeroBox';
import ShareBlogSection from '../../../containers/Blogs/ShareBlogSection';
import RelatedBlogsSection from '../../../containers/Blogs/RelatedBlogsSection';
import BlogCtaBanner from '../../../components/BlogCtaBanner';

/* Components */
import SEOHead from '../../../components/SEOHead';

/* App Config */
import AppConfig from '../../../config';

/* Apollo */
import client from '../../../apollo';

/* GraphQL */
import {
	GET_ALL_SLUGS,
	GET_BLOG_BY_SLUG,
	GET_TOTAL_BLOGS_COUNT
} from '../../../graphql/cms';

/* Types */
import {
	FeaturedImage,
	Author,
	ShowcaseBlogDetails
} from '../../../interfaces/Blogs';

/* Constants */
import { BLOG_CATEGORY_MAPPINGS } from '../../../constants/Blog';

interface Props {
	date: Date;
	author: Author;
	seo: any;
	content: string;
	title: string;
	slug: string;
	featuredImage: FeaturedImage;
	shortSummary: string;
	keywords: string;
	relatedBlogs: ShowcaseBlogDetails[];
	categories: any;
}

const BlogPage: React.FC<Props> = (props) => {
	const {
		seo,
		content,
		slug,
		featuredImage,
		title,
		date,
		author,
		shortSummary,
		keywords,
		relatedBlogs,
		categories
	} = props;

	let blogCtaType = 'freeAccount1';
	if (categories.edges && categories.nodes) {
		const primaryCategoryIndex = categories.edges?.findIndex(
			(edge: any) => edge.isPrimary
		);
		const primaryCategory = categories.nodes[primaryCategoryIndex];
		blogCtaType =
			BLOG_CATEGORY_MAPPINGS[primaryCategory?.name] || 'Amazon FBA Tools';
	}

	return (
		<>
			<SEOHead
				title={seo.title || 'Blog | Sellgo'}
				description={seo.metaDesc}
				imageUrl={featuredImage?.node?.sourceUrl || ''}
				pageUrl={`${AppConfig.WEB_URL}/blogs/blog/${slug}`}
				keywords={keywords || ''}
			/>
			<HeroBox
				title={title}
				author={author}
				date={date}
				shortSummary={shortSummary}
				featuredImage={featuredImage}
			/>
			<main className={`page-container ${styles.blogsPage}`}>
				<article
					className={`blog-content-container ${styles.blog}`}
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</main>
			<ShareBlogSection
				pageUrl={`${AppConfig.WEB_URL}/blogs/blog/${slug}`}
				title={title}
			/>
			<BlogCtaBanner type={blogCtaType} />
			<RelatedBlogsSection relatedBlogs={relatedBlogs} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: totalBlogsCount } = await client.query({
		query: GET_TOTAL_BLOGS_COUNT
	});

	const totalCount = totalBlogsCount.posts.pageInfo.total;

	const { data: allBlogsSlugs } = await client.query({
		query: GET_ALL_SLUGS,
		variables: { size: totalCount }
	});

	const blogPaths = allBlogsSlugs.posts.nodes.map((nodeValue: any) => ({
		params: { slug: nodeValue.slug }
	}));

	return {
		paths: blogPaths,
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const response = await client.query({
		query: GET_BLOG_BY_SLUG,
		variables: {
			slug: params?.slug
		}
	});
	if (!response.data.postBy) {
		return {
			notFound: true
		};
	}

	const {
		date,
		author,
		title,
		content,
		seo,
		slug,
		featuredImage,
		excerpt,
		seoMetaTags,
		relatedPosts,
		categories
	} = response.data.postBy;

	return {
		props: {
			date,
			author: author.node,
			title,
			content,
			seo,
			slug,
			featuredImage,
			shortSummary: excerpt,
			keywords: seoMetaTags.keywords,
			relatedBlogs: relatedPosts.nodes,
			categories
		},
		revalidate: 60 * 10 // 10 minutes
	};
};
export default BlogPage;

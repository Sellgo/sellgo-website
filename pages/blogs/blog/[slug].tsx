import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Components */
import SEOHead from '../../../components/SEOHead';

/* App Config */
import AppConfig from '../../../config';

/* Apollo */
import client from '../../../apollo';

/* GraphQL */
import { GET_ALL_SLUGS, GET_BLOG_BY_SLUG } from '../../../graphql/cms';

/* Types */
import { FeaturedImage } from '../../../interfaces/Blogs';

/* Containers */
import HeroBox from '../../../containers/Blogs/HeroBox';

interface Props {
	author: string;
	seo: any;
	content: string;
	title: string;
	slug: string;
	featuredImage: FeaturedImage;
}

const BlogPage: React.FC<Props> = (props) => {
	const { seo, content, slug, featuredImage, title } = props;
	return (
		<>
			<SEOHead
				title={seo.title || 'Blog'}
				description={seo.metaDesc}
				imageUrl={featuredImage.node.sourceUrl || ''}
				pageUrl={`${AppConfig.WEB_URL}/blogs/blog/${slug}`}
			/>
			<HeroBox />
			<main className={`page-container ${styles.blogsPage}`}>
				<h1>{title}</h1>
				<article
					className={`blog-content-container ${styles.blog}`}
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</main>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await client.query({
		query: GET_ALL_SLUGS
	});

	const blogPaths = response.data.posts.nodes.map((nodeValue: any) => ({
		params: { slug: nodeValue.slug }
	}));

	return {
		paths: blogPaths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const response = await client.query({
		query: GET_BLOG_BY_SLUG,
		variables: {
			slug: params?.slug
		}
	});

	const {
		author,
		title,
		content,
		seo,
		slug,
		featuredImage
	} = response.data.postBy;

	return {
		props: {
			author: author.node.name,
			title,
			content,
			seo,
			slug,
			featuredImage
		},
		revalidate: 1
	};
};
export default BlogPage;

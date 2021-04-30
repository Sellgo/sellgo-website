import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

/*  Apollo */
import client from '../../../apollo';

/* Queries */
import { GET_ALL_SLUGS, GET_BLOG_BY_SLUG } from '../../../graphql/cms';

const options = {
	renderNode: {
		'embedded-asset-block': (node: any) => {
			console.log(node);
			return `<img class="img-fluid" />`;
		}
	}
};

const BlogPage = (props: any) => {
	const { blog } = props;
	return (
		<main className="big-page-container" style={{ minHeight: '100vh' }}>
			<h1>{blog.title}</h1>
			<section
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{
					__html: documentToHtmlString(blog.content.json, options)
				}}
			></section>
		</main>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await client.query({
		query: GET_ALL_SLUGS
	});

	const paths = response.data.blogsCollection.items.map((blogItem: any) => {
		return {
			params: {
				slug: blogItem.slug
			}
		};
	});

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const slug = context?.params?.slug || '';

	const response = await client.query({
		query: GET_BLOG_BY_SLUG,
		variables: {
			slug
		}
	});

	const blog = response.data.blogsCollection.items[0];

	return {
		props: {
			blog
		}
	};
};

export default BlogPage;

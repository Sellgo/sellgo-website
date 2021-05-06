/* eslint-disable react/no-danger */
import React from 'react';
import { GetStaticProps } from 'next';

import styles from './index.module.scss';

/* Apollo */
import client from '../../../apollo';

/* GraphQL */
import { GET_ALL_BLOGS } from '../../../graphql/cms';

interface Props {
	allBlogs: any;
}

const BlogPage: React.FC<Props> = (props) => {
	const { allBlogs } = props;

	return (
		<main className={`page-container ${styles.blogsPage}`}>
			<h1>{allBlogs.title}</h1>
			<article
				dangerouslySetInnerHTML={{ __html: allBlogs.content }}
				className={styles.blog}
			></article>
		</main>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await client.query({
		query: GET_ALL_BLOGS
	});

	const allBlogs = response.data.posts.nodes[0];

	return {
		props: {
			allBlogs
		}
	};
};

export default BlogPage;

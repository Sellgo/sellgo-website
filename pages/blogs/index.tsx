import React from 'react';
import { GetStaticProps } from 'next';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Apollo Client */
import client from '../../apollo';

/* Apollo Queries */
import { GET_ALL_BLOGS } from '../../graphql/cms';

interface Props {
	allBlogs: any;
}

const BlogsPage: React.FC<Props> = (props) => {
	const { allBlogs } = props;

	return (
		<section className={styles.blogsPage}>
			{allBlogs.map((blog: any) => {
				return (
					<div key={uuid()}>
						<Link href={`/blogs/blog/${blog.slug}`} passHref>
							<a>{blog.title}</a>
						</Link>
					</div>
				);
			})}
		</section>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await client.query({
		query: GET_ALL_BLOGS
	});

	return {
		props: {
			allBlogs: response.data.blogsCollection.items
		}
	};
};

export default BlogsPage;

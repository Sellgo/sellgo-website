import React, { memo } from 'react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';
import {
	formatBlogReadTime,
	generateCategoryDisplayName,
	formatBlogDate
} from '../../utils/Blogs';

/* Types */
import { FilteredBlog } from '../../interfaces/Blogs';

interface Props {
	label: string;
	blogs: FilteredBlog[];
	isLarge?: boolean;
}

const FilteredChoiceBlogs: React.FC<Props> = (props) => {
	const { label, blogs, isLarge } = props;

	return (
		<div
			className={`${styles.filteredBlogs} ${
				isLarge ? styles.filteredBlogs__large : ''
			}`}
		>
			<div className={styles.filterBlogLabel}>
				<p>{label}</p>
			</div>

			{blogs.map((blog: FilteredBlog) => {
				return (
					<div className={styles.blogTeaser} key={uuid()}>
						<Link passHref href={`/blogs/blog/${blog.slug}`}>
							<a>
								<p>{blog.title}</p>
							</a>
						</Link>
						<small>
							{formatBlogDate(blog.date.toString())} |&nbsp;
							{generateCategoryDisplayName(blog.categories.nodes)}{' '}
							{formatBlogReadTime(blog.readingTime.readtime)} Minute Read
						</small>
					</div>
				);
			})}
		</div>
	);
};

FilteredChoiceBlogs.defaultProps = {
	isLarge: false
};

export default memo(FilteredChoiceBlogs);

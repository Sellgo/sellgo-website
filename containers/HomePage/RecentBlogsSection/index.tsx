import React from 'react';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Component */
import BigBlogCard from './BigBlogCard';
import SmallBlogCard from './SmallBlogCard';

/* Types */
import { ShowcaseBlogDetails } from '../../../interfaces/Blogs';
import {
	formatBlogDate,
	formatBlogReadTime,
	generateCategoryDisplayName
} from '../../../utils/Blogs';

interface Props {
	recentBlogs: ShowcaseBlogDetails[];
}

const RecentBlogsSection: React.FC<Props> = (props) => {
	const { recentBlogs } = props;

	const recentArticlesSummary = recentBlogs.filter(
		(blog: any, index: number) => index < 9
	);

	return (
		<section className={`page-container ${styles.recentBlogsWrapper}`}>
			<h2 className={styles.blogTitle}>
				The latest news and tips for your Amazon business
			</h2>

			<div className={styles.blogsWrapper}>
				<div className={styles.blogsWrapper__left}>
					<BigBlogCard blogDetails={recentBlogs[11]} />
					<SmallBlogCard blogDetails={recentBlogs[10]} />
					<SmallBlogCard blogDetails={recentBlogs[9]} />
				</div>

				<div className={styles.blogsWrapper__right}>
					<div className={styles.recentArticlesWrapper}>
						<h3 className={styles.filterBlogLabel}> Latest Articles:</h3>
						{recentArticlesSummary.map((blog: any) => {
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

					<Link href="/blogs" passHref>
						<a className="anchor">
							More articles <span>&#8594;</span>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default RecentBlogsSection;

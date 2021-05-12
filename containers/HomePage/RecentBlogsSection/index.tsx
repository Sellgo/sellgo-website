import React from 'react';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Component */
import BigBlogCard from './BigBlogCard';
import SmallBlogCard from './SmallBlogCard';

interface Props {
	recentBlogs: any;
}

const RecentBlogsSection: React.FC<Props> = (props) => {
	const { recentBlogs } = props;

	const recentArticlesSummary = recentBlogs.filter(
		(blog: any, index: number) => index < 7
	);

	return (
		<section className={`page-container ${styles.recentBlogsWrapper}`}>
			<h2 className="secondary-heading">
				Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
			</h2>

			<div className={styles.blogsWrapper}>
				<div className={styles.blogsWrapper__left}>
					<BigBlogCard blogDetails={recentBlogs[9]} />
					<SmallBlogCard blogDetails={recentBlogs[8]} />
					<SmallBlogCard blogDetails={recentBlogs[7]} />
				</div>

				<div className={styles.blogsWrapper__right}>
					<div className={styles.recentArticlesWrapper}>
						<h3> Latest Articles:</h3>
						{recentArticlesSummary.map((blog: any) => {
							return (
								<div className={styles.recentArticleSummary} key={uuid()}>
									<small>{new Date(blog.date).toDateString()}</small>
									<p>
										<Link href={`/blogs/blog/${blog.slug}`} passHref>
											<a>{blog.title}</a>
										</Link>
									</p>
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

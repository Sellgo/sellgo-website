import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import BigFeatureCard from '../../components/BlogFeatureCards/BigFeatureCard';
import SmallFeatureCard from '../../components/BlogFeatureCards/SmallFeatureCard';
import FilteredBlogs from '../../components/FilteredBlogs';

interface Props {}

const BlogsPage: React.FC<Props> = () => {
	return (
		<main className={`page-container ${styles.blogsPage}`}>
			<section className={styles.blogsHeroSection}>
				<div className={styles.blogsHeroSection__Left}>
					<BigFeatureCard />
				</div>

				<aside className={styles.blogsHeroSection__Right}>
					<FilteredBlogs label="Popular Blogs" />
					<FilteredBlogs label="Editors Choice" />
				</aside>
			</section>

			<section className={styles.recommededSection}>
				<div className={styles.recommededSection__Left}>
					<SmallFeatureCard />
					<SmallFeatureCard />
				</div>
				<aside className={styles.recommededSection__Right}>
					<div className={styles.newsLetter} />
				</aside>
			</section>

			<section className={styles.otherBlogsSection}>
				<div className={styles.otherBlogsSection__Left}>
					<div className={styles.report}></div>
				</div>
				<aside className={styles.otherBlogsSection__Right}>
					<BigFeatureCard />
				</aside>
			</section>

			<section className={styles.lastBlogsSection}>
				<div className={styles.lastBlogsSection__Left}>
					<BigFeatureCard />
				</div>
				<aside className={styles.lastBlogSection__Right}>
					<SmallFeatureCard />
				</aside>
			</section>
		</main>
	);
};

export default BlogsPage;

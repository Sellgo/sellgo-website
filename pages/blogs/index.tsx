import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import BigFeatureCard from '../../components/BlogFeatureCards/BigFeatureCard';
import FilteredBlogs from '../../components/FilteredBlogs';

interface Props {}

const BlogsPage: React.FC<Props> = () => {
	return (
		<main className={`page-container ${styles.blogsPage}`}>
			<section className={styles.blogsHeroSection}>
				<article className={styles.blogCard}>
					<BigFeatureCard />
				</article>

				<aside className={styles.blogFilter}>
					<FilteredBlogs label="Popular Blogs" />
					<FilteredBlogs label="Editors Choice" />
				</aside>
			</section>
		</main>
	);
};

export default BlogsPage;

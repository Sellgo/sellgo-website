import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import BigFeatureCard from '../../../components/BlogFeatureCards/BigFeatureCard';
import SmallFeatureCard from '../../../components/BlogFeatureCards/SmallFeatureCard';
import FilteredBlogs from '../../../components/FilteredBlogs';

interface Props {
	showcaseBlogs: any;
}

const BlogsShowCaseSection: React.FC<Props> = (props) => {
	const { showcaseBlogs } = props;

	return (
		<>
			{/* Hero Section */}
			<section className={styles.blogsHeroSection}>
				<div className={styles.blogsHeroSection__Left}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[0]} />
				</div>

				<aside className={styles.blogsHeroSection__Right}>
					<FilteredBlogs label="Popular Blogs" />
					<FilteredBlogs label="Editors Choice" />
				</aside>
			</section>

			{/* Recommeded Section : Change name later */}
			<section className={styles.recommededSection}>
				<div className={styles.recommededSection__Left}>
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[1]} />
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[2]} />
				</div>
				<aside className={styles.recommededSection__Right}>
					<div className={styles.newsLetter} />
				</aside>
			</section>

			{/* Other Blogs Section: Change name later */}
			<section className={styles.otherBlogsSection}>
				<div className={styles.otherBlogsSection__Left}>
					<div className={styles.report}></div>
				</div>
				<aside className={styles.otherBlogsSection__Right}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[3]} />
				</aside>
			</section>

			{/* Last Blogs Section : Change name later */}
			<section className={styles.lastBlogsSection}>
				<div className={styles.lastBlogsSection__Left}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[4]} />
				</div>
				<aside className={styles.lastBlogsSection__Right}>
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[5]} />
				</aside>
			</section>
		</>
	);
};

export default BlogsShowCaseSection;

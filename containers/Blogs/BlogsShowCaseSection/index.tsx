import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import BigFeatureCard from '../../../components/BlogFeatureCards/BigFeatureCard';
import SmallFeatureCard from '../../../components/BlogFeatureCards/SmallFeatureCard';
import FilteredChoiceBlogs from '../../../components/FilteredBlogs';

interface Props {
	showcaseBlogs: any;
	popularChoiceBlogs: any;
	editorsChoiceBlogs: any;
}

const BlogsShowCaseSection: React.FC<Props> = (props) => {
	const { showcaseBlogs, popularChoiceBlogs, editorsChoiceBlogs } = props;

	return (
		<>
			{/* Hero Section */}
			<section className={styles.blogsHeroSection}>
				<div className={styles.blogsHeroSection__Left}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[0]} />
				</div>

				<aside className={styles.blogsHeroSection__Right}>
					<FilteredChoiceBlogs
						label="Popular Blogs"
						blogs={popularChoiceBlogs}
					/>
					<FilteredChoiceBlogs
						label="Editors Choice"
						blogs={editorsChoiceBlogs}
					/>
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

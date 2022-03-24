import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/demo';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const DemoPage: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main className={styles.demoPage}>
				<div className={styles.borderWrapper}>
					<div className={styles.youtubeEmbedContainer}>
						<iframe
							title="SellGo Demo Video"
							width="860"
							height="500"
							src={"https://www.youtube.com/embed/s2uqYrq5BZY"}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default DemoPage;
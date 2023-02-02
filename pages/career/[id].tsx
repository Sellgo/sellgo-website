import React from 'react';

/* Containers */
import JobDetails from '../../containers/Career/JobDetails';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/career';
/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const JobDetailsPage: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>

			<main>
				<JobDetails />
			</main>
		</>
	);
};

export default JobDetailsPage;

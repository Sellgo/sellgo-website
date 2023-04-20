import React from 'react';

/* Containers */
import RequestDemo from '../../containers/RequestDemo';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/requestDemo';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const RequestDemoPage: React.FC<Props> = () => {
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
				<RequestDemo />
			</main>
		</>
	);
};

export default RequestDemoPage;

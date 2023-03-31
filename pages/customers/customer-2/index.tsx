import React from 'react';

/* Containers */
import HeroBox from '../../../containers/Customers/CustomerTwo/HeroBox';
import NewClosingCTASection from '../../../containers/Customers/CustomerTwo/NewClosingCTA';
import ReviewSection from '../../../containers/Customers/CustomerTwo/ReviewSection';

/* Components */
import SEOHead from '../../../components/SEOHead';

/* Data */
import { seoData } from '../../../data/SEO/customerTwo';

/* Utils */
import { generatePageURL } from '../../../utils/SEO';

interface Props {}

const CustomerPage: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				keywords={seoData.keywords.join(',')}
				imageUrl={seoData.imageUrl}
				pageUrl={generatePageURL(seoData.slug)}
			/>

			<HeroBox />
			<ReviewSection />
			<NewClosingCTASection />
		</>
	);
};

export default CustomerPage;

import React from 'react';

/* Containers */
import HeroBox from '../../../containers/Customers/CustomerThree/HeroBox';
import NewClosingCTASection from '../../../containers/Customers/CustomerThree/NewClosingCTA';
import ReviewSection from '../../../containers/Customers/CustomerThree/ReviewSection';

/* Components */
import SEOHead from '../../../components/SEOHead';

/* Data */
import { seoData } from '../../../data/SEO/customerThree';

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

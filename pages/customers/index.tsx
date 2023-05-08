import React from 'react';

/* Containers */
import HeroBox from '../../containers/Customers/HeroBox';
import HowsBenefitsSection from '../../containers/Customers/HowsBenefitsSection';
import NewClosingCTASection from '../../containers/Customers/NewClosingCTA';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/customers';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

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
			<HowsBenefitsSection />
			<NewClosingCTASection />
		</>
	);
};

export default CustomerPage;

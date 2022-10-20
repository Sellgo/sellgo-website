import React from 'react';

/* Containers */
import HeroBox from '../../containers/SellerMaps/HeroBox';
import NewClosingCTASection from '../../containers/SellerMaps/NewClosingCTA';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/sellerMap';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

const SellerMapsContPage: React.FC = () => {
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
			<NewClosingCTASection />
		</>
	);
};

export default SellerMapsContPage;

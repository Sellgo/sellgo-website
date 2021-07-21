import React from 'react';

/* Containers */
import HeroBox from '../../containers/SellerMapCont/HeroBox';
import InfoSection from '../../containers/SellerMapCont/InfoSection';
import NewBenefitsSection from '../../containers/SellerMapCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/SellerMapCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/SellerMapCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/sellerMap';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const SellerMapContPage: React.FC<Props> = () => {
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
			<InfoSection />
			<NewBenefitsSection />
			<CommonFeaturesSection />
			<RecommendationSection />
		</>
	);
};

export default SellerMapContPage;

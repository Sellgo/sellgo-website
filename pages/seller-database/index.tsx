import React from 'react';

/* Containers */
import HeroBox from '../../containers/SellerDatabaseCont/HeroBox';
import InfoSection from '../../containers/SellerDatabaseCont/InfoSection';
import NewBenefitsSection from '../../containers/SellerDatabaseCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/SellerDatabaseCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/SellerDatabaseCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/SellerDatabase';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const SellerDatabaseContPage: React.FC<Props> = () => {
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

export default SellerDatabaseContPage;

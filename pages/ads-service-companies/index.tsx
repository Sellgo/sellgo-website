import React from 'react';

/* Containers */
import HeroBox from '../../containers/adsServiceCompaniesCont/HeroBox';
// import BannerImageSection from '../../containers/adsServiceCompaniesCont/BannerImageSection';
import CommonFeaturesSection from '../../containers/adsServiceCompaniesCont/CommonFeaturesSection';
import BenefitsSection from '../../containers/adsServiceCompaniesCont/BenefitsSection';
import GeneralSolutionsSection from '../../containers/adsServiceCompaniesCont/GeneralSolutionsSection';
import NewClosingCTASection from '../../containers/adsServiceCompaniesCont/NewClosingCTA';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/adsServiceCompanies';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const adsServiceCompaniesContPage: React.FC<Props> = () => {
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
			{/* <InfoSection /> */}
			<BenefitsSection />
			<CommonFeaturesSection />
			{/* <PlansSection /> */}
			<GeneralSolutionsSection />
			{/* <TrustedBySection /> */}
			<NewClosingCTASection />
		</>
	);
};

export default adsServiceCompaniesContPage;

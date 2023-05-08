import React from 'react';

/* Containers */
import HeroBox from '../../containers/marketingServiceCompaniesCont/HeroBox';
import CommonFeaturesSection from '../../containers/marketingServiceCompaniesCont/CommonFeaturesSection';
import BenefitsSection from '../../containers/marketingServiceCompaniesCont/BenefitsSection';
import GeneralSolutionsSection from '../../containers/marketingServiceCompaniesCont/GeneralSolutionsSection';
import NewClosingCTASection from '../../containers/marketingServiceCompaniesCont/NewClosingCTA';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/marketingServiceCompanies';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const marketingServiceCompaniesContPage: React.FC<Props> = () => {
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

export default marketingServiceCompaniesContPage;

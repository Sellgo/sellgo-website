import React from 'react';

/* Containers */
import HeroBox from '../../containers/saasCompaniesCont/HeroBox';
// import InfoSection from '../../containers/saasCompaniesCont/InfoSection';
import CommonFeaturesSection from '../../containers/saasCompaniesCont/CommonFeaturesSection';
// import PlansSection from '../../containers/saasCompaniesCont/PlansSection';
// import TrustedBySection from '../../containers/saasCompaniesCont/TrustedBySection';
import BenefitsSection from '../../containers/saasCompaniesCont/BenefitsSection';
import GeneralSolutionsSection from '../../containers/saasCompaniesCont/GeneralSolutionsSection';
import NewClosingCTASection from '../../containers/saasCompaniesCont/NewClosingCTA';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/saasCompanies';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const saasCompaniesContPage: React.FC<Props> = () => {
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

export default saasCompaniesContPage;

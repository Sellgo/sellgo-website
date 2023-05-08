import React from 'react';

/* Containers */
import HeroBox from '../../containers/ecomVendorCompaniesCont/HeroBox';
import CommonFeaturesSection from '../../containers/ecomVendorCompaniesCont/CommonFeaturesSection';
import BenefitsSection from '../../containers/ecomVendorCompaniesCont/BenefitsSection';
import GeneralSolutionsSection from '../../containers/ecomVendorCompaniesCont/GeneralSolutionsSection';
import NewClosingCTASection from '../../containers/ecomVendorCompaniesCont/NewClosingCTA';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/ecomVendorCompanies';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const ecomVendorCompaniesContPage: React.FC<Props> = () => {
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

export default ecomVendorCompaniesContPage;

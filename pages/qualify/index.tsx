import React from 'react';

/* Containers */
import HeroBox from '../../containers/qualifyCont/HeroBox';
// import BannerImageSection from '../../containers/qualifyCont/BannerImageSection';
// import InfoSection from '../../containers/qualifyCont/InfoSection';
import CommonFeaturesSection from '../../containers/qualifyCont/CommonFeaturesSection';
// import TrustedBySection from '../../containers/qualifyCont/TrustedBySection';
// import BenefitsSection from '../../containers/qualifyCont/BenefitsSection';
import PersonasSection from '../../containers/qualifyCont/PersonasSection';
import NewClosingCTASection from '../../containers/qualifyCont/NewClosingCTA';
import HowsBenefitsSection from '../../containers/qualifyCont/HowsBenefitsSection';
// import TestimonialsSection from '../../containers/qualifyCont/TestimonialsSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/qualify';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const qualifyContPage: React.FC<Props> = () => {
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
			{/* <BannerImageSection/> */}
			{/* <InfoSection /> */}
			<HowsBenefitsSection />
			<CommonFeaturesSection />
			{/* <TestimonialsSection /> */}
			<PersonasSection />
			{/* <TrustedBySection /> */}
			<NewClosingCTASection />
		</>
	);
};

export default qualifyContPage;

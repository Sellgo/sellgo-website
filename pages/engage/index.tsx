import React from 'react';

/* Containers */
import HeroBox from '../../containers/engageCont/HeroBox';
// import BannerImageSection from '../../containers/engageCont/BannerImageSection';
// import InfoSection from '../../containers/engageCont/InfoSection';
import CommonFeaturesSection from '../../containers/engageCont/CommonFeaturesSection';
// import TrustedBySection from '../../containers/engageCont/TrustedBySection';
// import BenefitsSection from '../../containers/engageCont/BenefitsSection';
import PersonasSection from '../../containers/engageCont/PersonasSection';
import NewClosingCTASection from '../../containers/engageCont/NewClosingCTA';
import HowsBenefitsSection from '../../containers/engageCont/HowsBenefitsSection';
// import TestimonialsSection from '../../containers/engageCont/TestimonialsSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/list';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const engageContPage: React.FC<Props> = () => {
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

export default engageContPage;

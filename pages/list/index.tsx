import React from 'react';

/* Containers */
import HeroBox from '../../containers/listCont/HeroBox';
// import BannerImageSection from '../../containers/listCont/BannerImageSection';
// import InfoSection from '../../containers/listCont/InfoSection';
import CommonFeaturesSection from '../../containers/listCont/CommonFeaturesSection';
// import TrustedBySection from '../../containers/listCont/TrustedBySection';
// import BenefitsSection from '../../containers/listCont/BenefitsSection';
import PersonasSection from '../../containers/listCont/PersonasSection';
import NewClosingCTASection from '../../containers/listCont/NewClosingCTA';
import HowsBenefitsSection from '../../containers/listCont/HowsBenefitsSection';
// import TestimonialsSection from '../../containers/listCont/TestimonialsSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/engage';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const listContPage: React.FC<Props> = () => {
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

export default listContPage;
